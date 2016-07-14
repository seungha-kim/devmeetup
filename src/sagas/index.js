import {call} from 'redux-saga/effects'

import count from './count'
import transport from './transport'

export default function* rootSaga(Tone) {
  yield [
    call(count),
    call(transport, Tone)
  ]
}
