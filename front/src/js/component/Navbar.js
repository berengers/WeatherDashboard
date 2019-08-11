import React from 'react'
import { connect } from 'react-redux'

import WidgetCity from './WidgetCity'

const Navbar = ({ cities }) => {

  return (
    <div className="navbar-77c7146e">
      <div>
        <h3>INPUT CHOICE City</h3>
        <input />
      </div>

      <div className="city-list">
      {
        cities.map((city, index) => (
          <WidgetCity key={city.id} index={index} />
        ))
      }
      </div>
    </div>
  )
}

const mapStateToProps = ({ cities }) => ({ cities })

export default connect(mapStateToProps)(Navbar)