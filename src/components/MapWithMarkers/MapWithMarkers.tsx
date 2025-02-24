import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Definir el tipo de `props`
interface MapWithMarkersProps {
  locations: { lat: number; lng: number; name: string }[];
}

// Crear un ícono personalizado para los marcadores
const customIcon = L.icon({
  iconUrl: 'https://res.cloudinary.com/dgwr512qr/image/upload/v1740426341/gxgd98fctwaup31doomd.png',
  iconSize: [35, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapWithMarkers: React.FC<MapWithMarkersProps> = ({ locations }) => {
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

