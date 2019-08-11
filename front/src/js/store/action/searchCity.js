import db from '../../api/db'
import { RECEIVE_SEARCH_CITIES } from '../const'

export function getOpenWeatherCities(text, limit) {
  return dispatch => {
    if (db.isAuthenticated()) {
      db.getOpenWeatherCities(text, limit)
        .then(({data: cities}) => {
          console.log("RECEIVE OPEN WEATHER CITIES")
          dispatch({ type: RECEIVE_SEARCH_CITIES, payload: { cities } })
        })
    }
  }
}