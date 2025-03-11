import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent({ geoJsonData }) {
    return (
        <MapContainer center={[20, 77]} zoom={4} style={{ height: "500px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {geoJsonData && <GeoJSON data={geoJsonData} />}
        </MapContainer>
    );
}

export default MapComponent;
