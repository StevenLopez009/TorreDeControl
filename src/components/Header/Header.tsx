import React, { useState, useEffect } from "react";
import "./Header.css";
import Clouds1 from "../../assets/home-clouds-fg@2x.webp";
import Clouds2 from "../../assets/home-clouds-fg@2x (1).webp";
import Model3D2 from "../Modelo/Modelo3D2";
import Logo from "../../assets/logo-removebg-preview.png";

import MenuLateral from "../MenuLateral/MenuLateral";

const Header: React.FC = () => {
  const [cloudPosition, setCloudPosition] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setCloudPosition(prev => (prev <= -100 ? 100 : prev - 1));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <div className="container-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="cloud-wrapper">
        <div className="container-clouds">
          <img src={Clouds1} alt="" />
          <img src={Clouds1} alt="" />
        </div>
        <div className="container-clouds-two">
          <img src={Clouds2} alt="" />
          <img src={Clouds2} alt="" />
        </div>
        <div className="container-clouds-three">
          <img src={Clouds2} alt="" />
          <img src={Clouds2} alt="" />
        </div>
      </div>
      <div className="model-container">
        <Model3D2 />
      </div>
      <div className="text-container">
        <p>Hi Fly is a leading wet lease and charter <br /> specialist airline operating worldwide</p>
        <p>For Hi Fly Cargo click here</p>
      </div>
      <div className="menu-container">
        <MenuLateral />
      </div>
    </div>
  );
};

export default Header;

