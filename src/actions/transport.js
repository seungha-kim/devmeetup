import {createAction} from 'redux-actions'

import {
  TRANSPORT_PLAY,
  TRANSPORT_PAUSE,
  TRANSPORT_STOP,
  TRANSPORT_SET_POSITION,
  TRANSPORT_RESET_POSITION,
  TRANSPORT_NEXT_POSITION
} from '../types'

export const transportSetPosition = createAction(TRANSPORT_SET_POSITION)
export const transportResetPosition = createAction(TRANSPORT_RESET_POSITION)
export const transportNextPosition = createAction(TRANSPORT_NEXT_POSITION)
export const transportPlay = createAction(TRANSPORT_PLAY)
export const transportPause = createAction(TRANSPORT_PAUSE)
export const transportStop = createAction(TRANSPORT_STOP)
