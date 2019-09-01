import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { HashRouter } from 'react-router-dom'
import { routerMiddleware } from 'connected-react-router'
import { history } from './js/store/reducer'

import './css/index.scss'
import './css/weather-icons.min.css'
import './css/weather-icons-wind.min.css'
import App from "./js/component/App.js"
import rootReducers from './js/store/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)