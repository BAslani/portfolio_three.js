import { useGSAP } from '@gsap/react'
import { Center } from '@react-three/drei'
import gsap from 'gsap'
import { useCallback, useRef } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/Addons.js'

export type DreiGLTF = GLTF & {
  nodes: Record<string, THREE.Mesh>
  materials: Record<string, THREE.MeshStandardMaterial>
}

interface RingProps {
  position: number[]
}

const Ring = ({ position }: RingProps) => {
  const refList = useRef<THREE.Mesh[]>([])
  const getRef = useCallback((mesh: THREE.Mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh)
    }
  }, [])

  // const texture = useTexture('textures/rings.png')

  useGSAP(
    () => {
      if (refList.current.length === 0) return

      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2])
      })

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          refList.current.map((r) => r.rotation),
          {
            y: `+=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
              each: 0.15,
            },
          }
        )
    },
    {
      dependencies: position,
    }
  )

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
            <meshMatcapMaterial toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  )
}

export default Ring
