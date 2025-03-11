import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedModel from "../AnimatedModel/AnimatedModel";

interface SceneViewerProps {
  modelSrc: string;
  lightIntensity?: number;
  scale: number;
  enableRotation?: boolean;
}

const SceneViewer : React.FC<SceneViewerProps> = ({ modelSrc, lightIntensity = 1.5, scale , enableRotation}) => {
  return (
    <Canvas shadows={false} camera={{ position: [-10, 2, 0], fov: 50 }}>
      <ambientLight intensity={lightIntensity} />
      <directionalLight position={[-10, 5, 10]} intensity={12} castShadow={true} />
      <pointLight position={[0, 5, 0]} intensity={1.5} castShadow={false} />
      <AnimatedModel src={modelSrc} scale={scale} enableRotation={enableRotation}/>
      <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
    </Canvas>
  );
};

export default SceneViewer ;



