import { RECEIVE_CITY, RECEIVE_CITIES } from '../const'
import apiWeather from '../../api/weather'


export function getCity(citiesId, params) {
  return dispatch => {
    apiWeather.getCity(citiesId, params)
      .then(({data: city}) => {
        console.log("RECEIVE CITY")
        dispatch({ type: RECEIVE_CITY, payload: { city } })
      })
  }
}

export function getCities(citiesId, params) {
  return dispatch => {
    apiWeather.getCities(citiesId, params)
      .then(({data}) => {
        const cities = data.list
        console.log("RECEIVE CITIES")
        dispatch({ type: RECEIVE_CITIES, payload: { cities } })
      })
  }
}