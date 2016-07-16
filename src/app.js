// TODO: remove babel-polyfill and es2015 preset if ES6 is supported in Safari
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import Sequencer from './containers/Sequencer'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Sequencer />
    </div>
  </Provider>,
  document.querySelector('#app')
)
