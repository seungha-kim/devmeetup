import {createAction} from 'redux-actions'

import {
  STEP_ON,
  STEP_ON_TRY,
  STEP_OFF,
  STEP_OFF_TRY
} from '../types'

export const stepOn = createAction(STEP_ON)
export const stepOnTry = createAction(STEP_ON_TRY)
export const stepOff = createAction(STEP_OFF)
export const stepOffTry = createAction(STEP_OFF_TRY)
