import {handleActions} from 'redux-actions'

import {
  AUTH_SIGN_IN_TRY,
  AUTH_SIGN_OUT_TRY,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT_SUCCESS
} from '../types'

export default handleActions({
  [AUTH_SIGN_IN_TRY]: (state) => ({
    ...state,
    freezing: true
  }),
  [AUTH_SIGN_IN_SUCCESS]: (state, {payload: currentUser}) => ({
    currentUser,
    freezing: false
  }),
  [AUTH_SIGN_OUT_TRY]: (state) => ({
    ...state,
    freezing: true
  }),
  [AUTH_SIGN_OUT_SUCCESS]: (state) => ({
    freezing: false,
    currentUser: null
  })
}, {
  currentUser: null,
  freezing: false
})
