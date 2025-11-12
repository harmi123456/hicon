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
      const s = 4.5 + Math.sin(t * 2) * 0.03;
      ref.current.scale.set(s, s, s);
    }
  });

  // ✅ Adjusted to center perfectly (slightly above original)
  return <primitive ref={ref} object={scene} position={[0, -0.3, 0]} />;
}

export default function ModelViewer() {
  return (
    <div
      style={{
        height: "550px",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <Canvas
        style={{ height: "550px", width: "100%", display: "block" }}
        camera={{ position: [0, 1.2, 8], fov: 45 }} // a bit higher & farther for perfect framing
      >
        <color attach="background" args={["#f5f5f5"]} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.3} />
        <ChairModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
