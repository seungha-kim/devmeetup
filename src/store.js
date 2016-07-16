import {applyMiddleware, createStore, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import Tone from 'tone'

import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      sagaMiddleware
    ),
    process.env.REDUX_DEVTOOLS && window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
sagaMiddleware.run(rootSaga, Tone)

export default store
