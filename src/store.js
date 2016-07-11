import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers'
import createLogger from 'redux-logger'

const logger = createLogger()
const store = createStore(
  rootReducer,
  applyMiddleware(
    logger
  )
)

export default store
