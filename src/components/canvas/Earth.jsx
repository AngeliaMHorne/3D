import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/Untitled.gltf')
  return (
    <mesh>
      <pointLight
        position={[20, -50, -10]}
        angle={-0.12}
        penumbra={15}
        intensity={5}
        color="#23bdff" />
      <spotLight
        position={[-20, 50, 10]} //x, y, z
        angle={0.12}
        penumbra={1}
        intensity={5}
        color="#FFFFFF"
        castShadow
        shadow-mapSize={1024}
      />
    <primitive
      object={earth.scene}
      scale={1.5}
      position={[0, -1.5, 0]}
      rotation={[0, 0, 0]}
    />
  </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{preserveDrawingBuffer: true}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
      className="cursor-pointer"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          //maxPolarAngle={Math.PI / 2}
          //minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;