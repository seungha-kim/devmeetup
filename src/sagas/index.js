import {watchCounterIncrementAsync} from './count'

function* helloSaga() {
  console.log('hello-saga')
}

export default function* () {
  yield [
    helloSaga(),
    watchCounterIncrementAsync()
  ]
}
