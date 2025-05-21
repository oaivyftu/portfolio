'use client'

import { Canvas, } from '@react-three/fiber'
import { useGLTF, Center, Text3D, OrbitControls } from '@react-three/drei'

export default function HeroText() {
  return (

      <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <Scene />
        <OrbitControls enableZoom={true} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI} autoRotate autoRotateSpeed={2} />
      </Canvas>
  )
}

function Scene({ margin = 0.5 }) {
  return (
    <>
      <Center rotation={[0.1, -0.25, 0]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.8}
          letterSpacing={-0.06}
          size={0.45}
          font="/Inter_Bold.json">
          {`Hi there!\nSalut!\nXin chào!`}
          <meshStandardMaterial color="#ffffff"  />
        </Text3D>
        <Center position={[-1.25, -0.5, 0]} rotation={[0, Math.PI, 0]}>
          <Mac scale={3} />
        </Center>
      </Center>
    </>
  )
}
function Mac(props) {
  const { scene } = useGLTF('/my_imac.glb')

  return (
    <primitive object={scene} scale={1.5} {...props} />
  )
}

