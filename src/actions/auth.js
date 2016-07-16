import {createAction} from 'redux-actions'

import {
  AUTH_SIGN_IN_TRY,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT_TRY,
  AUTH_SIGN_OUT_SUCCESS
} from '../types'

export const authSignInTry = createAction(AUTH_SIGN_IN_TRY)
export const authSignInSuccess = createAction(AUTH_SIGN_IN_SUCCESS)
export const authSignOutTry = createAction(AUTH_SIGN_OUT_TRY)
export const authSignOutSuccess = createAction(AUTH_SIGN_OUT_SUCCESS)
