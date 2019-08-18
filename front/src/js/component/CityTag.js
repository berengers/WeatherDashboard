import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { deleteCity } from '../store/action/city'

export const CityTag = ({ dispatch, city }) => {

  const removeCity = () => {
    dispatch(deleteCity(city.id, city.openWeatherCityId))
  }

  return (
    <div className="city-tag-a118a2a4">
      <span>{city.name}</span>
      
      <div className="delete" onClick={removeCity}>
        X
      </div>
    </div>
  )
}

CityTag.propTypes = {
  city: PropTypes.object.isRequired
}

export default connect()(CityTag)