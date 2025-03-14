import React, { useState, useEffect } from "react";
import "./Header.css";
import MenuLateral from "../MenuLateral/MenuLateral";
import SceneViewer from "../Modelo/SceneViewer";

const Header: React.FC = () => {
  const [cloudPosition, setCloudPosition] = useState(100);
  const [planePosition, setPlanePosition] = useState(0);
  const [fleetPosition, setFleetPosition] = useState(-1700);
  const [isPlaneMoving, setIsPlaneMoving] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCloudPosition((prev) => (prev <= -100 ? 100 : prev - 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleFleetClick = () => {
    setTimeout(() => {
      setIsPlaneMoving(false);
      setFleetPosition(0);
    }, 1000);

    setPlanePosition(1700);
  };

  return (
    <div className="header">
        <div
          className="model-container"
          style={{
            transform: `translateX(${planePosition}px)`,
            transition: "transform 2s ease-in-out",
          }}
        >
          <SceneViewer modelSrc="/models/modeloa330texturas.glb" lightIntensity={2} scale={2.5} enableRotation={true} rotationZ={0.05}/>
        </div>
      <div
        className="text-container"
        style={{
          opacity: isPlaneMoving ? 1 : 0,
          transition: "opacity 2s ease-in-out",
        }}
      >
        <p>
          Hi Fly is a leading wet lease and charter <br /> specialist airline
          operating worldwide
        </p>
        <p>For Hi Fly Cargo click here</p>
      </div>
      <MenuLateral onFleetClick={handleFleetClick} />
    </div>
  );
};

export default Header;


