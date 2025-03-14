import React, { useState, useEffect } from "react";
import SceneViewer from "../Modelo/SceneViewer";
import { gsap } from "gsap";
import "./Fleet.css";
import InfoPannel from "../InfoPanel/InfoPannel";
import SelectionAirplane from "../SelectionAirplane/SelectionAirplane";

const Fleet: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [zoomScale, setZoomScale] = useState(3.1);
  const [showInfoPanel, setShowInfoPanel] = useState(false);

  const modelNames: Record<string, string> = {
    "/models/ModelA320.glb": " A320",
    "/models/A340Textures.glb": "A340",
    "/models/modeloa330texturas.glb": " A330",
  };

  const airplaneData: Record<string, { seats: number; Business: number; Premium: number; Economy: number; Range: number }> = {
    "/models/ModelA320.glb": { seats: 180, Business: 20, Premium: 30, Economy: 130, Range: 6100 },
    "/models/A340Textures.glb": { seats: 300, Business: 40, Premium: 50, Economy: 210, Range: 13800 },
    "/models/modeloa330texturas.glb": { seats: 268, Business: 18, Premium: 36, Economy: 214, Range: 15500 },
  };

  const getModelData = (modelSrc: string | null) => {
    if (!modelSrc) return null;
    return {
      nameAirplane: modelNames[modelSrc] || "Modelo Desconocido",
      ...(airplaneData[modelSrc] || { seats: 0, Business: 0, Premium: 0, Economy: 0, Range: 0 })
    };
  };

  useEffect(() => {
    if (selectedModel) {
      gsap.to(".selected-viewer", {
        scale: 1.5,
        duration: 3.5,
      });

      setTimeout(() => {
        setShowInfoPanel(true);
        gsap.fromTo(
          ".info-pannel",
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
        );
      }, 3000);
    } else {
      gsap.to(".selected-viewer", {
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      });
      setShowInfoPanel(false);
    }
  }, [selectedModel]);

  const handleClick = (modelSrc: string) => {
    setSelectedModel(modelSrc);
  };

  const handleModelSelect = (modelSrc: string) => {
    setSelectedModel(modelSrc); // Actualiza el estado con el modelo seleccionado
  };

  return (
    <div className="fleet-container">
      {selectedModel ? (
        <>
          <div className="selected-viewer">
            <SceneViewer
              modelSrc={selectedModel}
              lightIntensity={2}
              scale={zoomScale}
              enableRotation={false}
              rotationZ={0.20}
            />
          </div>
          {showInfoPanel &&(
            <div className="info-container">
              <InfoPannel {...getModelData(selectedModel)} />
              <SelectionAirplane 
                onSelect={modelNames[selectedModel]} 
                onSelectModel={handleModelSelect} // Pasa la función de callback
              />
            </div>
          )}
        </>
      ) : (
        <>
          <div className="scene-viewer" onClick={() => handleClick("/models/ModelA320.glb")}>
            <SceneViewer modelSrc="/models/ModelA320.glb" lightIntensity={2} scale={2.3} enableRotation={false} rotationZ={0.05} />
          </div>
          <div className="scene-viewer" onClick={() => handleClick("/models/A340Textures.glb")}>
            <SceneViewer modelSrc="/models/A340Textures.glb" lightIntensity={2} scale={2.3} enableRotation={false} rotationZ={0.05} />
          </div>
          <div className="scene-viewer" onClick={() => handleClick("/models/modeloa330texturas.glb")}>
            <SceneViewer modelSrc="/models/modeloa330texturas.glb" lightIntensity={2} scale={2.3} enableRotation={false} rotationZ={0.05} />
          </div>
        </>
      )}
    </div>
  );
};

export default Fleet;


