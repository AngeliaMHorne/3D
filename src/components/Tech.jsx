import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div>
    <div className="flex flex-row flex-wrap justify-center gap-10 mb-10 text-[24px]"><h1>Here are some of my proficiencies:</h1></div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28"
          title={technology.name}
          key={technology.name}>
            <BallCanvas
              icon={technology.icon}
            />
        </div>
      ))}
    </div>
    </div>
  )
}

export default SectionWrapper(Tech, "")