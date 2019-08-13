import { RECEIVE_DETAILS_CITY, RECEIVE_CITIES, ADD_CITY_GROUP, DELETE_CITY } from '../const'

const defaultCity = {
  loaded: false,
  id: null
}

export function detailsCity (state=defaultCity, action) {
  switch (action.type) {
    case RECEIVE_DETAILS_CITY:
      return {
        loaded: true,
        ...action.payload.city
      }
    default:
      return state
  }
}

export function cities (state=[], action) {
  switch (action.type) {
    case RECEIVE_CITIES:
      return action.payload.cities
    case ADD_CITY_GROUP:
      return [...state, action.payload.city.list[0]]
    case DELETE_CITY:
      return state.filter(city => city.id !== action.payload.openWeatherCityId)
    default:
      return state
  }
}