import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";


const Model: React.FC = () => {
  const { scene } = useGLTF("/models/3d-model.glb");
  const modelRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.rotation.z = Math.sin(clock.elapsedTime) * 0.03; 
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.17} rotation={[-0.12, 0, 0.1]} />;
};

const Model3D2: React.FC = () => {
  return (
    <Canvas camera={{ position: [-10, 2, 0], fov: 50 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[-5, 5, 5]} intensity={1.2} />
      <pointLight position={[0, 5, 0]} intensity={1.5} />
      
      <Model />
      <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
    </Canvas>
  );
};

export default Model3D2;


