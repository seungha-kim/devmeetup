import {combineReducers} from 'redux'

import count from './count'
import sequencer from './sequencer'
import transport from './transport'

export default combineReducers({
  sequencer,
  count,
  transport
})
