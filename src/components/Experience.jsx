import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#0e0e0e',
      color: '#23bdff'}}
    contentArrowStyle={{
      borderRight: '7px solid #23bdff'}}
      date={experience.date}
      iconStyle={{background: experience.iconBg}}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-60% h-60% object-contain"
            />
        </div>
      }
      >
    <div>
      <h3 className="text-theblue text-[22px] font-bold">{experience.title}</h3>
      <p className="text-white text-[18px] font-semibold font-vollkorn" style={{margin: 1}}>{experience.company_name}</p>
    </div>
    <ul className="mt-5 mb-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
        key={`experience-point-${index}`}
        className="font-vollkorn text-secondary text-[16px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>~Experience~</h2>
      </motion.div>
    <div className="mt-20 flex flex-col">
    <VerticalTimeline>
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          experience={experience} />
        ))}
    </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")