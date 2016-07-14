import {handleActions} from 'redux-actions'

import {
  TRANSPORT_SET_POSITION,
  TRANSPORT_RESET_POSITION,
  TRANSPORT_NEXT_POSITION
} from '../types'

export default handleActions({
  [TRANSPORT_RESET_POSITION]: (state, action) => 0,
  [TRANSPORT_SET_POSITION]: (state, action) => action.payload,
  [TRANSPORT_NEXT_POSITION]: (state, action) => state >= 7 ? 0 : state + 1
}, 0)
