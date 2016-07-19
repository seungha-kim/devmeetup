import {handleActions} from 'redux-actions'

import {
  AUTH_SIGN_OUT_SUCCESS,
  PEOPLE_UPDATE
} from '../types'

export default handleActions({
  [PEOPLE_UPDATE]: (_, {payload}) => payload,
  [AUTH_SIGN_OUT_SUCCESS]: () => []
}, [])
