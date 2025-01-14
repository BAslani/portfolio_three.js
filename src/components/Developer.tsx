import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    EyeLeft: THREE.SkinnedMesh
    EyeRight: THREE.SkinnedMesh
    Wolf3D_Head: THREE.SkinnedMesh
    Wolf3D_Teeth: THREE.SkinnedMesh
    Wolf3D_Hair: THREE.SkinnedMesh
    Wolf3D_Body: THREE.SkinnedMesh
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh
    Wolf3D_Outfit_Top: THREE.SkinnedMesh
    Hips: THREE.Bone
  }
  materials: {
    Wolf3D_Eye: THREE.MeshStandardMaterial
    Wolf3D_Skin: THREE.MeshStandardMaterial
    Wolf3D_Teeth: THREE.MeshStandardMaterial
    Wolf3D_Hair: THREE.MeshStandardMaterial
    Wolf3D_Body: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Top: THREE.MeshStandardMaterial
  }
}

type Props = {
  animationName: string
}

// props: JSX.IntrinsicElements['group']

export default function Avatar({ animationName = 'idle', ...props }: Props) {
  const { nodes, materials } = useGLTF(
    '/models/animations/developerAvatar.glb'
  ) as GLTFResult

  const groupRef = useRef<THREE.Group>(null)

  const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx')
  const { animations: saluteAnimation } = useFBX(
    '/models/animations/salute.fbx'
  )
  const { animations: clappingAnimation } = useFBX(
    '/models/animations/clapping.fbx'
  )
  const { animations: victoryAnimations } = useFBX(
    '/models/animations/victory.fbx'
  )

  idleAnimation[0].name = 'idle'
  saluteAnimation[0].name = 'salute'
  clappingAnimation[0].name = 'clapping'
  victoryAnimations[0].name = 'victory'

  const { actions } = useAnimations(
    [
      idleAnimation[0],
      saluteAnimation[0],
      clappingAnimation[0],
      victoryAnimations[0],
    ],
    groupRef
  )

  useEffect(() => {
    actions[animationName]?.reset().fadeIn(0.5).play()
    return () => {
      actions[animationName]?.fadeOut(0.5)
    }
  }, [actions, animationName])

  return (
    <group {...props} dispose={null} scale={3} ref={groupRef}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name='EyeLeft'
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name='EyeRight'
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name='Wolf3D_Head'
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name='Wolf3D_Teeth'
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  )
}

useGLTF.preload('/models/animations/developerAvatar.glb')
