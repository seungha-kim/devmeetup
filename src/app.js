import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import Sequencer from './containers/Sequencer'

// class MyComponent extends React.Component {
//   render () {
//     return (
//       <div>Hello</div>
//     )
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <Sequencer />
  </Provider>,
  document.querySelector('#app')
)
