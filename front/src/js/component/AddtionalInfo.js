import React from 'react'
import { connect } from 'react-redux'

import { convertSpeed } from '../utils'

const AddtionalInfo = ({ type, userParams, city }) => {
  let iconClass
  let name
  let value

  const setDatas = (type) => {
    switch (type) {
      case 'wind':
        iconClass = `wi-wind towards-${city.wind.deg}-deg`
        name = userParams.lang === 'fr' ? 'Vitesse du Vent' : 'Wind Speed'
        value = convertSpeed(city.wind.speed, userParams.unit)
        break

      case 'humidity':
        iconClass = `wi-owm-321`
        name = userParams.lang === 'fr' ? 'Humidité' : 'Humidity'
        value = `${city.main.humidity}%`
        break
      
      case 'pressure':
          iconClass = `wi-owm-904`
          name = userParams.lang === 'fr' ? 'Préssion atmosphérique' : 'Air Pressure'
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

const mapStateToProps = ({ userParams, currentCity }) => ({ userParams, city: currentCity })

export default connect(mapStateToProps)(AddtionalInfo)