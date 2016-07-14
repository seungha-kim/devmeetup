import {applyMiddleware, createStore, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import Tone from 'tone'

import {
  sequencer,
  count,
  transport
} from './reducers'

import {
  count as countSaga,
  transport as transportSaga
} from './sagas'

const rootReducer = combineReducers({
  sequencer,
  count,
  transport
})

function* rootSaga() {
  yield [
    countSaga(),
    transportSaga(Tone)
  ]
}

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
    logger
  )
)
sagaMiddleware.run(rootSaga)

export default store
