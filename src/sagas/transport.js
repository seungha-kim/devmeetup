import {apply, take} from 'redux-saga/effects'

import {TRANSPORT_NEXT_POSITION} from '../types'

export default function* (Tone) {
  const synth = new Tone.Synth()
  yield apply(synth, synth.toMaster)

  while (true) {
    yield take(TRANSPORT_NEXT_POSITION)
    yield apply(synth, synth.triggerAttackRelease, ['C4', '8n'])
  }
}
