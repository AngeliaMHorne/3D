import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, Environment } from '@react-three/drei'
import CanvasLoader from "../Loader"

const Mydesk = ({ isMobile }) => {
  const desk = useGLTF("./mydesk/ornatedesk1.gltf")


  return (
    <mesh>
      <ambientLight position={[2.412, 6.594, -1.770]} intensity={1.} color={"#ffffff"} />
      <primitive
        object={desk.scene}
        scale={isMobile ? 0.5 : 1}
        position={isMobile ? [0, -1, 0] : [0, -1.2, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  )
}

const MydeskCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(max-width: 550px)');

      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange =(event) => {
        setIsMobile(event.matches);
      }

      mediaQuery.addEventListener('change',
      handleMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener('change',
        handleMediaQueryChange);
      }

    }, [])

    return (
      <Canvas
      frameloop='always'
      dpr={[1, 2]}
      camera={{position: [0.047, 2, 20], fov: 45 }}
      gl={{preserveDrawingBuffer: true}}
      className="cursor-pointer"
      >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          //maxPolarAngle={Math.PI / 2} locks to horiz rotate only
          //minPolarAngle={Math.PI / 2}
          />
        <Mydesk isMobile={isMobile} />
        <Environment preset="sunset" background={false}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default MydeskCanvas