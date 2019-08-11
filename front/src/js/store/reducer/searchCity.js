import { RECEIVE_SEARCH_CITIES, REINIT_SEARCHED_CITIES } from '../const'

export function searchedCities (state=[], action) {
  switch (action.type) {
    case RECEIVE_SEARCH_CITIES:
      return action.payload.cities
    case REINIT_SEARCHED_CITIES:
      return []
    default:
      return state
  }
}