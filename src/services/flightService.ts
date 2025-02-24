import api from "./api";

export interface FlightState {
  icao24: string;            // Código ICAO único
  callsign: string | null;   // Número de vuelo (puede ser null)
  originCountry: string;     // País de origen
  timePosition: number | null; // Última actualización de posición (Unix timestamp)
  lastContact: number;       // Última actualización general (Unix timestamp)
  longitude: number | null;  // Longitud (puede ser null)
  latitude: number | null;   // Latitud (puede ser null)
  baroAltitude: number | null; // Altitud barométrica en metros (puede ser null)
  onGround: boolean;         // ¿Está en tierra?
  velocity: number | null;   // Velocidad en m/s (puede ser null)
  trueTrack: number | null;  // Rumbo verdadero en grados (puede ser null)
  verticalRate: number | null; // Tasa de ascenso/descenso en m/s (puede ser null)
  sensors: number[] | null;  // Sensores que detectaron el vuelo (puede ser null)
  geoAltitude: number | null; // Altitud geométrica en metros (puede ser null)
  squawk: string | null;     // Código transpondedor Squawk (puede ser null)
  spi: boolean;              // Indicador de propósito especial (SPI)
  positionSource: number;    // Fuente de la posición (0 = ADS-B, 1 = ASTERIX, etc.)
  category: number;          // Categoría de la aeronave
}


export const getFlights = async (): Promise<{ states: FlightState[] } | null> => {
  try {
    const response = await api.get<{ states: FlightState[] }>("/states/all");
    return response.data;
  } catch (error) {
    console.error("Error obteniendo vuelos:", error);
    return null;
  }
};
