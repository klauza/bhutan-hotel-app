import React, { Component } from 'react';
import styled from 'styled-components';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.width};
`;

export default class MapContact extends Component {

  componentDidMount(){
    this.map = L.map('map', {
      center: [58, 16],
      zoom: 6,
      zoomControl: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17
    }).addTo(this.map);
  }

 
  render() {

    return (

      <Wrapper width="100%" height="100%" id="map" />
      
    )
  }
}
