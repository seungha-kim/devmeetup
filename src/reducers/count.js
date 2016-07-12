import {handleActions} from 'redux-actions'

import {COUNTER_INCREMENT} from '../actions/types'

export default handleActions({
  [COUNTER_INCREMENT]: (state, action) => state + action.payload
}, 0)
