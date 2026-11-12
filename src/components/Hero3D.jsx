import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, MeshReflectorMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Золотое кольцо: тор с металлическим материалом
function GoldRing({ radius, tube, position, rotation, speed, mouse, depth }) {
  const ref = useRef()
  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.z += delta * speed
    ref.current.rotation.x += delta * speed * 0.3
    ref.current.position.x += ((mouse.current.x * depth) - ref.current.position.x) * 0.04
    ref.current.position.y += ((mouse.current.y * depth) - ref.current.position.y) * 0.04
  })
  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <torusGeometry args={[radius, tube, 24, 120]} />
      <meshStandardMaterial color="#C8A96B" metalness={1} roughness={0.22} envMapIntensity={1.4} />
    </mesh>
  )
}

// Абстрактная скульптурная форма — полированный октаэдр со скруглением
function Sculpture({ position, scale, mouse, depth }) {
  const ref = useRef()
  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.18
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
    ref.current.position.x += ((mouse.current.x * depth) - ref.current.position.x) * 0.03
    ref.current.position.y += ((mouse.current.y * depth) - ref.current.position.y) * 0.03
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#211B17" metalness={0.9} roughness={0.15} envMapIntensity={1.2} flatShading />
    </mesh>
  )
}

function Scene({ mouse, reduced, mobile }) {
  const group = useRef()
  useFrame((state) => {
    if (!group.current || reduced) return
    group.current.rotation.y = state.clock.elapsedTime * 0.04
    group.current.rotation.x = mouse.current.y * 0.05
  })

  const depth = mobile ? 0.15 : 0.4
  const ringCount = mobile ? 2 : 3

  return (
    <group ref={group}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} color="#F5F0E8" />
      <pointLight position={[-4, -2, 3]} intensity={1.2} color="#C8A96B" />

      <Float speed={reduced ? 0 : 1.2} rotationIntensity={0.2} floatIntensity={reduced ? 0 : 0.6}>
        <GoldRing radius={2.2} tube={0.018} position={[0, 0, 0]} rotation={[1.1, 0.2, 0]} speed={0.12} mouse={mouse} depth={depth} />
      </Float>
      {ringCount > 1 && (
        <GoldRing radius={1.5} tube={0.012} position={[0.2, -0.1, -0.5]} rotation={[0.4, 1.0, 0.3]} speed={-0.16} mouse={mouse} depth={depth * 1.4} />
      )}
      {ringCount > 2 && (
        <GoldRing radius={2.9} tube={0.008} position={[-0.3, 0.2, -1]} rotation={[1.4, 0.5, 0.8]} speed={0.08} mouse={mouse} depth={depth * 0.6} />
      )}

      <Sculpture position={[1.9, -0.9, 0.4]} scale={mobile ? 0.35 : 0.5} mouse={mouse} depth={depth * 2} />
      <Sculpture position={[-2.1, 1.1, -0.8]} scale={mobile ? 0.2 : 0.3} mouse={mouse} depth={depth * 1.5} />

      <mesh position={[0, -2.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 14]} />
        <MeshReflectorMaterial
          blur={[300, 80]}
          resolution={mobile ? 256 : 512}
          mixBlur={1}
          mixStrength={22}
          roughness={1}
          depthScale={0.6}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
    </group>
  )
}

export default function Hero3D({ mouse, reduced, mobile }) {
  return (
    <Canvas
      dpr={[1, mobile ? 1.25 : 1.6]}
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      gl={{ antialias: !mobile, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
      frameloop={reduced ? 'demand' : 'always'}
      style={{ position: 'absolute', inset: 0 }}
    >
      <Suspense fallback={null}>
        <Scene mouse={mouse} reduced={reduced} mobile={mobile} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}
