import { RECEIVE_CITY, RECEIVE_CITIES } from '../const'

const defaultCity = {
  loaded: false,
  id: null
}

export function currentCity (state=defaultCity, action) {
  switch (action.type) {
    case RECEIVE_CITY:
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
    default:
      return state
  }
}