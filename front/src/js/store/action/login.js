import { push, replace } from 'connected-react-router'

import { LOGIN_ERROR, LOGOUT } from '../const'
import db from '../../api/db'

export function login (email, password) {
  return dispatch => {
    db.login(email, password)
      .then(() => {
        dispatch(push('/'))
      })
      .catch(() => {
        dispatch({ type: LOGIN_ERROR })
      })
  }
}

export function logout () {
  return dispatch => {
    db.logout()
    dispatch({ type: LOGOUT })
    dispatch(replace('/login'))
  }
}