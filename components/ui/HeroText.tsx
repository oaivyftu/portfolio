'use client'

import { Canvas } from '@react-three/fiber'
import { useGLTF, useTexture, Center, Decal, Text3D, OrbitControls } from '@react-three/drei'

export default function HeroText() {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 20 }} style={{height: '100px', width: '200px'}}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <Scene />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={0.9}  />
    </Canvas>
  )
}

function Scene() {
  return (
    <Center rotation={[-0.5, -0.25, 0]}>
      <Text3D
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={1.5}
        font="/Inter_Bold.json">
        {`bonjour\nà tous`}
        <meshNormalMaterial />
      </Text3D>
      <Center position={[-1.25, 0, 0]}>
        <Cup scale={2} />
      </Center>
    </Center>
  )
}

function Cup(props) {
  const { nodes, materials } = useGLTF('/coffee-transformed.glb')
  const texture = useTexture('/1200px-Starbucks_Logo_ab_2011.svg.png')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.coffee_cup_top_16oz.geometry} material={materials['13 - Default']}>
        <Decal position={[0, 0.75, 0.3]} rotation={[0, 0, 0]} scale={[0.52, 0.6, 0.6]} map={texture} />
      </mesh>
    </group>
  )
}
