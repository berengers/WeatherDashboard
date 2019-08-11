import axios from 'axios'

class weather {
  constructor() {
    this.url = 'https://api.openweathermap.org/data/2.5/'
    this.apiKey = process.env.WEATHER_APIKEY
    this.contentType = { 'Content-Type' : 'application/json' }
  }

  _headers() {
    return {
      ...this.contentType,
    }
  }

  _status(error) {
    const { status } = error.response
    
    if (status === 401 || status === 403) {
      console.log('authorization error ---->', error)
    } else {
      console.log('error ---->', error)
    }
  }
  
  _getURL(type='weather', lang='fr', unit='metric') {
    return `${this.url}${type}?APPID=${this.apiKey}&lang=${lang}&units=${unit}`
  }


   // ------------ DETAIL CITY -----------------

   getDetailsCity(cityId, params) {
    const { lang, unit } = params
    return axios.get(
      this._getURL('weather', lang, unit) + `&id=${cityId}`,
      {
        headers: this._headers()
      }
    )
    .catch(this._status)
  }


  // ------------ CITY -----------------

  getCity(cityId, params) {
    const { lang, unit } = params
    return axios.get(
      this._getURL('group', lang, unit) + `&id=${cityId}`,
      {
        headers: this._headers()
      }
    )
    .catch(this._status)
  }

  getCities(citiesId, params) {
    const strCitiesId = citiesId.join(',')
    const { lang, unit } = params

    return axios.get(
      this._getURL('group', lang, unit) + `&id=${strCitiesId}`,
      {
        headers: this._headers()
      }
    )
    .catch(this._status)
  }
}

const apiWeather = new weather()
export default apiWeather