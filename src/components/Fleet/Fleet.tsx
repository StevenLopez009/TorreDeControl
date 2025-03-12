import React, { useState, useEffect } from "react";
import SceneViewer from "../Modelo/SceneViewer";
import { gsap } from "gsap";
import "./Fleet.css";

const Fleet: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [zoomScale, setZoomScale] = useState(1.7); // Valor inicial de escala

  useEffect(() => {
    if (selectedModel) {
      gsap.to(".selected-viewer", {
        scale: 1.5, // Aumenta el zoom suavemente
        duration: 1.5, // Duración de la animación en segundos
        ease: "power2.out", // Hace la animación más natural
      });
    } else {
      gsap.to(".selected-viewer", {
        scale: 1, // Regresa al tamaño normal
        duration: 1.5,
        ease: "power2.out",
      });
    }
  }, [selectedModel]);

  const handleClick = (modelSrc: string) => {
    setSelectedModel(modelSrc);
  };

  return (
    <div className="fleet-container">
      {selectedModel ? (
        <div className="selected-viewer">
          <SceneViewer
            modelSrc={selectedModel}
            lightIntensity={2}
            scale={zoomScale}
            enableRotation={false}
            rotationZ={0.25}
          />
        </div>
      ) : (
        <>
          <div className="scene-viewer" onClick={() => handleClick("/models/ModelA320.glb")}>
            <SceneViewer
              modelSrc="/models/ModelA320.glb"
              lightIntensity={2}
              scale={2.3}
              enableRotation={false}
              rotationZ={0.05}
            />
          </div>
          <div className="scene-viewer" onClick={() => handleClick("/models/A340Textures.glb")}>
            <SceneViewer
              modelSrc="/models/A340Textures.glb"
              lightIntensity={2}
              scale={2.3}
              enableRotation={false}
              rotationZ={0.05}
            />
          </div>
          <div className="scene-viewer" onClick={() => handleClick("/models/modeloa330texturas.glb")}>
            <SceneViewer
              modelSrc="/models/modeloa330texturas.glb"
              lightIntensity={2}
              scale={2.3}
              enableRotation={false}
              rotationZ={0.05}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Fleet;
