import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { createHashHistory } from 'history'

import { userParams } from './userParams'
import { detailsCity, cities } from './city'
import { searchedCities } from './searchCity'
import { LOGOUT } from '../const';

export const history = createHashHistory()

const appReducer = combineReducers({
  router: connectRouter(history),
  userParams,
  detailsCity,
  cities,
  searchedCities
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer