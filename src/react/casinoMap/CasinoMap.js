import React, { Component } from 'react';
import { connect } from 'react-redux'
import {  } from '../../redux/actions/users.js'
import GoogleMapReact from 'google-map-react';
import CasinoCoord from './CasinoCoord'
import UserCoord from './UserCoord'
import { Container } from 'semantic-ui-react'


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
      <Container fluid style={{
        height: '100vh',
        width: '100%'
      }}
      >
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
           <CasinoCoord lat={39.378436} lng={-74.435501} text={'Borgata Hotel, Casino & Spa'} />
           <CasinoCoord lat={39.379252} lng={-74.427942} text={'Golden Nugget Atlantic City Hotel'} />
           <CasinoCoord lat={39.360187} lng={-74.420690} text={'Hard Rock Hotel Casino Atlantic City'} />
           <CasinoCoord lat={39.355597} lng={-74.434270} text={'Wild Wild West Casino'} />
           <CasinoCoord lat={39.356751} lng={-74.433217} text={"Bally's Casino"} />
           <CasinoCoord lat={39.352353} lng={-74.445567} text={'Tropicana Atlantic City'} />
           <CasinoCoord lat={41.474518} lng={-71.959870} text={'Foxwoods Resort Casino'} />
           <CasinoCoord lat={41.491167} lng={-72.092382} text={'Mohegan Sun'} />
           <CasinoCoord lat={36.107338} lng={-115.176293} text={'Aria Resort & Casino'} />
           <CasinoCoord lat={39.488992} lng={-115.176293} text={'Atlantis Casino Resort Spa'} />
           <CasinoCoord lat={36.114060} lng={-115.170640} text={"Bally's Las Vegas Hotel & Casino"} />
           <CasinoCoord lat={30.392523} lng={-88.891415} text={'Beau Rivage Resort & Casino'} />
           <CasinoCoord lat={36.112418} lng={-115.175259} text={'Bellagio'} />
           <CasinoCoord lat={36.121457} lng={-115.170321} text={'The Venetian'} />
           <CasinoCoord lat={36.124661} lng={-115.171544} text={'Treasure Island'} />
         </GoogleMapReact>
       </Container>
    )
  }
}


export default connect(null, {  })(CasinoMap);
