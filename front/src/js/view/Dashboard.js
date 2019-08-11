import React from 'react'
import { connect } from 'react-redux'

import Navbar from '../component/Navbar'
import DetailView from '../component/DetailView'
import { getUserParams } from '../store/action/userParams'

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    
    dispatch(getUserParams())
  }

  render () {
    const { currentCity } = this.props
    
    return (
      <div className="dashboard-10a9f3ca">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="details">
          {currentCity.loaded &&
            <DetailView />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentCity }) => ({ currentCity })

export default connect(mapStateToProps)(Dashboard)