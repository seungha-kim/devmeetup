import {createAction} from 'redux-actions'

import {STEP_ON, STEP_OFF} from './types'

export const stepOn = createAction(STEP_ON)
export const stepOff = createAction(STEP_OFF)
