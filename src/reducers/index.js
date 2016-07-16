import {combineReducers} from 'redux'

import count from './count'
import sequencer from './sequencer'
import transport from './transport'
import auth from './auth'

export default combineReducers({
  sequencer,
  count,
  transport,
  auth
})
