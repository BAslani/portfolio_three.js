import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Mesh } from 'three'

export default function Target(props: MeshProps) {
  const targetRef = useRef<Mesh>(null)
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf'
  )

  useGSAP(() => {
    if (!targetRef.current) return
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    })
  })
  return (
    <mesh {...props} rotation={[0, Math.PI / 5, 0]} ref={targetRef}>
      <primitive object={scene} />
    </mesh>
  )
}
