import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { push } from 'connected-react-router'

import SearchCity from '../component/SearchCity'
import CityTag from '../component/CityTag'
import InputToggle from '../component/InputToggle'
import { updateParam } from '../store/action/userParams'

class Settings extends React.Component {

  constructor(props) {
    super(props)
    const { lang, unit, humidity, pressure, wind } = props.params
    this.state = {
      lang,
      unit,
      humidity,
      pressure,
      wind
    }
  }

  citiesList = () => {
    const { params, cities } = this.props

    return params.cities.map(city => {
      const resCity = { id: city.id, openWeatherCityId: city.openWeatherCityId }
      
      if (city.name)
        resCity.name = city.name
      else {
        resCity.name = cities.find((el) => el.id === city.openWeatherCityId).name
      }

      return resCity
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.email !== prevProps.params.email) {
      const { lang, unit, humidity, pressure, wind } = this.props.params
      this.setState({ lang, unit, humidity, pressure, wind })
    }
  }

  updateParam = (param, value) => {
    this.props.dispatch(updateParam(param, value))
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    this.updateParam(e.target.name, e.target.value)
  }

  toggleParam = (param) => {
    this.setState({ [param]: !this.state[param] })
    this.updateParam(param, !this.state[param])
  }


  render () {
    const { dispatch, params, cities } = this.props
    const { lang, unit, humidity, pressure, wind } = this.state

    if (!params.cities || cities.length === 0)
      return <div className="loading-e556d671">Loading...</div>

    return (
      <div className="settings-e556d671">
        <div className="back button" onClick={() => dispatch(push('/'))}>
          {"<-- Back"}
        </div>

        <div className="main-container">
          <h1>Settings</h1>

          <h3>User Params</h3>
          <div className="cities-container">
            <div className="search-city">
              <SearchCity />
            </div>
            {
              this.citiesList().map(city => (
                <div key={city.id} className="city-tag">
                  <CityTag city={city}/>
                </div>
              ))
            }
          </div>

          <div className="params">
            <select name="lang" value={lang} onChange={this.handleChange}>
              <option value="fr">Français</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
            <select name="unit" value={unit} onChange={this.handleChange}>
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
              <option value="">Kelvin</option>
            </select>
          </div>

          <h3>Detail View</h3>
          <div className="details">
            <div>
              <span>Wind</span>
              <InputToggle value={wind} cb={this.toggleParam} params={["wind"]} />
            </div>
            <div>
              <span>Pressure</span>
              <InputToggle value={pressure} cb={this.toggleParam} params={["pressure"]} />
            </div>
            <div>
              <span>Humidity</span>
              <InputToggle value={humidity} cb={this.toggleParam} params={["humidity"]} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Settings.propTypes = {
  params: PropTypes.object.isRequired,
  cities: PropTypes.array.isRequired
}

const mapStateToProps = ({ userParams, cities }) => ({ params: userParams, cities })

export default connect(mapStateToProps)(Settings)