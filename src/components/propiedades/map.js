import React, { Component } from 'react'
import { 
  GoogleMap, 
  LoadScript, 
  MarkerClusterer,
  Marker } from '@react-google-maps/api'

const mapContainerStyle = {
  height: "70vh",
};

const center = { lat: 37.779023, lng: -122.48862200000002 };
const locations = [
  {lat: 37.779023, lng: -122.48862200000002},
  {lat: 37.75347110977809, lng: -122.46686778459474},
  {lat: 37.7487769,lng: -122.424534},
  {lat: 37.748134,lng: -122.437206},
  {lat: 37.7883186, lng: -122.4897848},
  {lat: 37.7985699, lng: -122.4446982} 
];

const options = { 
  imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m" 
};

class Map extends Component {
  render() {
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyBTt1wamscdW7rhIw9IqgmI9-m65hVbwBk"
        >
          <GoogleMap
            id="marker-example"
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={center}
        >
        <MarkerClusterer
        options={options}
        >
        {
            (clusterer) => locations.map((location, i) => (
            <Marker
                key={i}
                position={location}
                clusterer={clusterer}
                  />
                  ))
              }
          </MarkerClusterer>
        </GoogleMap>
            </LoadScript>
    );
  }
}

export default Map;