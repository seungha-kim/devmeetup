import {call} from 'redux-saga/effects'

import transport from './transport'
import firebase from './firebase'

export default function* rootSaga({
  Tone,
  firebaseApp,
  googleAuthProvider
}) {
  yield [
    call(transport, Tone),
    call(firebase, {firebaseApp, googleAuthProvider})
  ]
}
