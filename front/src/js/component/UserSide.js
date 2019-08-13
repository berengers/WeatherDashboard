import React, { useEffect } from 'react'
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import PrivateRoute from './PrivateRoute'
import Dashboard from '../view/Dashboard'
import Settings from '../view/Settings'
import { getUserParams } from '../store/action/userParams'

const UserSide = ({ dispatch, history }) => {
  
  useEffect(() => {
    dispatch(getUserParams())
  }, [history.location.pathname])

  return (
    <Switch>
      <PrivateRoute path="/settings" component={Settings} />
      <PrivateRoute path="/" component={Dashboard} />
    </Switch>
  )
}


export default connect()(UserSide)