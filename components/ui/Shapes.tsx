'use client'

import React from 'react';
import * as THREE from 'three';
import {Canvas} from "@react-three/fiber";
import {ContactShadows, Float, Environment} from "@react-three/drei";
import {Suspense, useEffect, useRef, useState} from "react";
import { gsap } from "gsap"


const Shapes = () => {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas className="z-0" shadows gl={{antialias: false}} dpr={[1, 1.5]} camera={{position: [0,0,25], fov: 30, near: 1, far: 40}}>
        <Geometries />
        <Suspense fallback={null}>
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Geometries = () => {
  const geometries = [
    {
      position: [0, 0, 0],
      r: 0.3,
      geometry: new THREE.IcosahedronGeometry(3) // Gem
    }
  ]

  const materials = [
    new THREE.MeshNormalMaterial()
  ]

  return geometries.map(({position, r, geometry}, idx)  => (
    <Geometry
      key={JSON.stringify(position)}
      r={Math.random()}
      position={position.map(p => p * 2)}
      geometry={geometry}
      materials={materials}
      r={r}
    />
  ))
}

const Geometry = ({ r, position, geometry, materials }) => {
  const meshRef = useRef()
  const [visible, setVisible] = useState(false)

  const getRandomMaterial = () => {
    return gsap.utils.random(materials)
  }

  const startingMaterial = getRandomMaterial()

  const handleClick = e => {
    const mesh = e.object

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: 'elastic.out(1, 0.3)',
      // yoyo: true
    })

    mesh.material = getRandomMaterial()
  }

  const handlePointerOver = () => {
    document.body.style.cursor = 'pointer'
  }

  const handlePointerOut = () => {
    document.body.style.cursor = 'default'
  }

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          material={startingMaterial}
          visible={visible}
        />
      </Float>
    </group>
  )
}

export default Shapes;
