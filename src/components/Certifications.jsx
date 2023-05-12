import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certs } from "../constants";

const CertificationCard = ({
  index,
  certlink,
  certs,
  name,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-tertiary p-10 rounded-3xl xs:w-[320px] w-full'
  >

      <div className='mt-1 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[18px]'>
            {name}
          </p>
          <p className='mt-1 text-secondary font-vollkorn text-[18px]'>
            {company}
          </p>
          <a href = {certlink}  target="_blank" rel="noopener noreferrer" className='mt-1 text-theblue font-vollkorn text-[18px]'>
            Certification
          </a>
        </div>

        <img
          src={image}
          alt={name}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
        <div className='mt-1'>
          <ul className='text-secondary tracking-wider text-[16px] list-disc'>
            {certs.map((certItem) => (
              <li className="font-vollkorn" key={certItem}>{certItem}</li>
            ))}
          </ul>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className={`mt-2 bg-black rounded-[20px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Qualifications</p>
          <h2 className={styles.sectionHeadText}>~Certifications~</h2>
        </motion.div>
        <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", ", 0.1, 1")}
          className='mt-3 text-secondary text-[17px] max-w-xl leading-[30px] font-vollkorn'
        >
          The following are recent specialization certifications I have completed. The appropriate certificates have been linked for verification.
        </motion.p>
      </div>
      <div
        className={`rounded-2xl ${styles.padding} min-h-[150px]`}
      >
      </div>
      <div className={`pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certs.map((cert, index) => (
          <CertificationCard key={cert.name} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "");
