import {eventChannel} from 'redux-saga'
import {call, take, put, fork, cancel} from 'redux-saga/effects'
import {peopleUpdate} from '../actions/people'

import {
  AUTH_SIGN_IN_TRY,
  AUTH_SIGN_OUT_TRY,
  STEP_ON,
  STEP_ON_TRY,
  STEP_OFF,
  STEP_OFF_TRY
} from '../types'
import {
  authSignInSuccess,
  authSignOutSuccess
} from '../actions/auth'
import {
  stepOn,
  stepOff
} from '../actions/step'

// TODO: make function for general purpose
function makeDataChannel(db, event, path) {
  const ref = db.ref(path)
  function listener(emitter, s) {
    emitter({val: s.val()})
  }
  const channel = eventChannel(emitter => {
    ref.on(event, s => listener(emitter, s))
  })
  function unsubscribe() {
    ref.off(event, listener)
  }
  return {unsubscribe, channel}
}

function* updatePeople(db) {
  const {unsubscribe, channel} = yield call(makeDataChannel, db, 'value', '/connections')
  try {
    while (true) {
      const {val: connections} = yield take(channel)
      const people = Object.keys(connections).map(uid => {
        const {email, displayName, photoURL} = connections[uid]
        return {uid, email, displayName, photoURL}
      })
      yield put(peopleUpdate(people))
    }
  } finally {
    yield call(unsubscribe)
  }
}

function* stepWatcher(db) {
  const ref = yield call([db, db.ref], '/sequencer')
  while (true) {
    const {type, payload: {trackNum, noteNum}} = yield take([STEP_ON_TRY, STEP_OFF_TRY])
    const newRef = ref.push()
    yield fork([newRef, newRef.set], {
      type: (type === STEP_ON_TRY ? STEP_ON : STEP_OFF),
      trackNum,
      noteNum
    })
  }
}

function* updateSequencer(db) {
  // TODO: transaction
  const {unsubscribe, channel} = yield call(makeDataChannel, db, 'child_added', '/sequencer')
  try {
    while (true) {
      const {val: {type, trackNum, noteNum}} = yield take(channel)
      const payload = {trackNum, noteNum}
      yield type === STEP_ON ? put(stepOn(payload)) : put(stepOff(payload))
    }
  } finally {
    yield call(unsubscribe)
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

    // establish data connections
    const updatePeopleTask = yield fork(updatePeople, db)
    const updateSequencerTask = yield fork(updateSequencer, db)
    const stepWatcherTask = yield fork(stepWatcher, db)

    // sign out
    yield take(AUTH_SIGN_OUT_TRY)
    yield [
      cancel(updatePeopleTask),
      cancel(updateSequencerTask),
      cancel(stepWatcherTask)
    ]
    yield call([ref, ref.remove])
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
