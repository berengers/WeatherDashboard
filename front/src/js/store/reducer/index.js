import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { userParams } from './userParams'
import { detailsCity, cities } from './city'
import { searchedCities } from './searchCity'

export default (history) => combineReducers({
  router: connectRouter(history),
  userParams,
  detailsCity,
  cities,
  searchedCities
})