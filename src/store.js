import {applyMiddleware, createStore, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import Tone from 'tone'
import firebase from 'firebase'

import rootReducer from './reducers'
import rootSaga from './sagas'

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET
})
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

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
sagaMiddleware.run(rootSaga, {
  Tone,
  firebaseApp,
  googleAuthProvider
})

export default store
