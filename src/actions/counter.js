import {createAction} from 'redux-actions'

import {
  COUNTER_INCREMENT,
  COUNTER_INCREMENT_ASYNC
} from './types'

export const counterIncrement = createAction(COUNTER_INCREMENT)
export const counterIncrementAsync = createAction(COUNTER_INCREMENT_ASYNC)
