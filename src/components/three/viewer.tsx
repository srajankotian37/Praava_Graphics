import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Environment } from "@react-three/drei"
import { Model } from "./model"

const Viewer = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 35 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <Model scale={1.1} />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  )
}

export default Viewer
