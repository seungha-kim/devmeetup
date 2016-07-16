import {call} from 'redux-saga/effects'

import transport from './transport'

export default function* rootSaga(Tone) {
  yield [
    call(transport, Tone)
  ]
}
