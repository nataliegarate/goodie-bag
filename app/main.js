import React from 'react'
import ReactDOM from 'react-dom'
import {Candies} from './components/candies'
import {Provider} from 'react-redux'
import store from './store'
import Root from './components/root'


ReactDOM.render(
  <Provider store={store}>
   <Candies />
  </Provider>,
  document.getElementById('main')
)
