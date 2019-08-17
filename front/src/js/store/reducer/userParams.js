import { displayUnit } from '../../utils'
import { RECEIVE_USER_PARAMS, UPDATE_PARAM, ADD_CITY, DELETE_CITY, LOGIN_ERROR } from '../const'

const defaultParams = {
  errorLogin: false,
  lang: '',
  unit: '',
  humidity: false,
  pressure: false,
  wind: false
}

export function userParams (state=defaultParams, action) {
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, errorLogin: true }
    case RECEIVE_USER_PARAMS:
      const { userParams } = action.payload
      const {createdAt, updatedAt, id, userId, ...params} = userParams.userParam
      return {
        errorLogin: false,
        email: userParams.email,
        displayUnit: displayUnit(params.unit),
        cities: userParams.cities,
        ...params
      }
    case UPDATE_PARAM:{
      return {
        ...state,
        [action.payload.param]: action.payload.value
      }
    }
    case ADD_CITY:
      return {
        ...state,
        cities: [...state.cities, action.payload.city]
      }
    case DELETE_CITY:
      return {
        ...state,
        cities: state.cities.filter(city => city.id !== action.payload.cityId )
      }
    default:
      return state
  }
}