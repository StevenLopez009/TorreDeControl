import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model: React.FC = () => {
  const { scene } = useGLTF("/models/modeloa330texturas.glb");
  const modelRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ y: 0 });

  useFrame(({ clock, mouse }) => {
    if (modelRef.current) {
      modelRef.current.rotation.z = Math.sin(clock.elapsedTime) * 0.04;

      targetRotation.current.y = mouse.x * 0.5;
      modelRef.current.rotation.y += (targetRotation.current.y - modelRef.current.rotation.y) * 0.1;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2.5} rotation={[-0.15, 0, 0.1]} />;
};

const Model3D2: React.FC = () => {
  return (
    <Canvas shadows={false} camera={{ position: [-10, 2, 0], fov: 50 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[-10, 5, 10]} intensity={12} castShadow={true} />
      <pointLight position={[0, 5, 0]} intensity={1.5} castShadow={false} />
      <Model />
      <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
    </Canvas>
  );
};

export default Model3D2;



