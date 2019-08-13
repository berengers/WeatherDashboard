import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getOpenWeatherCities } from '../store/action/searchCity'
import { addCity } from '../store/action/city'
import { REINIT_SEARCHED_CITIES } from '../store/const'

const SearchCity = ({ dispatch, searchedCities, userParams }) => {

  const [text, setText] = useState('')

  const textChanged = (e) => {
    const newText = e.target.value
    setText(newText)

    if (newText.length >= 2)
      dispatch(getOpenWeatherCities(newText, 5))
    else if (newText.length === 0) {
      dispatch({ type: REINIT_SEARCHED_CITIES })
    }
  }
  
  const citySelected = (id, name) => {
    dispatch(addCity(id, name, userParams))
    dispatch({ type: REINIT_SEARCHED_CITIES })
    setText('')
  }

  return (
    <div className="search-city-6b7835f3">
      <div className="label">Add City</div>
      <input placeholder="city name" value={text} onChange={textChanged}/>

      <div className="auto-complete">
        {
          searchedCities.map(city => (
            <div key={city.id} onClick={() => citySelected(city.id, city.name)}>{city.name}</div>
          ))
        }
      </div>
    </div>
  )
}

SearchCity.propTypes = {
  searchedCities: PropTypes.array.isRequired,
  userParams: PropTypes.object.isRequired
}

const mapStateToProps = ({ searchedCities, userParams }) => ({ searchedCities, userParams })

export default connect(mapStateToProps)(SearchCity)