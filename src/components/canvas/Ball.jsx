import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"
import CanvasLoader from "../Loader"


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={5}
    >
      <ambientLight intensity={0.5} />
      <directionalLight color="#23bdff" position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[.85]} />
        <meshStandardMaterial
          color="#505050"
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({title,icon}) => {
  return (
    <Canvas
      dpr={[1, 2]}
      //frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          //maxPolarAngle={Math.PI / 2}
          //minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={icon}
        alt={title} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas