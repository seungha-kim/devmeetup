// TODO: remove babel-polyfill and es2015 preset if ES6 is supported in Safari
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import Layout from './containers/Layout'

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.querySelector('#app')
)
