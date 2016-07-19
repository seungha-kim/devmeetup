import {delay} from 'redux-saga'
import {
  call,
  take,
  select,
  put,
  fork,
  cancel
} from 'redux-saga/effects'

import {
  TRANSPORT_PLAY,
  TRANSPORT_STOP,
  TRANSPORT_PAUSE,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT_SUCCESS
} from '../types'
import {
  transportStop,
  transportNextPosition
} from '../actions/transport'
import {
  NUM_OF_INST
} from '../constants'

function synthDef(Tone) {
  return [
    // kick
    new Tone.NoiseSynth({
      envelope: {
        attack: 0,
        decay: 0.1
      },
      volume: 5
    }).connect(new Tone.Filter({
      type: 'lowpass',
      frequency: 300
    }).toMaster()),
    // hihat
    new Tone.NoiseSynth({
      volume: -20
    }).connect(new Tone.Filter({
      type: 'bandpass',
      frequency: 8000
    }).toMaster()),
    // clap
    new Tone.NoiseSynth({
      envelope: {
        attack: 0,
        decay: 0.2
      },
      volume: -10
    }).connect(new Tone.Filter({
      type: 'lowpass',
      frequency: 2000
    }).toMaster()),
    // cymbal
    new Tone.NoiseSynth({
      envelope: {
        attack: 0,
        decay: 1
      }, volume: -20
    }).connect(new Tone.Filter({
      type: 'highpass',
      frequency: 5000
    }).toMaster())
  ]
}

function* tick(synths) {
  while (true) {
    const [pos, sequencer] = yield select(({transport: {pos}, sequencer}) => {
      return [pos, sequencer]
    })
    for (let i = 0; i < NUM_OF_INST; i++) {
      if (sequencer.getIn([i, pos])) {
        const synth = synths[i]
        yield call([synth, synth.triggerAttackRelease], '8n')
      }
    }
    yield delay(125)
    yield put(transportNextPosition())
  }
}

function* playStatusWatcher(synths) {
  try {
    while (true) {
      yield take(TRANSPORT_PLAY)
      const tickTask = yield fork(tick, synths)
      yield take([TRANSPORT_STOP, TRANSPORT_PAUSE])
      yield cancel(tickTask)
    }
  } finally {
    yield put(transportStop())
  }
}

export default function* (Tone) {
  const synths = synthDef(Tone)
  while (true) {
    yield take(AUTH_SIGN_IN_SUCCESS)
    const watcher = yield fork(playStatusWatcher, synths)
    yield take(AUTH_SIGN_OUT_SUCCESS)
    yield cancel(watcher)
  }
}
