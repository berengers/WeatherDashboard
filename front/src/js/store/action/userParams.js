import db from '../../api/db'
import { RECEIVE_USER_PARAMS } from '../const'
import { getCity, getCities } from './city'

const citiesId = [524901,703448,2643743]

export function getUserParams() {
  return dispatch => {
    if (db.isAuthenticated()) {
      db.getUserParams()
        .then(({data: userParams}) => {
          console.log("RECEIVE USER PARAMS")
          dispatch({ type: RECEIVE_USER_PARAMS, payload: { userParams } })
          dispatch(getCity(citiesId[0], userParams))
          dispatch(getCities(citiesId, userParams))
        })
    }
  }
}