import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
// import apiHandler from "../api/apiHandler";
require("dotenv").config();
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoidmxhZGltaXJscCIsImEiOiJja2ZwaTYxNm8wNWxmMzNycDh0dGlncGxsIn0.rBIYqRbNCmOpoFLXk4aP-A",
});

export default class MyMap extends Component {
  state = {
    items: [],
    lng: 2.333333,
    lat: 48.866667,
    zoom: 11,
    style: "mapbox://styles/mapbox/light-v9",
    userLocation: [],
  };

  render() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lng: position.coords.longitude,
        lat: position.coords.latitude,
      });
    });

    const { center, zoom, style } = this.state;
    return (
        <Map
          center={[this.state.lng, this.state.lat]}
          zoom={[zoom]}
          style={style}
          containerStyle={{
            height: "100vh",
            width: "100vw",
          }}
        >
        </Map>
    );
  }
}
