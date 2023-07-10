import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';

const MapWithDirections = () => {
  useEffect(() => {
    const map = L.map('map').setView([14.5202, 121.0669], 13); // Set the initial map view

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(14.520445, 121.0669), // Example start waypoint (latitude, longitude)
        L.latLng(14.520445, 121.0700), // Example end waypoint (latitude, longitude)
      ],
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '400px' }}/>;
};

export default MapWithDirections;
