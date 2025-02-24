import  { useState } from "react";
import { getFlights } from "../../services/flightService";
import MapWithMarkers from "../MapWithMarkers/MapWithMarkers";

const ComponentFilters = () => {
  const [country, setCountry] = useState<string>(""); 
  const [airline, setAirline]= useState<string>("")
  const [filteredFlights, setFilteredFlights] = useState<any[]>([]); 
  const [callsigns, setCallsigns] = useState<string[]>([]);

  const countries = [
    "United States",
    "Canada",
    "Brazil",
    "United Kingdom",
    "Australia",
    "Portugal",
    "India",
  ];

  const airlines=[
    "TAP Air Portugal",
    "SATA Air Açores",
    "LOT Polish Airlines"
  ]

  const handleConsultarClick = async () => {
    const flights = await getFlights();
    if (flights && flights.states) {
      const filtered = flights.states.filter(
        (flight: any) => flight[2] === country
      );
      setFilteredFlights(filtered); 

      const callsignsArray = filtered.map((flight: any) => flight[1]);
      setCallsigns(callsignsArray);
      console.log("Vuelos filtrados por país:", filtered); 
      console.log("aerolineas", callsignsArray)
    } else {
      console.log("No se pudieron obtener los datos de los vuelos.");
    }
  };


  return (
    <div>
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Selecciona un país</option>
        {countries.map((countryName, index) => (
          <option key={index} value={countryName}>
            {countryName}
          </option>
        ))}
      </select>
      
      <select
        value={airline}
        onChange={(e)=> setAirline(e.target.value)}
      >
        <option value="">Selecciona una Aerolinea</option>
      </select>

      <button onClick={handleConsultarClick}>CONSULTAR</button>

      {filteredFlights.length > 0 && (
        <div>
          <h3>Vuelos filtrados para {country}:</h3>

          <ul>
            {filteredFlights.map((flight, index) => (
              <li key={index}>
                 <strong>CALLSIGN:</strong>{flight[1]}
              </li>
            ))}
          </ul>
        </div>
      )}
      <MapWithMarkers/>
    </div>
  );
};

export default ComponentFilters;