import React from 'react'
import { connect } from 'react-redux'

import { login } from '../store/action/login'

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.email = ""
    this.password = ""
  }

  handleChange = (e) => {
    this[e.target.name] = e.target.value
  }

  connect = () => {
    const { dispatch } = this.props
    const { email, password } = this
    if(email.trim() && password.trim())
      dispatch(login(email, password))
  }
  
  render () {

    return (
      <div className="login-566b2ee3"> 
        <div className="container">
          <h2>Login</h2>
          <input type="email" name="email" onChange={this.handleChange} />
          <input type="password" name="password" onChange={this.handleChange} />
          <div className="button" onClick={this.connect}>Submit</div>
        </div>
      </div>
    )
  }
}

export default connect()(Login)