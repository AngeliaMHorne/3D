import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <p className='text-secondary absolute lg:text-[40px] w-full flex justify-center items-center mx-auto xl:flex-1'>
        Loading
      </p>
      <p className='mt-20 text-theblue absolute lg:text-[40px] w-full flex justify-center items-center mx-auto xl:flex-1'>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader