import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
   constructor() {
   super();

   }
   render(){

     return (
         <Map google={this.props.google} center={{
             lat: 40.854885,
             lng: -88.081807
         }} zoom={14}>
         </Map>
     )
   }
 }

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC1R3kYP5LGS5XAbRSe_Cec2YzukfxCBIg')
})(MapContainer)