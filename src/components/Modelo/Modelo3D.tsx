import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model: React.FC = () => {
  const { scene } = useGLTF("/models/Model.glb"); 

  return (
    <>
      <primitive object={scene} scale={1} />
      <primitive object={scene.clone()} scale={[-1, 1, 1]} />
    </>
  );
};

const Model3D: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default Model3D;


