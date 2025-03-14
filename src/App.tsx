import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/Header/Header'
import Clouds1 from "../src/assets/home-clouds-fg@2x.webp";
import Clouds2 from "../src/assets/home-clouds-fg@2x (1).webp";
import Fleet from './components/Fleet/Fleet';
import LogoContainer from './components/logoContainer/LogoContainer';

function App() {
  const [cloudPosition, setCloudPosition] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setCloudPosition((prev) => (prev <= -100 ? 100 : prev - 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
     <Router>
      <div className="header">
        <LogoContainer />
        <div className="cloud-wrapper">
          <div className="container-clouds">
            <img src={Clouds1} alt="Clouds" />
            <img src={Clouds1} alt="Clouds" />
          </div>
          <div className="container-clouds-two">
            <img src={Clouds2} alt="Clouds" />
            <img src={Clouds2} alt="Clouds" />
          </div>
          <div className="container-clouds-three">
            <img src={Clouds2} alt="Clouds" />
            <img src={Clouds2} alt="Clouds" />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/fleet" element={<Fleet />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
