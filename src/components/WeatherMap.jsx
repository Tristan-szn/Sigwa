import React from 'react';
import { MapContainer, TileLayer, Polygon, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Official approximate coordinate boundaries for the Philippine Area of Responsibility (PAR)
const parCoordinates = [
  [5.0, 115.0],
  [15.0, 115.0],
  [21.0, 120.0],
  [25.0, 120.0],
  [25.0, 135.0],
  [5.0, 135.0]
];

const majorStations = [
  { name: 'Metro Manila Station', lat: 14.5995, lng: 120.9842, temp: '28°C', status: 'Normal' },
  { name: 'Cebu Weather Station', lat: 10.3157, lng: 123.8854, temp: '30°C', status: 'Normal' },
  { name: 'Davao Weather Station', lat: 7.1907, lng: 125.4553, temp: '29°C', status: 'Normal' },
  { name: 'Baguio Observatory', lat: 16.4023, lng: 120.5960, temp: '20°C', status: 'Cool / Foggy' }
];

export default function WeatherMap() {
  return (
    <div className="w-full h-[550px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative z-0">
      <MapContainer 
        center={[12.8797, 121.7740]} 
        zoom={6} 
        style={{ width: '100%', height: '100%', background: '#020617' }}
      >
        {/* Dark Mode Map Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* PAR Red Boundary Polygon */}
        <Polygon 
          positions={parCoordinates} 
          pathOptions={{ color: '#ef4444', weight: 2, dashArray: '5, 5', fillColor: '#ef4444', fillOpacity: 0.08 }}
        >
          <Popup>
            <div className="text-slate-900 font-bold">Philippine Area of Responsibility (PAR)</div>
            <p className="text-xs text-slate-600">Official tracking zone for tropical cyclones.</p>
          </Popup>
        </Polygon>

        {/* Weather Station Markers */}
        {majorStations.map((station, idx) => (
          <Marker key={idx} position={[station.lat, station.lng]}>
            <Popup>
              <div className="text-slate-900 font-semibold">{station.name}</div>
              <p className="text-xs text-slate-600">Temp: {station.temp} | Status: {station.status}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}