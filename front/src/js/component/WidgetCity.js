import React from 'react'
import { connect } from 'react-redux'

import { temperature } from '../utils'

const WidgetCity = ({ index, userParams, cities }) => {
  const city = cities[index]
  const { name, main } = city
  const weather = city.weather[0]

  return (
    <div className="widget-city-759bdd23">
      <div className="city-name">{name}</div>
      <div className="infos">
        <span className="temp">{main.temp.toFixed(1)}{userParams.displayUnit}</span>
        <i className={"wi wi-owm-" + weather.id}></i>
      </div>
    </div>
  )
}

const mapStateToProps = ({ userParams, cities }) => ({ userParams, cities })

export default connect(mapStateToProps)(WidgetCity)