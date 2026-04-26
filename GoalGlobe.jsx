import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Sparkles } from '@react-three/drei';

function Globe() {
  return (
    <Float speed={1.8} rotationIntensity={1.1} floatIntensity={1.7}>
      <mesh>
        <sphereGeometry args={[2.2, 96, 96]} />
        <meshStandardMaterial
          color="#5b5cf6"
          wireframe
          emissive="#2563eb"
          emissiveIntensity={0.7}
        />
      </mesh>

      <mesh rotation={[0.5, 0.4, 0.2]}>
        <torusGeometry args={[2.75, 0.015, 16, 160]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1.2} />
      </mesh>

      <mesh rotation={[1.1, -0.2, 0.8]}>
        <torusGeometry args={[3.05, 0.012, 16, 160]} />
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={1.1} />
      </mesh>
    </Float>
  );
}

export default function GoalGlobe() {
  return (
    <div className="globeBox">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={1.1} />
        <pointLight position={[6, 6, 6]} intensity={2.5} />
        <pointLight position={[-6, -4, -5]} intensity={1.5} color="#7c3aed" />
        <Stars radius={120} depth={60} count={4500} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={80} scale={7} size={2} speed={0.5} />
        <Globe />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.8} />
      </Canvas>
    </div>
  );
}
