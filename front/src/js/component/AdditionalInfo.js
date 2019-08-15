import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { convertSpeed } from '../utils'

const AdditionalInfo = ({ type, userParams, city }) => {
  let iconClass
  let name
  let value

  const setDatas = (type) => {
    switch (type) {
      case 'wind':
        iconClass = `wi-wind towards-${city.wind.deg}-deg`
        name = userParams.lang === 'fr' ? 'Vitesse du vent' : 'Wind speed'
        value = convertSpeed(city.wind.speed, userParams.unit)
        break

      case 'humidity':
        iconClass = `wi-owm-321`
        name = userParams.lang === 'fr' ? 'Humidité' : 'Humidity'
        value = `${city.main.humidity}%`
        break
      
      case 'pressure':
          iconClass = `wi-owm-904`
          name = userParams.lang === 'fr' ? 'Pression atmosphérique' : 'Air Pressure'
          value = `${city.main.pressure} hPa`
          break

      default:
        throw `Type: ${type} don't exist`
    }
  }

  setDatas(type)

  return (
    <div className="additional-info-1f398608">
      <i className={"wi " + iconClass}></i>
      <div className="info">
        <span className="name">{name}</span>
        <span className="value">{value}</span>
      </div>
    </div>
  )
}

AdditionalInfo.propTypes = {
  type: PropTypes.string.isRequired,
  userParams: PropTypes.object.isRequired,
  city: PropTypes.object.isRequired
}

const mapStateToProps = ({ userParams, detailsCity }) => ({ userParams, city: detailsCity })

export default connect(mapStateToProps)(AdditionalInfo)