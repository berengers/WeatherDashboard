import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import db from '../api/db'

const PrivateRoute = ({component: Component, ...rest}) => {
  
  const display = (props) => {
    return db.isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
  }

  return <Route {...rest} render={display} />
}

export default PrivateRoute