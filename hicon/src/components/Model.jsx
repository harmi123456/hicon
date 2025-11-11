import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

function ChairModel() {
  const { scene } = useGLTF("/img/model.glb");
  const ref = useRef();

  // 🔹 Gentle rotation + subtle breathing animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.4;
      const s = 4.5 + Math.sin(t * 2) * 0.03; // slightly smaller scale
      ref.current.scale.set(s, s, s);
    }
  });

  return <primitive ref={ref} object={scene} position={[0, -1, 0]} />; // lower it slightly
}

export default function ModelViewer() {
  return (
    <div style={{ height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
      <Canvas
        style={{ height: "100vh", width: "100%", display: "block" }}
        camera={{ position: [0, 1, 9], fov: 45 }} // moved camera slightly back
      >
        <color attach="background" args={["#f5f5f5"]} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <ChairModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
