import I from 'immutable'
import {handleActions} from 'redux-actions'

import {STEP_ON, STEP_OFF} from '../types'

export default handleActions({
  [STEP_ON]: (state, action) => state.set(action.payload, true),
  [STEP_OFF]: (state, action) => state.set(action.payload, false)
}, I.List([false, false, false, false, false, false, false, false]))
