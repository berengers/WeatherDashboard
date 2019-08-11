import React from 'react'
import { connect } from 'react-redux'

import Navbar from '../component/Navbar'
import DetailView from '../component/DetailView'
import { getUserParams } from '../store/action/userParams'

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = { visibilityMenu: false }
  }

  componentDidMount() {
    this.props.dispatch(getUserParams())
  }

  displayMenu = () => {
    this.setState({ visibilityMenu: !this.state.visibilityMenu })
  }

  render () {
    const { detailsCity, cities } = this.props
    const { visibilityMenu } = this.state
    
    return (
      <div className="dashboard-10a9f3ca">
        <div className={"navbar " + (visibilityMenu ? 'display' : '')}>
          <Navbar displayMenu={this.displayMenu}/>
        </div>
        <div className="details">
          {detailsCity.loaded && cities.length > 0 ?
            <DetailView />
            :
            <div className="loading">Loading...</div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ detailsCity, cities }) => ({ detailsCity, cities })

export default connect(mapStateToProps)(Dashboard)