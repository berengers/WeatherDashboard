import { push, replace } from 'connected-react-router'

import db from '../../api/db'

export function login (email, password) {
  return dispatch => {
    db.login(email, password)
      .then(() => {
        dispatch(push('/'))
      })
  }
}

export function logout () {
  return dispatch => {
    db.logout()
    dispatch(replace('/login'))
  }
}