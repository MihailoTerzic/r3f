/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Heliona (https://sketchfab.com/Heliona)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rose-6281bf3703584323bb4d8326f1f1b59d
Title: Rose
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/rose/scene.gltf')
  const roseRef = useRef()

  useFrame(() => {
    if (roseRef.current) {
      roseRef.current.rotation.y += 0.01; // Adjust speed here
    }
  });


  return (
    <group {...props} dispose={null} ref={roseRef}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['ru��a_m_petal_0'].geometry}
            material={materials.m_petal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['ru��a_m_stem_0'].geometry}
            material={materials.m_stem}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['ru��a_m_leafs_0'].geometry}
            material={materials.m_leafs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['ru��a_m_thorns_0'].geometry}
            material={materials.m_thorns}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/rose/scene.gltf')
