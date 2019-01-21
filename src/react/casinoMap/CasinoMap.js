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
           <CasinoCoord lat={36.051977} lng={-114.994780} text={"Joker's Wild Casino"} />
           <CasinoCoord lat={36.102634} lng={-115.171986} text={"MGM Grand"} />
           <CasinoCoord lat={36.116099} lng={-115.174316} text={"Caesar's Palace"} />
           <CasinoCoord lat={36.171064} lng={-115.142809} text={"Fremont Hotel & Casino"} />
           <CasinoCoord lat={36.116451} lng={-115.187549} text={"Rio All-Suites Hotel and Casino"} />
           <CasinoCoord lat={36.111915} lng={-115.171310} text={"Paris Las Vegas Casino"} />
           <CasinoCoord lat={36.099522} lng={-115.171490} text={"Tropicana Las Vegas"} />
           <CasinoCoord lat={36.101603} lng={-115.174486} text={"New York New York Casino"} />
           <CasinoCoord lat={36.126654} lng={-115.165964} text={"The Wynn"} />
           <CasinoCoord lat={36.147022} lng={-115.155816} text={"Stratosphere"} />
           <CasinoCoord lat={36.110040} lng={-115.172512} text={"Planet Hollywood"} />
           <CasinoCoord lat={36.121003} lng={-115.173552} text={"Mirage"} />
           <CasinoCoord lat={36.092285} lng={-115.174505} text={"Mandalay Bay"} />
           <CasinoCoord lat={36.095536} lng={-115.174758} text={"Luxor"} />
           <CasinoCoord lat={36.118519} lng={-115.171442} text={"Linq"} />
           <CasinoCoord lat={36.119863} lng={-115.171124} text={"Harrah's"} />
           <CasinoCoord lat={36.115570} lng={-115.171321} text={"Flamingo"} />
           <CasinoCoord lat={36.099526} lng={-115.174550} text={"Excalibur"} />

         </GoogleMapReact>
       </Container>
    )
  }
}


export default connect(null, {  })(CasinoMap);
