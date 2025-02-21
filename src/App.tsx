import './App.css'
import ComponentLocation from './components/ComponentLocation/ComponentLocation'
import Header from './components/Header/Header'

const apiResponse = {
  states: [
    [
      "ab1644",
      "UAL1558",
      "United States",
      1740105620,
      1740105620,
      138.7782,
            -34.7646,   // Latitud
      2240.28,
    ],
  ],
};

const longitude = apiResponse.states[0][5]; // -94.5896
const latitude = apiResponse.states[0][6]; // 36.388

function App() {
  return (
    <>
     <Header/>
     <ComponentLocation latitude={latitude} longitude={longitude}/>
    </>
  )
}

export default App
