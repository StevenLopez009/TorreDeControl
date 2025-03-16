import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

interface AnimatedModelProps {
  src: string;
  scale?: number;
  initialRotation?: [number, number, number];
  enableRotation?: boolean;
  rotationZ: number;
}

const AnimatedModel: React.FC<AnimatedModelProps> = ({ src, scale , initialRotation = [-0.15, 0, 0.1],enableRotation, rotationZ }) => {
  const { scene } = useGLTF(src);
  const modelRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ y: 0 });

  useFrame(({ clock, mouse }) => {
    if (modelRef.current) {
      modelRef.current.rotation.z = Math.sin(clock.elapsedTime /2) * (rotationZ);
      if (enableRotation) {
        targetRotation.current.y = mouse.x * 0.5;
        modelRef.current.rotation.y += (targetRotation.current.y - modelRef.current.rotation.y) * 0.1;
      }
    }
  });

  return <primitive ref={modelRef} object={scene} scale={scale} rotation={initialRotation} />;
};

export default AnimatedModel;