import { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

type ModelProps = {
  scale?: number
}

export function Model({ scale = 1 }: ModelProps) {
  const ref = useRef<THREE.Group>(null!)
  const { nodes } = useGLTF("/object_0.glb") as any

  useFrame(({ clock, mouse }) => {
    if (!ref.current) return

    // Slow X-axis rotation
    ref.current.rotation.x = clock.elapsedTime * 0.2

    // Subtle Y-axis interaction
    ref.current.rotation.y = mouse.x * 0.4
  })

  return (
    <group ref={ref} scale={scale} dispose={null}>
      <mesh
        geometry={nodes.geometry_0.geometry}
        material={nodes.geometry_0.material}
        castShadow
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload("/object_0.glb")
