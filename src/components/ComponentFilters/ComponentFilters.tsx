import  { useEffect, useState } from "react";
import { getFlights } from "../../services/flightService";
import MapWithMarkers from "../MapWithMarkers/MapWithMarkers";

const ComponentFilters = () => {
  const [country, setCountry] = useState<string>(""); 
  const [airline, setAirline]= useState<string>("")
  const [filteredFlights, setFilteredFlights] = useState<any[]>([]); 
  const [callsigns, setCallsigns] = useState<string[]>([]);
  const [locations, setLocations] = useState<{ lat: number; lng: number; name: string }[]>([]);

  const countries = [
    "United States",
    "Australia",
    "Switzerland",
    "France",
    "India",
    "Canada",
    "Brazil",
    "United Kingdom",
    "Australia",
    "Portugal",
    "New Zealand",
    "Argentina",
    "Mexico",
    "Austria",
    "Chile",
    "Germany",
    "Spain",
    "Indonesia",
    "Greece",
    "Japan",
    "Qatar",
    "China",
    "Ireland",
    "Norway",
    "Russian Federation",
    "Hungary",
    "Poland",
    "Sweden",
    "Turkey",
  ];

  const airlineCodes: { [key: string]: string } = {
    WJA: "WestJet",
    ACA: "Air Canada",
    JZA: "Jazz Aviation",
    ROU: "Air Canada Rouge",
    SWG: "Sunwing Airlines",
    TSC: "Air Transat",
    TLK: "TALK Airlines",
    HRT: "Harbour Air",
    CGY: "Calgary Air",
    CFN: "Canadian Flyers",
    AAL:"American Airlines",
    DAL:"Delta Air Lines",
    SWA	:"Southwest Airlines",
    UAL	:"United Airlines",
    ASA	:"Alaska Airlines",
    JBU	:"JetBlue Airways",
    FFT	:"Frontier Airlines",
    RPA	:"Republic Airways",
    SKW	:"SkyWest Airlines",
    ENY	:"Envoy Air",
    EDV	:"Endeavor Air",
    NKS	:"Spirit Airlines",
    QXE	:"Horizon Air",
    LXJ	:"Flexjet",
    EJA	:"Executive Jet Aviation",
    JIA	:"PSA Airlines",
    GJS	:"GoJet Airlines",
    ASH	:"Mesa Airlines",
    GTI	:"Atlas Air",
    FDX	:"FedEx Express",
    UPS	:"UPS Airlines",
    CXK	:"Sun Country Airlines",
    VXP	:"Virgin America",
    MXY	:"Breeze Airways",
    TAM: "LATAM Airlines",
    GLO: "Gol Transportes Aéreos",
    AZU: "Azul Linhas Aéreas",
    LAN: "LATAM Airlines",
    LAP: "LATAM Airlines",
    CO: "Copa Airlines",
    ACN: "Avianca",
    PS: "Pesca (vuelos privados)",
    PP: "Vuelos privados",
    PR: "Vuelos privados",
    LOG: "Loganair",
    AUR: "Aurigny Air Services",
    DHK: "DHL Air",
    EZY: "EasyJet",
    BAW: "British Airways",
    JCO: "Jota Aviation",
    TOM: "TUI Airways",
    WUK: "Wizz Air UK",
    EXS: "Jet2",
    GPJ: "Tradewind Aviation",
    SHT: "British Airways (Shuttle)",
    CFE: "BA CityFlyer",
    VIR: "Virgin Atlantic",
    BMA: "British Mediterranean Airways",
    RRR: "Royal Air Force",
    IWY: "InterCaribbean Airways",
    CRV: "Cervifor Air",
    LFA: "Lufthansa",
    SFY: "Tassili Airlines",
    GKIMZ: "Gulfstream International Airlines",
    GLKAM: "GlobeAir",
    GRZLY: "Grizzly Air",
    AHY: "Azal Avia Cargo",
    HUNTER1: "Hunter Airways",
    PRF: "Performa Air",
    VPC: "Vuelos privados",
    CWL: "Cargowise",
    MAERO: "Maersk Air",
    MABGV: "MAB Aviation",
    VALKYR49: "Valkyrie Aviation",
    SSZ: "Vuelos privados",
    EFW: "Eurowings",
    BCI: "Blue Islands",
    GNESH: "Vuelos privados",
    NHZ: "Vuelos privados",
    RHD: "Vuelos privados",
    GHIAL: "Vuelos privados",
    SRG: "Vuelos privados",
    PIPE68: "Vuelos privados",
    VPCMJ: "Vuelos privados",
    GTJPK: "Vuelos privados",
    MFUAD: "Vuelos privados",
    MKELY: "Vuelos privados",
    MOUSY: "Vuelos privados",
    MABRB: "Vuelos privados",
    GSRXX: "Vuelos privados",
    GHTML: "Vuelos privados",
    GOHAS: "Vuelos privados",
    ULR: "Vuelos privados",
    GVCRM: "Vuelos privados",
    HLE: "Hola Airlines",
    BHL: "Vuelos privados",
    KLM: "KLM",
    VLZ: "Vuelos privados",
    NPT: "Vuelos privados",
    GCMCY: "Vuelos privados",
    EUK: "Vuelos privados",
    GBTVX: "Vuelos privados"
  };
  
  const handleConsultarClick = async () => {
    const flights = await getFlights();
    if (flights && flights.states) {
      const filtered = flights.states.filter(
        (flight: any) => flight[2] === country
      );
      setFilteredFlights(filtered); 

      const callsignsArray = filtered.map((flight: any) => flight[1]);
      setCallsigns(callsignsArray);

       
      const locations = filtered.map((flight: any) => ({
        callsign: flight[1], 
        longitude: flight[5], 
        latitude: flight[6]
      }))

      console.log("Vuelos filtrados por país:", filtered); 
      console.log("aerolineas", callsignsArray)
      console.log("Ubicaciones (Lat/Lon):", locations);
    } else {
      console.log("No se pudieron obtener los datos de los vuelos.");
    }
  };

  const processCallsigns = (callsigns: string[]) => {
    const uniqueAirlines = new Set<string>(); 
    callsigns.forEach((callsign) => {
      const code = callsign.slice(0, 3); 
      if (airlineCodes[code]) {
        uniqueAirlines.add(airlineCodes[code]); 
      }
    });
    return Array.from(uniqueAirlines); 
  };

  useEffect(() => {
    if (country) {
      handleConsultarClick();
    }
  }, [country]);

  useEffect(() => {
    if (airline) {
      const flightsByAirline = filteredFlights
        .filter((flight: any) => airlineCodes[flight[1].slice(0, 3)] === airline)
        .map((flight: any) => ({
          lat: flight[6],  // Cambiado para coincidir con la estructura esperada
          lng: flight[5],  // Cambiado para coincidir con la estructura esperada
          name: airline,
        }));

      setLocations(flightsByAirline);
      console.log(`Ubicaciones de ${airline}:`, flightsByAirline);
    }
  }, [airline]);



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
        {processCallsigns(callsigns).map((airlineName, index) => (
          <option key={index} value={airlineName}>
            {airlineName}
          </option>
        ))}
      </select>

      {locations.length > 0 && (
        <div>
          <h3>Ubicaciones de {airline}:</h3>
          <ul>
            {locations.map((loc, index) => (
              <li key={index}>
                {loc.name} - Lat: {loc.lat}, Lng: {loc.lng}
              </li>
            ))}
          </ul>
        </div>
      )}

      {filteredFlights.length > 0 && (
        <div>
          <h3>Vuelos filtrados para {country}:</h3>
        </div>
      )}

      <MapWithMarkers locations={locations} />
    </div>
  );
};

export default ComponentFilters;