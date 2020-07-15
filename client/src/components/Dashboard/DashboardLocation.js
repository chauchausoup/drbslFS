
import React, { Component } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";

export default class DashboardLocation extends Component {
  constructor(props) {
    super(props)
  
    this.comRef=React.createRef();
    
    this.state = {
      center: {
        lat: 28.2,
        lng: 83.99,
      },
      zoom: 15,
      draggable: true,
      markerData: [],
    }
  }
  
 

  //add marker

  addMarker = (event) => {
    const coords = event.latlng;
    this.setState({
      markerData: [...this.state.markerData, coords],
    });
    console.log(this.state.markerData);
  };

  //remove marker

  removeMarkerHandler = (event) => {
    
    const coords = event.latlng;
    

    this.state.markerData.splice(this.state.markerData.indexOf(coords),1)
    this.setState({
              markerData:[...this.state.markerData]
        })  
  };

  //remove actual marker

  removeMarker=()=>{
   
     
  }

  //update marker

  updateMarker = (event) => {
    console.log(this.state.markerData);
    const latLng = event.target.getLatLng(); //get marker LatLng
    const markerIndex = event.target.options.marker_index; //get marker index
    //update
    this.setState((prevState) => {
      const markerData = [...prevState.markerData];
      markerData[markerIndex] = latLng;
      return { markerData: markerData };
    });
  };

  render() {
    return (
      <Map
        center={this.state.center}
        zoom={this.state.zoom}
        onClick={this.addMarker}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.state.markerData.map((element, index) => (
          <Marker
            key={index}
            marker_index={index}
            position={element}
            draggable={this.state.draggable}
            onDragend={this.updateMarker}
           onclick={this.removeMarkerHandler}
         />
        ))}
      </Map>
    );
  }
}
