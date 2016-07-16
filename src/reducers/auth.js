import {handleActions} from 'redux-actions'

import {
  AUTH_SIGN_IN_TRY,
  AUTH_SIGN_OUT_TRY,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT_SUCCESS
} from '../types'

export default handleActions({
  [AUTH_SIGN_IN_TRY]: (state, action) => ({
    currentUser: null,
    message: 'Signing in...'
  }),
  [AUTH_SIGN_IN_SUCCESS]: (state, {payload: currentUser}) => ({
    currentUser,
    message: 'Signed in!'
  }),
  [AUTH_SIGN_OUT_TRY]: (state, action) => ({
    ...state,
    message: 'Signing out...'
  }),
  [AUTH_SIGN_OUT_SUCCESS]: (state, action) => ({
    currentUser: null,
    message: 'Signed out!'
  })
}, {
  currentUser: null,
  message: 'No auth'
})
