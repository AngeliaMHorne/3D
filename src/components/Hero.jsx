import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { styles } from "../styles"
import {MydeskCanvas } from "./canvas"
import Loader from "./Loader"

const Hero = () => {

  const [isloaded, setisLoaded] = useState()
    useEffect(() => {
      setTimeout(() => {
        setisLoaded(false)}, 2500)})

  return (
    <section className="relative w-full h-screen flex justify-center items-center mx-auto xl:flex-1">

      {isloaded==true ?
      <Loader /> : <MydeskCanvas />
      }

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
          <p className="px-10 py-10 text-secondary font-medium font-vollkorn lg:text-[24px] md:text-[24px] sm:text-[20px] xs:text-[20px] text-[20px] lg:leading-[40px]">
            I develop 3D animations, user interfaces and web applications.
          </p>
      </div>
    </section>
  )
}

export default Hero