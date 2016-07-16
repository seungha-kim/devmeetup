import {combineReducers} from 'redux'

import sequencer from './sequencer'
import transport from './transport'
import auth from './auth'
import people from './people'

export default combineReducers({
  sequencer,
  transport,
  auth,
  people
})
