import React, { useState, useEffect } from "react";
import SceneViewer from "../Modelo/SceneViewer";
import { gsap } from "gsap";
import "./Fleet.css";
import InfoPannel from "../InfoPanel/InfoPannel";

const Fleet: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [zoomScale, setZoomScale] = useState(1.7); 
  const [showInfoPanel, setShowInfoPanel] = useState(false);

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
              rotationZ={0.25}
            />
             {showInfoPanel && (
              <div className="info-pannel">
                <InfoPannel />
              </div>
            )}
          </div >
        </>
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
