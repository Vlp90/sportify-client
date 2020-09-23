import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
// import apiHandler from "../api/apiHandler";
require("dotenv").config();
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiY2FwemViaWIiLCJhIjoiY2s5emRveWVxMHlkdDNndGVpcjM5ZDNuNSJ9.RHGZkM4ZydezmApMPNj3yA",
});



export default class MyMap extends Component {
  state = {
    items: [],
    coordinates:[2.61570809, 47],
    zoom: 5.2,
    style: "mapbox://styles/mapbox/light-v9",
    userLocation: [],
    eventCoordinates:[],
  };


 componentDidUpdate(){
  if (this.props.place.coordinates !== this.state.coordinates){
    this.setState({
        coordinates:this.props.place.coordinates,
        zoom:11
    })
  }
  }


  render() {
  
  
    const { center, zoom, style } = this.state;
    return (
      <>
      
        <Map
          center={this.state.coordinates}
          zoom={[this.state.zoom]}
          style={style}
          containerStyle={{
            height: "100%",
            width: "100%",
            borderRadius: "4px 20px 4px 20px"
          }}
          movingMethod="flyTo"
        >

        {!this.props.place ? (
            <div>
         </div>
        ) : (
         <Marker
            coordinates={this.props.place.coordinates}
            anchor="bottom"
          >
            <img className="location-icon" src="/media/marker.svg" />
          </Marker>
        )}
       
        </Map>
      </>
    );
  }
}
