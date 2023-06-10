import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, service_code_link }) => (
  <>
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full theblue-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer"
        onClick={() => window.open(service_code_link, "_blank")}
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col cursor-pointer">
          <img src={icon} alt={title} className="w-30 h-30 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  </>
);

const About = () => {
  const handleServiceLinkClick = (service_code_link) => {
    window.open(service_code_link);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>~Overview~</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] font-vollkorn"
      >
        As an experienced artist with a diverse background, I bring a broad
        range of skills and knowledge to the table. I have a strong foundation
        in both traditional and digital art, and I am comfortable with logical
        systems dating back to the pre-internet days. This allows me to quickly
        and easily learn new software and hardware as technologies evolve. I am
        a lifelong learner with a natural intellectual curiosity, which allows
        me to present unique viewpoints and innovative approaches to any
        project.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={`service-${index}`} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
