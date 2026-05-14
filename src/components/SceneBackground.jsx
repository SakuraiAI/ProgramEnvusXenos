import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles, Stars } from "@react-three/drei";

function HaloSigil() {
  return (
    <Float speed={0.9} rotationIntensity={0.18} floatIntensity={0.28}>
      <group position={[2.05, 0.32, 0]}>
        <mesh>
          <sphereGeometry args={[1.18, 64, 64]} />
          <meshStandardMaterial
            color="#050505"
            emissive="#ffffff"
            emissiveIntensity={0.08}
            metalness={0.75}
            roughness={0.3}
          />
        </mesh>

        <mesh scale={[1.03, 1.03, 1.03]}>
          <sphereGeometry args={[1.2, 64, 64]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} transparent opacity={0.06} />
        </mesh>

        <mesh rotation={[0.25, 0.46, -0.15]}>
          <torusGeometry args={[1.88, 0.016, 18, 180]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.45} transparent opacity={0.24} />
        </mesh>

        <mesh rotation={[1.1, -0.12, 0.36]}>
          <torusGeometry args={[1.58, 0.014, 16, 160]} />
          <meshStandardMaterial color="#77e6ff" emissive="#77e6ff" emissiveIntensity={0.55} transparent opacity={0.18} />
        </mesh>

        <mesh rotation={[0.82, 0.88, 0.15]}>
          <torusGeometry args={[2.26, 0.01, 14, 160]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.32} transparent opacity={0.12} />
        </mesh>
      </group>
    </Float>
  );
}

function BlackHole() {
  return (
    <Float speed={0.7} rotationIntensity={0.15} floatIntensity={0.22}>
      <group position={[-2.6, -0.15, -1.3]}>
        <mesh>
          <sphereGeometry args={[0.74, 48, 48]} />
          <meshBasicMaterial color="#010101" />
        </mesh>

        <mesh rotation={[1.22, 0.16, 0.5]}>
          <torusGeometry args={[1.28, 0.16, 32, 160]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.12} transparent opacity={0.08} />
        </mesh>

        <mesh rotation={[1.18, 0.12, 0.55]}>
          <torusGeometry args={[1.1, 0.07, 32, 180]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.22} transparent opacity={0.18} />
        </mesh>

        <mesh rotation={[1.15, 0.08, 0.55]}>
          <torusGeometry args={[1.48, 0.03, 18, 180]} />
          <meshStandardMaterial color="#77e6ff" emissive="#77e6ff" emissiveIntensity={0.2} transparent opacity={0.12} />
        </mesh>
      </group>
    </Float>
  );
}

function NebulaCloud({ position, color, scale }) {
  return (
    <Float speed={0.8} rotationIntensity={0.08} floatIntensity={0.18}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshBasicMaterial color={color} transparent opacity={0.08} />
      </mesh>
    </Float>
  );
}

function HoloUI({ position, rotation, color }) {
  return (
    <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.45}>
      <group position={position} rotation={rotation}>
        <mesh>
          <planeGeometry args={[1.2, 0.48]} />
          <meshBasicMaterial color={color} transparent opacity={0.06} />
        </mesh>
        <mesh position={[0, 0, 0.01]}>
          <ringGeometry args={[0.18, 0.22, 48]} />
          <meshBasicMaterial color={color} transparent opacity={0.65} side={2} />
        </mesh>
        <mesh position={[0.28, 0.1, 0.01]}>
          <planeGeometry args={[0.34, 0.02]} />
          <meshBasicMaterial color={color} transparent opacity={0.52} />
        </mesh>
        <mesh position={[-0.24, -0.08, 0.01]}>
          <planeGeometry args={[0.28, 0.02]} />
          <meshBasicMaterial color={color} transparent opacity={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

function Beam() {
  return (
    <group position={[1.8, 2.8, -1.6]} rotation={[0.32, 0, 0.26]}>
      <mesh>
        <coneGeometry args={[1.5, 7.5, 48, 1, true]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.06} side={2} />
      </mesh>
    </group>
  );
}

export default function SceneBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6.8], fov: 45 }}>
        <color attach="background" args={["#050507"]} />
        <fog attach="fog" args={["#050507", 5.5, 13]} />

        <ambientLight intensity={0.22} />
        <directionalLight position={[2, 3, 4]} intensity={1.25} color="#ffffff" />
        <pointLight position={[2.4, 1.2, 2]} intensity={1.3} color="#ffffff" />
        <pointLight position={[-3, 0.5, 2]} intensity={0.55} color="#77e6ff" />
        <pointLight position={[0, 3, 0]} intensity={0.85} color="#ffffff" />
        <pointLight position={[-2.4, -0.2, -0.4]} intensity={0.45} color="#8b5cf6" />

        <Stars radius={100} depth={50} count={5200} factor={4} saturation={0} fade speed={0.45} />
        <Sparkles count={110} size={2} scale={[10, 7, 8]} speed={0.3} color="#f8fbff" />

        <Beam />
        <NebulaCloud position={[-1.3, 1.75, -2.4]} color="#8b5cf6" scale={[2.8, 1.3, 1.3]} />
        <NebulaCloud position={[2.8, 1.35, -2.6]} color="#ffffff" scale={[2.4, 1.2, 1.35]} />
        <NebulaCloud position={[0.8, -1.8, -2.8]} color="#77e6ff" scale={[3.2, 1.4, 1.6]} />
        <BlackHole />
        <HaloSigil />
        <HoloUI position={[-2.8, 1.25, -1.2]} rotation={[0.12, 0.4, -0.14]} color="#ffffff" />
        <HoloUI position={[-1.8, -1.35, -0.8]} rotation={[0.08, 0.28, 0.08]} color="#8b5cf6" />
        <HoloUI position={[2.9, -1.2, -1.5]} rotation={[-0.06, -0.32, -0.08]} color="#77e6ff" />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.18} />
      </Canvas>
    </div>
  );
}
