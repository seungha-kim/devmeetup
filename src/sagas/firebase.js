import {call, take, put} from 'redux-saga/effects'

import {
  AUTH_SIGN_IN_TRY,
  AUTH_SIGN_OUT_TRY
} from '../types'
import {
  authSignInSuccess,
  authSignOutSuccess
} from '../actions/auth'

function* signIn(auth, provider) {
  while (true) {
    yield take(AUTH_SIGN_IN_TRY)
    const result = yield call([auth, auth.signInWithPopup], provider)
    console.log(result)
    yield put(authSignInSuccess(result.user))
  }
}

function* signOut(auth) {
  while (true) {
    yield take(AUTH_SIGN_OUT_TRY)
    yield call([auth, auth.signOut])
    yield put(authSignOutSuccess())
  }
}

export default function* (auth, googleAuthProvider) {
  yield [
    call(signIn, auth, googleAuthProvider),
    call(signOut, auth)
  ]
}
