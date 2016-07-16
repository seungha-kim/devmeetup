import {delay} from 'redux-saga'
import {
  call,
  take,
  select,
  put,
  fork
} from 'redux-saga/effects'

import {TRANSPORT_NEXT_POSITION} from '../types'
import {transportNextPosition} from '../actions/transport'

function* interval() {
  while (true) {
    yield delay(1250000000)
    yield put(transportNextPosition())
  }
}

export default function* (Tone) {
  const synth = new Tone.Synth()
  yield call([synth, synth.toMaster])
  yield fork(interval)
  while (true) {
    yield take(TRANSPORT_NEXT_POSITION)
    const [transport, sequencer] = yield select(({transport, sequencer}) => {
      return [transport, sequencer]
    })
    if (sequencer.get(transport)) {
      yield call([synth, synth.triggerAttackRelease], 'C4', '8n')
    }
  }
}
