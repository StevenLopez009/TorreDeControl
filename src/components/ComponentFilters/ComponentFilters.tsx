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
  "Argentina",  
  "Australia",  
  "Austria",  
  "Brazil",  
  "Canada",  
  "Chile",  
  "China",  
  "Colombia",  
  "France",  
  "Germany",  
  "Greece",  
  "Hungary",  
  "India",  
  "Indonesia",  
  "Ireland",  
  "Japan",  
  "Mexico",  
  "New Zealand",  
  "Norway",  
  "Poland",  
  "Portugal",  
  "Qatar",  
  "Republic of Korea",  
  "Russian Federation",  
  "Spain",  
  "Sweden",  
  "Switzerland",  
  "Turkey",  
  "United Kingdom",  
  "United States"  
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
    GBTVX: "Vuelos privados",
    JST: "Jetstar Airways",
    VOZ: "Virgin Australia",
    QFA: "Qantas Airways",
    QLK: "QantasLink",
    JTE: "Jetstar Asia",
    RXA: "Regional Express Airlines",
    NWK: "Network Aviation",
    FD: "Thai AirAsia",
    SH: "Sharp Airlines",
    SPTR: "Skytrans Airlines",
    SWR: "Swiss International Air Lines",
    TE: "Pascan Aviation",
    AFR: "Air France",
    FWI: "Air Caraïbes",
    CMA: "Air Canada Express (operado por Calm Air)",
    CRL: "Corail Hélicoptères",
    FMY: "Fly My Sky",
    AIC: "Air India",
    IGO: "IndiGo",
    AXB: "Air India Express",
    SEJ: "SpiceJet",
    AKJ: "Akasa Air",
    BDA: "BermudAir",
    TAP: "TAP Air Portugal",
    RZO: "SATA Azores Airlines",
    LOT: "LOT Polish Airlines",
    NJE: "NetJets Europe",
    EVE: "Evelop Airlines",
    FM: "Shanghai Airlines",
    ANZ: "Air New Zealand",
    ZK: "Aeronaves registradas en Nueva Zelanda",
    SKL: "SkyLink Express",
    TEX: "Texel Air",
    GBA: "Barrier Air",
    SDA: "Sounds Air",
    OGN: "Originair",
    HLM: "Helicopters Otago",
    WPR: "Air Chathams",
    VOL: "Volcanic Air",
    CFL: "Air Freight NZ",
    LFT: "Life Flight NZ",
    CVA: "CVA Air",
    ARG: "Aerolíneas Argentinas",
    JES: "Jetsmart Argentina",
    FBZ: "Flybondi",
    LV: "Matrícula de aeronaves en Argentina",
    AVA: "Avianca",
    VIV: "Viva Aerobus",
    AMX: "Aeroméxico",
    SLI: "Aerolitoral (Aeroméxico Connect)",
    VOI: "Volaris",
    VTM: "Aerotransportes Mas de Carga",
    RFD: "Redwings",
    SMX: "Servicios Aéreos Milenium",
    CHG: "Charterlines",
    AUA: "Austrian Airlines",
    EJU: "easyJet Europe",
    TAY: "ASL Airlines Belgium (anteriormente TNT Airways)",
    BCS: "EuroAtlantic Airways",
    IJM: "International Jet Management",
    LPE: "LATAM Perú",
    SKU: "Sky Airline",
    JAT: "Jat Airways",
    LAE: "LATAM Ecuador",
    SKX: "Sky Express",
    FMU: "FMU Airlines",
    DLH: "Lufthansa",
    CFG: "Condor",
    OCN: "Ocean Airlines",
    HUMMEL: "Hummel Air",
    CHX: "CharterX",
    GEC: "Lufthansa Cargo",
    DIMFE: "DIMFE Aviation",
    DHL: "DHL Aviation",
    BOX: "Air Cargo Germany",
    VJH: "VietJet Air",
    BRD: "Bordeaux Air",
    IBE: "Iberia",
    AEA: "Air Europa",
    SVA: "Saudia",
    VLG: "Vueling",
    IBS: "Iberia Express",
    SWT: "Swiftair",
    GIA: "Garuda Indonesia",
    PKTFS: "Trigana Air",
    AWQ: "Indonesia AirAsia",
    CTV: "Citilink",
    LNI: "Lion Air",
    HS: "H S Aviation",
    BTK: "Batik Air",
    MYU: "My Indo Airlines",
    PAS: "Pelita Air",
    SJV: "Sriwijaya Air",
    TNU: "TransNusa",
    OEY: "Oman Eagle",
    KCN: "Kencana Aviation",
    TMG: "Trigana Air",
    ADO: "Air Do",
    ANA: "All Nippon Airways",
    JAL: "Japan Airlines",
    APJ: "Peach Aviation",
    SFJ: "StarFlyer",
    FDA: "Fuji Dream Airlines",
    CKSTR: "Unknown",
    JA: "Unknown",
    NCA: "Nippon Cargo Airlines",
    JJP: "Jetstar Japan",
    IBX: "Ibex Airlines",
    JTA: "Japan Transocean Air",
    RJTT: "Tokyo International (Haneda) ATC Code",
    SNJ: "Solaseed Air",
    SKY: "Skymark Airlines",
    QTR: "Qatar Airways",
    QQE: "Qatar Executive",
    CQH: "Spring Airlines",
    CSN: "China Southern Airlines",
    CXA: "Xiamen Air",
    CKK: "China Cargo Airlines",
    CBG: "Chang'an Airlines",
    HLF: "Hainan Airlines",
    CES: "China Eastern Airlines",
    DKH: "Okay Airways",
    CSC: "Sichuan Airlines",
    LKE: "Lucky Air",
    CSS: "China Postal Airlines",
    LHA: "Lufthansa Cargo",
    CHH: "Hainan Airlines",
    HKE: "Hong Kong Express Airways",
    CRK: "Hong Kong Airlines",
    CPA: "Cathay Pacific",
    CCA: "Air China",
    B6: "JetBlue Airways",
    CYZ: "Yangtze River Express",
    CUA: "China United Airlines",
    CSZ: "Shenzhen Airlines",
    CSH: "Shanghai Airlines",
    UEA: "Urumqi Air",
    FZA: "Fuzhou Airlines",
    GCR: "Genghis Khan Airlines",
    CAO: "Air China Cargo",
    AMU: "Tianjin Airlines",
    CCD: "Capital Airlines",
    CBJ: "Jiangxi Air",
    JYH: "Joy Air",
    CHB: "Beijing Capital Airlines",
    EPA: "Eastar Jet",
    CDG: "China Cargo Airlines",
    AF: "Air France",
    CDC: "Chengdu Airlines",
    CQN: "Qingdao Airlines",
    BLVH: "Bali Lion Air",
    HGB: "Hebei Airlines",
    EIN: "Aer Lingus",
    ITY: "ITA Airways",
    ABR: "ASL Airlines Belgium",
    KZR: "Air Astana",
    MSA: "MasAir",
    KAL: "Korean Air",
    ASV: "Air Seoul",
    TWB: "T'way Air",
    ABL: "Asiana Airlines Cargo",
    JJA: "Jeju Air",
    AAR: "Asiana Airlines",
    ESR: "Eastar Jet",
    EOK: "Eastok Air",
    JNA: "Jin Air",
    IZA: "Izhavia",
    SBI: "S7 Airlines",
    SDM: "Rossiya Airlines",
    UTA: "UTair Aviation",
    PBD: "Pobeda",
    NWS: "North-West Air Company",
    RWZ: "RusLine",
    AFL: "Aeroflot",
    TYA: "Tulpar Air",
    KAR: "Kar-Air",
    NWC: "Nordwind Airlines",
    VDA: "Volga-Dnepr Airlines",
    TUP: "Tulpar Air",
    SVR: "Severstal Aircompany",
    RLU: "RusJet",
    AZO: "Azimuth Airlines",
    LLM: "L-Avia",
    AUL: "Aurora Airlines",
    ENT: "Enter Air",
    SAR: "SprintAir",
    SRN: "Sirio",
    SAS: "Scandinavian Airlines",
    PGT: "Pegasus Airlines",
    KZU: "Kuzu Airlines Cargo",
    THY: "Turkish Airlines",
    SXS: "SunExpress",
    FHY: "Freebird Airlines",
    TKJ: "Tailwind Airlines",
    CAI: "Cairo Aviation",
    MNB: "MNG Airlines"
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