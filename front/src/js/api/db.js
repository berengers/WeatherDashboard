import axios from 'axios'

class DB {
  constructor() {
    this.url = 'http://localhost:3000/api'
    this.contentType = { 'Content-Type' : 'application/json' }
  }

  _getToken() {
    return localStorage.getItem('token')
  }

  _setToken(token){
    return localStorage.setItem('token', token)
  }

  _removeToken(){
    localStorage.removeItem('token')
  }

  _headers() {
    return {
      ...this.contentType,
      'x-authenticate': this._getToken()
    }
  }

  _status(error) {
    const { status } = error.response
    console.log('status ---->', status)
    
    if (status === 401 || status === 403) {
      this._removeToken()
      // TODO redirect to login
      console.log('authorization error ---->', error)
    } else {
      console.log('error ---->', error)
    }
  }

  
  // ----- LOGIN / LOGOUT -----------

  isAuthenticated() {
    if (this._getToken()) {
      return true
    } else {
      // router.replace('/login')
      return false
    }
  }
  login(email, password) {
    return axios.post(
      this.url + '/login',
      {
        email: email,
        password: password
      }
    )
    .then(({ data }) => {
      this._setToken(data.token)
      return data.token
    })
  }
  logout() {
    return axios.delete(
      this.url + '/logout',
      {
        headers: this._headers()
      }
    )
  }


  // ------------ USER PARAMS -----------------

  getUserParams() {
    return axios.get(
      this.url + '/user',
      {
        headers: this._headers()
      }
    )
    .catch(this._status)
  }


  // ------------ CITY -----------------

  addCity(id) {
    return axios.post(
      this.url + '/city',
      {
        openWeatherCityId: id
      },
      {
        headers: this._headers(),
      }
    )
    .catch(this._status)
  }


  // ------------ OPEN WEATHER CITY -----------------

  getOpenWeatherCities(text, limit) {
    return axios.get(
      this.url + `/owcities?searchText=${text}&limit=${limit}`,
      {
        headers: this._headers()
      }
    )
    .catch(this._status)
  }

}

const db = new DB()
export default db