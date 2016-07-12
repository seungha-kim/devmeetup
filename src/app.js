import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import Sequencer from './containers/Sequencer'
import SmartCounter from './containers/SmartCounter'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Sequencer />
      <SmartCounter />
    </div>
  </Provider>,
  document.querySelector('#app')
)
