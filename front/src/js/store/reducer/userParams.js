import { displayUnit } from '../../utils'
import { RECEIVE_USER, RECEIVE_USER_PARAMS } from '../const'

export function userParams (state={}, action) {
  switch (action.type) {
    case RECEIVE_USER_PARAMS:
      const { unit } = action.payload.userParams
      return {...action.payload.userParams, displayUnit: displayUnit(unit)}
    default:
      return state
  }
}