import React,{useState,useRef,useEffect} from 'react';
import L from 'leaflet';


function Map({ markersData }) {
  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("mapid", {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, []);

  // add layer
  const layerRef = useRef(null);
  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
  }, []);

  // update markers
  useEffect(
    () => {
      layerRef.current.clearLayers();
      markersData.forEach(marker => {
        L.marker(marker.latLng, { title: marker.title }).addTo(
          layerRef.current
        );
      });
    },
    [markersData]
  );

  return <div id="mapid" />;
}



function DashboardLocation2() {
  const [markersData, setMarkersData] = useState([
    { latLng: { lat: 49.8419, lng: 24.0315 }, title: 1 }
  ]);

  function addMarker() {
    const lastMarker = markersData[markersData.length - 1];

    setMarkersData([
      ...markersData,
      {
        title: +lastMarker.title + 1,
        latLng: {
          lat: lastMarker.latLng.lat + 0.0001,
          lng: lastMarker.latLng.lng + 0.0001
        }
      }
    ]);
  }

  return (
    <div>
      <Map markersData={markersData} />
      <button onClick={addMarker}>Add marker</button>
      <ul>
        Markers data:
        {markersData.map(marker => (
          <li key={marker.title}>
            {marker.title}, lat: {marker.latLng.lat}, lng: {marker.latLng.lng},
          </li>
        ))}
      </ul>
    </div>
  );
}


export default DashboardLocation2;
