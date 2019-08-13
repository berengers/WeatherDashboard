import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import db from '../api/db'

const PrivateRoute = ({component: Component, ...rest}) => {
  
  const display = (props) => {
    return db.isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
  }

  return <Route {...rest} render={display} />
}

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired
}

export default PrivateRoute