import {handleActions} from 'redux-actions'
import {LENGTH_OF_SEQUENCER} from '../constants'

import {
  TRANSPORT_PLAY,
  TRANSPORT_PAUSE,
  TRANSPORT_STOP,
  TRANSPORT_SET_POSITION,
  TRANSPORT_RESET_POSITION,
  TRANSPORT_NEXT_POSITION
} from '../types'

export default handleActions({
  [TRANSPORT_PLAY]: ({pos}) => ({playing: true, pos}),
  [TRANSPORT_PAUSE]: ({pos}) => ({playing: false, pos}),
  [TRANSPORT_STOP]: () => ({playing: false, pos: 0}),
  [TRANSPORT_RESET_POSITION]: ({playing}, _) => ({pos: 0, playing}),
  [TRANSPORT_SET_POSITION]: ({playing}, {payload}) => ({pos: payload, playing}),
  [TRANSPORT_NEXT_POSITION]: ({playing, pos}, _) => ({
    playing,
    pos: (pos + 1) % LENGTH_OF_SEQUENCER
  })
}, {
  pos: 0,
  playing: false
})
