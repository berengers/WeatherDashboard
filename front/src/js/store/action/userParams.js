import db from '../../api/db'
import { RECEIVE_USER_PARAMS } from '../const'
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