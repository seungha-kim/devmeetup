import {combineReducers} from 'redux'

import sequencer from './sequencer'
import count from './count'

export default combineReducers({
  sequencer,
  count
})
