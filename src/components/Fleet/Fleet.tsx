import React, { useState } from 'react';
import SceneViewer from '../Modelo/SceneViewer';
import './Fleet.css';

const Fleet: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

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
            scale={1.5}
            enableRotation={true}
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
            />
          </div>
          <div className="scene-viewer" onClick={() => handleClick("/models/A340Textures.glb")}>
            <SceneViewer
              modelSrc="/models/A340Textures.glb"
              lightIntensity={2}
              scale={2.3}
              enableRotation={false}
            />
          </div>
          <div className="scene-viewer" onClick={() => handleClick("/models/modeloa330texturas.glb")}>
            <SceneViewer
              modelSrc="/models/modeloa330texturas.glb"
              lightIntensity={2}
              scale={2.3}
              enableRotation={false}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Fleet;