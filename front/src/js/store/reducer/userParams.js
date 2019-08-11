import { displayUnit } from '../../utils'
import { RECEIVE_USER_PARAMS, ADD_CITY } from '../const'

export function userParams (state={}, action) {
  switch (action.type) {
    case RECEIVE_USER_PARAMS:
      const { userParams } = action.payload
      const {createdAt, updatedAt, id, userId, ...params} = userParams.userParam
      return {
        email: userParams.email,
        displayUnit: displayUnit(params.unit),
        cities: userParams.cities,
        ...params
      }
    case ADD_CITY:
      const newState = JSON.parse(JSON.stringify(state))
      newState.cities.push(action.payload.city)
      return newState
    default:
      return state
  }
}