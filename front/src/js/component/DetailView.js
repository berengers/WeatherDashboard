import React from 'react'
import { connect } from 'react-redux'

import AdditionalInfo from '../component/AddtionalInfo'

const DetailView = ({ userParams, city, cities }) => {
  const cityFromGroup = cities.find(el => el.id === city.id)
  const { name, main } = cityFromGroup
  const weather = cityFromGroup.weather[0]

  return (
    <div className="detail-view-375b34ba">
      <div className="params">
        <div className="main-infos">
          <i className={"wi wi-owm-" + weather.id}></i>
          <span className="description">{weather.description}</span>
          <span className="city">{name}</span>
          <span className="temp">{main.temp.toFixed(1)}{userParams.displayUnit}</span>
        </div>
        <div className="additional-infos">
          {userParams.wind &&
            <AdditionalInfo type="wind" />
          }
          {userParams.humidity &&
            <AdditionalInfo type="humidity" />
          }
          {userParams.pressure &&
            <AdditionalInfo type="pressure" />
          }
        </div>
      </div>
      <div className="chronological">
        <div>Lundi</div>
        <div>Lundi</div>
        <div>Lundi</div>
        <div>Lundi</div>
        <div>Lundi</div>
        <div>Lundi</div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ userParams, detailsCity, cities }) => ({ userParams, city: detailsCity, cities })

export default connect(mapStateToProps)(DetailView)