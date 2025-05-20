'use client'

import { Canvas, } from '@react-three/fiber'
import { useGLTF, Center, Text3D, OrbitControls } from '@react-three/drei'

export default function HeroText() {
  return (

      <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <Scene />
        {/*<axesHelper scale={2} position={[0, 0, 0]} onUpdate={(self) => self.setColors('#ff2080', '#20ff80', '#2080ff')} />*/}
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={2} />
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
          {`Hi there!\nSalut, enchanté\nXin chào!`}
          <meshStandardMaterial color="#ffffff"  />
        </Text3D>
        <Center position={[-1.25, -0.98, 0]} rotation={[0, Math.PI, 0]}>
          <Mac scale={2} />
        </Center>
      </Center>
    </>
  )
}
function Mac(props) {
  const { scene } = useGLTF('/imac_computer.glb')

  return (
    <primitive object={scene} scale={1.5} {...props} />
  )
}

