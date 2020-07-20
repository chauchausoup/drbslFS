
import React, {useEffect,useRef,useState } from "react";
import '../../App.css'
import L from 'leaflet';


function DashboardLocation({markerPosition}){

    //lets create a map

const mapRef = useRef(null);

  useEffect(()=>{

   mapRef.current = L.map('mapid',{
      center:[28.2,83.99],
      zoom:16,
      layers:[
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',{
          attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    })

  },[]);

  //lets add a marker
  const markerRef = useRef(null);


  useEffect(()=>{
    if(markerRef.current){
      markerRef.current.setLatLng(markerPosition)
    }else{
      markerRef.current=L.marker(markerPosition)
                          .addTo(mapRef.current)
                          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.' , {removable: true, editable: true})
                          .openPopup()
    }

  },[markerPosition])


  
  return(
    <div id="mapid">
      
    </div>
  )

}

function DashboardLocation2(){
  const[markerPosition,setMarkerPosition]= useState({
    lat:28.2,
    lng:83.99
  });
  const {lat,lng}= markerPosition;

  function moveMarker() {
    setMarkerPosition({
      lat: lat + 0.0001,
      lng: lng + 0.0001
    });
  }

  return(
    <div>
      <DashboardLocation markerPosition={markerPosition}/>
      {lat}
      <br/>
      {lng}
      <br/>
      <button onClick={moveMarker}>Move Marker</button>
    </div>
  )
}


export default DashboardLocation2;
