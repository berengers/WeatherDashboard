import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import Login from '../view/Login'
import Dashboard from '../view/Dashboard'

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" component={Dashboard} />
    </Switch>
  )
}

export default App