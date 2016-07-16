import {handleActions} from 'redux-actions'

import {PEOPLE_UPDATE} from '../types'

export default handleActions({
  [PEOPLE_UPDATE]: (_, {payload}) => payload
}, [])
