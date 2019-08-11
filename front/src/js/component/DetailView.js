import React from 'react'
import { connect } from 'react-redux'

import { temperature } from '../utils'
import AdditionalInfo from '../component/AddtionalInfo'
import { userParams } from '../store/reducer/userParams';

const DetailView = ({ userParams, city }) => {
  const { name, main, wind } = city
  const weather = city.weather[0]

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

const mapStateToProps = ({ userParams, currentCity }) => ({ userParams, city: currentCity })

export default connect(mapStateToProps)(DetailView)