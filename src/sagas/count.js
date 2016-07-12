import {takeEvery, delay} from 'redux-saga'
import {put} from 'redux-saga/effects'

import {counterIncrement} from '../actions/counter'
import {COUNTER_INCREMENT_ASYNC} from '../actions/types'

export function* counterIncrementAsync() {
  yield delay(1000)
  yield put(counterIncrement(1))
}

export function* watchCounterIncrementAsync() {
  yield* takeEvery(COUNTER_INCREMENT_ASYNC, counterIncrementAsync)
}
