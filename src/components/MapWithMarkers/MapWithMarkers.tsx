import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Definir el tipo para las ubicaciones
interface Location {
  lat: number;
  lng: number;
  name: string;
}

// Crear un ícono personalizado para los marcadores
const customIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Lista de 10 ubicaciones
const locations: Location[] = [
  { lat: 51.505, lng: -0.09, name: 'London' },
  { lat: 48.8566, lng: 2.3522, name: 'Paris' },
  { lat: 40.7128, lng: -74.006, name: 'New York' },
  { lat: 34.0522, lng: -118.2437, name: 'Los Angeles' },
  { lat: 35.6895, lng: 139.6917, name: 'Tokyo' },
  { lat: 37.7749, lng: -122.4194, name: 'San Francisco' },
  { lat: 55.7558, lng: 37.6173, name: 'Moscow' },
  { lat: 52.52, lng: 13.405, name: 'Berlin' },
  { lat: 41.9028, lng: 12.4964, name: 'Rome' },
  { lat: 37.5665, lng: 126.978, name: 'Seoul' },
];

const MapWithMarkers: React.FC = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={3} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]} icon={customIcon}>
          <Popup>
            {location.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWithMarkers;
