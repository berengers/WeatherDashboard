import db from '../../api/db'
import { RECEIVE_USER_PARAMS, UPDATE_PARAM } from '../const'
import { getDetailsCity, getCities } from './city'


export function getUserParams() {
  return dispatch => {
    if (db.isAuthenticated()) {
      db.getUserParams()
        .then(({data: userParams}) => {
          const params = userParams.userParam
          const citiesId = userParams.cities.map(city => city.openWeatherCityId)
          console.log("RECEIVE USER PARAMS")
          dispatch({ type: RECEIVE_USER_PARAMS, payload: { userParams } })
          dispatch(getDetailsCity(citiesId[0], params))
          dispatch(getCities(citiesId, params))
        })
    }
  }
}

export function updateParam(param, value) {
  return dispatch => {
    if (db.isAuthenticated()) {
      db.updateParam(param, value)
        .then(() => { })
      dispatch({ type: UPDATE_PARAM, payload: { param, value } })
    }
  }
}