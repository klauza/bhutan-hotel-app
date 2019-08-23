import React, { Component } from 'react';
import styled from 'styled-components';
import { Map, CircleMarker, TileLayer, Marker, Popup } from "react-leaflet";
import data from './MapMarkersData';
import {iconPerson} from './Icon';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;


export default class MapContact extends Component {


  render() {

    return (
      <Wrapper width="100%" height="100%">
        <Map
          style={{ height: "100%", width: "100%" }}
          zoom={9}
          center={[27.50, 89.63]}>
          <TileLayer url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png" />
          <CircleMarker
            center={[27.50, 89.63]}
            radius={20}>
            <Popup><strong style={{fontSize: "1.6em"}}>Hotel location</strong></Popup>
            </CircleMarker>

          {data.marker.map((marker, i) => {
          
            return (
              
              <Marker key={i} position={[marker.coordinates[0], marker.coordinates[1]]} icon={iconPerson}>
              <Popup>{marker.name}</Popup>
            </Marker>
              )
          })}

        </Map>
      </Wrapper>
    )
  }
}
