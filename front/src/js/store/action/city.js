import { RECEIVE_DETAILS_CITY, RECEIVE_CITIES, ADD_CITY, ADD_CITY_GROUP, DELETE_CITY } from '../const'
import apiWeather from '../../api/weather'
import db from '../../api/db'


export function addCityGroup(cityId, params) {
  return dispatch => {
    apiWeather.getCity(cityId, params)
      .then(({data: city}) => {
        console.log("ADD CITY GROUP")
        dispatch({ type: ADD_CITY_GROUP, payload: { city } })
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

export function getDetailsCity(cityId, params) {
  return dispatch => {
    apiWeather.getDetailsCity(cityId, params)
      .then(({data: city}) => {
        console.log("RECEIVE CITY")
        dispatch({ type: RECEIVE_DETAILS_CITY, payload: { city } })
      })
  }
}

export function addCity(cityId, name, params) {
  return dispatch => {
    db.addCity(cityId, name)
      .then(({data: city}) => {
        console.log('ADD CITY')
        dispatch({ type: ADD_CITY, payload: { city } })
        dispatch(addCityGroup(cityId, params))
      })
  }
}

export function deleteCity(cityId, openWeatherCityId) {
  return dispatch => {
    db.deleteCity(cityId)
      .then(() => {
        console.log('DELETE CITY')
      })
    dispatch({ type: DELETE_CITY, payload: { cityId, openWeatherCityId } })
  }
}
