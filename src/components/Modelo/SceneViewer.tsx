import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedModel from "../AnimatedModel/AnimatedModel";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SceneViewerProps {
  modelSrc: string;
  lightIntensity?: number;
  setScale?: any;
  scale: number;
  enableRotation?: boolean;
  zoom?: boolean; 
  rotationZ: number;
}

const SceneViewer: React.FC<SceneViewerProps> = ({
  modelSrc,
  lightIntensity = 1.5,
  scale,
  enableRotation,
  zoom = false, 
  rotationZ,
}) => {
  const cameraRef = useRef<any>(null);

  useEffect(() => {
    if (cameraRef.current) {
      gsap.to(cameraRef.current.position, {
        x: zoom ? -5 : -10,
        y: 2,
        z: 0,
        duration: 0.9, 
      });
    }
  }, [zoom]);

  return (
    <Canvas shadows={false} camera={{ position: [-10, 2, 0], fov: 50 }}>
      <perspectiveCamera
        ref={cameraRef}
        position={[-10, 2, 0]}
        fov={50}
        near={0.1}
        far={1000}
      />
      <ambientLight intensity={lightIntensity} />
      <directionalLight position={[-10, 5, 10]} intensity={12} castShadow={true} />
      <pointLight position={[0, 5, 0]} intensity={1.5} castShadow={false} />
      <AnimatedModel src={modelSrc} scale={scale} enableRotation={enableRotation} rotationZ={rotationZ}/>
      <OrbitControls enableZoom={false} enableRotate={!!enableRotation} enablePan={false} />
    </Canvas>
  );
};

export default SceneViewer;



