import { Float, useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'

export type DreiGLTF = GLTF & {
  nodes: Record<string, THREE.Mesh>
  materials: Record<string, THREE.MeshStandardMaterial>
}

export default function Model(props: GroupProps) {
  const { nodes, materials } = useGLTF(
    '/models/react.glb'
  ) as unknown as DreiGLTF
  return (
    <Float floatIntensity={1}>
      <group {...props} position={[8, 6, 0]} scale={0.3} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[-5, -2.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')
