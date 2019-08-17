import React from 'react'
import { connect } from 'react-redux'

import { login } from '../store/action/login'

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.email = ""
    this.password = ""
    this.state = {
      errors: {
        isActivated: false,
        email: "",
        password: ""
      }
    }
  }

  handleChange = (e) => {
    const { errors } = this.state
    this[e.target.name] = e.target.value

    if (errors.isActivated)
      this.checkInput()
  }

  keyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      this.connect()
    }
  }

  checkInput = () => {
    const email = this.email.trim()
    const password = this.password.trim()
    const { errors } = this.state

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailStatus = !regex.test(email) ? 'this email is not valid' : ''
    const passwordStatus = password.length < 7 ? 'this password is to short' : ''

    if (errors.email !== emailStatus) {
      this.setState((state) => {
        return { errors: { ...state.errors, email: emailStatus } }
      })
    }

    if (errors.password !== passwordStatus) {
      this.setState((state) => {
        return { errors: { ...state.errors, password: passwordStatus } }
      })
    }

    return password.length >= 7 && regex.test(email)
  }

  connect = () => {
    const { dispatch } = this.props
    const { email, password } = this
    this.state.errors.isActivated = true

    if(this.checkInput())
      dispatch(login(email, password))
  }
  
  render () {
    const { errorLogin } = this.props.userParams
    const { email, password } = this.state.errors

    return (
      <div className="login-566b2ee3"> 
        <div className="container"  onKeyDown={this.keyDown}>
          <h2>Login</h2>
          {errorLogin &&
            <div className="error-message">Your details are incorrect. Please try again.</div>
          }
          <div className="input-container">
            <input type="email" name="email" onChange={this.handleChange} />
            {email &&
              <div className="error-message">{email}</div>
            }
          </div>
          <div className="input-container">
            <input type="password" name="password" onChange={this.handleChange} />
            {password &&
              <div className="error-message">{password}</div>
            }
          </div>
          <div className="button" onClick={this.connect}>Submit</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ userParams }) => ({ userParams })

export default connect(mapStateToProps)(Login)