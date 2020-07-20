
import React, {useEffect,useRef,useState } from "react";
import '../../App.css'
import L from 'leaflet';


function DashboardLocation(){



const COORDI = [28.4, 83.99];

const sampleMarkerText = [

  `<h3>Hospital 1</h3><br>
     <p>This is hospital 1.</p><br>`
  ,

  `<h1>Hospital 1</h1><br>
 
     <p>This is hospital 1.</p><br>
     
     <button>Hey</button>`

];

var popupLayout = sampleMarkerText[0];


function roundNumber(number, tensplace = 10) {
  return Math.round(number * tensplace) / tensplace;
}

    //lets create a map

const markerRef = useRef(null);
const markerGroupRef = useRef(null)
const mapRef = useRef(null);
//const popupLayoutRef = useRef(null);

var markers = [];

var mapOptions = {
  center: COORDI,
  zoom: 13,
  dragging: true,
}

var markerOptions = {
  removable: true,
  editable: true,
  maxWidth: 750,
  autoPan: false
};



useEffect(()=>{

//Create a map and assign it to the map div

mapRef.current = L.map('leafletMapid', mapOptions);
console.log(mapRef.current)

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Tiles &copy; Esri &mdash; Sources: OpenStreetMaps',
  maxZoom: 18,
}).addTo(mapRef.current);

L.marker(COORDI).addTo(mapRef.current)
  .bindPopup(popupLayout, markerOptions)
  .openPopup()

},[]);

markerGroupRef.current = new L.LayerGroup();
console.log(mapRef.current)


function addMarker(e) {
  // Add marker to map at click location; add popup window
 markerRef.current = new L.marker(e.latlng)
    .addTo(mapRef.current)
    .bindPopup(popupLayout, markerOptions)
    .openPopup();
  markers.push(markerRef.current);

  // i need a sample marker text generator here..

  // sampleMarkerTex(newMarker)

}

function getFeaturesInView() {
  var features = [];
  mapRef.current.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {

      if (mapRef.current.getBounds().contains(layer.getLatLng())) {

        features.push({
          coordinates: layer._latlng,
          popupContent: layer._popup._content
        });


      }
    }
  });
  return features;
}

const submitHandler=(e)=>{
  e.preventDefault();
 markerGroupRef.current.clearLayers();  
  var feat = getFeaturesInView();

  console.log(feat);

}

/*   useEffect(()=>{
    
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
 */

/* 
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

  },[markerPosition]) */



  
  return(
    <>
      <div id="leafletMapid" className="mapdiv">

      </div>
      <div className="controlButtons">
         <button type="button" name="button" id="submitMap" onClick={submitHandler}>Submit</button>
      </div>
      </>
  )

}

function DashboardLocation2(){


  return(
    <div>
      <DashboardLocation/>
      {/* {lat}
      <br/>
      {lng}
      <br/>
      <button onClick={moveMarker}>Move Marker</button> */}
    </div>
  )
}


export default DashboardLocation2;
