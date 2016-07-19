import I from 'immutable'

import {handleActions} from 'redux-actions'

import {STEP_ON, STEP_ON_TRY, STEP_OFF, STEP_OFF_TRY} from '../types'
import {LENGTH_OF_SEQUENCER, NUM_OF_INST} from '../constants'

export default handleActions({
  // FIXME
  [STEP_ON_TRY]: (state, {payload: {trackNum, noteNum}}) => state.setIn([trackNum, noteNum], {}),
  [STEP_OFF_TRY]: (state, {payload: {trackNum, noteNum}}) => state.setIn([trackNum, noteNum], {}),
  [STEP_ON]: (state, {payload: {trackNum, noteNum}}) => state.setIn([trackNum, noteNum], true),
  [STEP_OFF]: (state, {payload: {trackNum, noteNum}}) => state.setIn([trackNum, noteNum], false)
}, I.fromJS(Array(NUM_OF_INST).fill(Array(LENGTH_OF_SEQUENCER).fill(false))))
