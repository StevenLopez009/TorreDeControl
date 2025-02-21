import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MapProps {
  latitude: number;
  longitude: number;
}

const ComponentLocation: React.FC<MapProps> = ({ latitude, longitude }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={8}
      style={{ height: "400px", width: "100%" }}
    >
      {/* Capa de fondo del mapa */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Marcador en la posición de la unidad */}
      <Marker position={[latitude, longitude]}>
        <Popup>Ubicación actual de la unidad</Popup>
      </Marker>
    </MapContainer>
  );
};

export default ComponentLocation;
