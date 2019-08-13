import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import Login from '../view/Login'
import UserSide from './UserSide'

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute component={UserSide} />
    </Switch>
  )
}

export default App