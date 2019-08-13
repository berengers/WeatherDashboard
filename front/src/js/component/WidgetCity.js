import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getDetailsCity } from '../store/action/city'

const WidgetCity = ({ dispatch, index, userParams, cities }) => {
  const city = cities[index]
  const { name, main } = city
  const weather = city.weather[0]
  const userCity = userParams.cities[index]

  const setCurrentCity = () => {
    dispatch(getDetailsCity(city.id, userParams))
  }

  return (
    <div className="widget-city-759bdd23" onClick={setCurrentCity}>
      <div className="city-name">{userCity.name ? userCity.name : name}</div>
      <div className="infos">
        <span className="temp">{main.temp.toFixed(1)}{userParams.displayUnit}</span>
        <i className={"wi wi-owm-" + weather.id}></i>
      </div>
    </div>
  )
}

WidgetCity.propTypes = {
  index: PropTypes.number.isRequired,
  userParams: PropTypes.object.isRequired,
  cities: PropTypes.array.isRequired
}

const mapStateToProps = ({ userParams, cities }) => ({ userParams, cities })

export default connect(mapStateToProps)(WidgetCity)