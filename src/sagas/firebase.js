import {eventChannel} from 'redux-saga'
import {call, take, put, fork, cancel} from 'redux-saga/effects'
import {peopleUpdate} from '../actions/people'

import {
  AUTH_SIGN_IN_TRY,
  AUTH_SIGN_OUT_TRY
} from '../types'
import {
  authSignInSuccess,
  authSignOutSuccess
} from '../actions/auth'

// TODO: make function for general purpose
function connectionsChan(db) {
  const ref = db.ref('/connections')
  function listener(emitter, s) {
    emitter(s.val())
  }
  const chan = eventChannel(emitter => {
    ref.on('value', s => listener(emitter, s))
  })
  function unsubscribe() {
    ref.off('value', listener)
  }
  return [unsubscribe, chan]
}

function* updatePeople(chan) {
  while (true) {
    const connections = yield take(chan)
    const people = Object.keys(connections).map(uid => ({
      uid,
      ...connections[uid]
    }))
    yield put(peopleUpdate(people))
  }
}

export function* signIn(auth, provider, db) {
  while (true) {
    // sign in
    yield take(AUTH_SIGN_IN_TRY)
    const {user} = yield call([auth, auth.signInWithPopup], provider)
    yield put(authSignInSuccess(user))

    // make connection
    const {uid, displayName, email, photoURL} = user
    const ref = yield call([db, db.ref], `/connections/${uid}`)
    yield call([ref, ref.set], {displayName, email, photoURL})
    const onDisconnectRef = yield call([ref, ref.onDisconnect])
    onDisconnectRef.remove()

    // retrieve other's connections
    const [unsubscribe, chan] = yield call(connectionsChan, db)
    const updatePeopleTask = yield fork(updatePeople, chan)

    // sign out
    yield take(AUTH_SIGN_OUT_TRY)
    yield [
      call(unsubscribe),
      call([ref, ref.remove]),
      cancel(updatePeopleTask)
    ]
    yield call([auth, auth.signOut])
    yield put(authSignOutSuccess())
  }
}

export default function* ({
  firebaseApp: app,
  googleAuthProvider: provider
}) {
  const [auth, db] = yield [
    call([app, app.auth]),
    call([app, app.database])
  ]
  yield [
    call(signIn, auth, provider, db)
  ]
}
