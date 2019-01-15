import React, { Component } from 'react';
import { connect } from 'react-redux'
import {  } from '../../redux/actions/users.js'
import GoogleMapReact from 'google-map-react';
import CasinoCoord from './CasinoCoord'
import UserCoord from './UserCoord'


class CasinoMap extends Component {
  constructor() {
    super()
    this.state = {
      lat: '',
      lng: ''
    }
  }

  static defaultProps = {
    center: {
      lat: 38.89511,
      lng: -77.03637
    },
    zoom: 9
  };

  componentDidMount() {
    this.getMyLocation()
  }

  getMyLocation = () => {
    const location = window.navigator && window.navigator.geolocation

    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      }, (error) => {
        this.setState({ lat: 'err-latitude', lng: 'err-longitude' })
      })
    }
  }

  render() {

    return(
      <div style={{ height: '100vh', width: '100%' }}>
         <GoogleMapReact
           bootstrapURLKeys={{ key: 'AIzaSyB6_LVUdciO-J2Dc40hcm-ow3DPgEUyOFE' }}
           defaultCenter={this.props.center}
           defaultZoom={this.props.zoom}
         >
           <UserCoord lat={this.state.lat} lng={this.state.lng} text={'You Are Here'} />
           <CasinoCoord lat={38.796059} lng={-77.007457} text={'MGM National Harbor'} />
           <CasinoCoord lat={39.157256} lng={-76.727377} text={'Live! Casino& Hotel'} />
           <CasinoCoord lat={39.273510} lng={-76.627567} text={'Horseshoe Casino Baltimore'} />
           <CasinoCoord lat={39.297307} lng={-77.851196} text={'Hollywood Casino at Charles Town Races'} />
         </GoogleMapReact>
       </div>
    )
  }
}


export default connect(null, {  })(CasinoMap);
