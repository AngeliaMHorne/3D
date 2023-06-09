import { motion } from "framer-motion"
import { styles } from "../styles"
import {MydeskCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-2">
          <div className="w-3 h-3 rounded-full bg-[#23bdff]" />
          <div className="w-1 sm:h-80 h-40 theblue-gradient" />
        </div>
        <div style={{ zIndex: 1 }}>
          <h1 className={`${styles.heroHeadText} text-white font-vollkorn`}>Hi, I'm <span className="text-theblue font-newrocker">Angelia</span></h1>
          <p className={`${styles.heroSubText} font-vollkorn text-secondary`}>
            I develop 3D animations, user <br className="sm:block hidden"/> interfaces and web applications.
          </p>
        </div>

      </div>
        <MydeskCanvas />
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
          </a>
        </div>
    </section>
  )
}

export default Hero