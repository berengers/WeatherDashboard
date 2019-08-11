import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { userParams } from './userParams'
import { currentCity, cities } from './city'

export default (history) => combineReducers({
  router: connectRouter(history),
  userParams,
  currentCity,
  cities
})