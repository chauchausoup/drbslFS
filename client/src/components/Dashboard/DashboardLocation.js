
import React, { Component } from "react";
//import { Map, TileLayer, Marker } from "react-leaflet";
import '../../App.css'




//if user is logged in normal setting of position as well as submit button for axios call

//is user is not logged in then no submit button as well as no setting of marker

/* 
class DashboardLocation extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      center: {
        lat: 28.2,
        lng: 83.99,
      },
      zoom: 15,
      draggable: true,
      markerData: [],
      flag:false
    }
  }
  
 componentDidMount(){
  if(sessionStorage.getItem('useData')){
    this.setState({
      flag:false
    })
  }else{
    this.setState({
      flag:true
    })
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
      <React.Fragment>
      <Map
        center={this.state.center}
        zoom={this.state.zoom}
        onClick={this.addMarker}
        id="mapid"
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
      {(sessionStorage.getItem('userData'))? <input type="button" value="Submit"/> : null}
      
      </React.Fragment>
    );
  }
} */

var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

function DashboardLocation2(){
  
  return(
    <div id="mapid">
      <h3>Welcome to the map</h3>
    </div>
  )

}
export default DashboardLocation2;
