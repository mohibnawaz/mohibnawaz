"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi"

const experiences = [
  {
    id: 1,
    institue: "Chandigarh group of colleges",
    degree: "B.Tech CSE",
    location: "Mohali, Punjab",
    period: "2021 - Present",

  },
  {
    id: 2,
    institue: "Heritage Children academy",
    degree: "Intermediate",
    location: "Rampur, UP",
    period: "2020 - 2021",

  },
  {
    id: 3,
    institue: "Heritage Children academy",
    degree: "High School",
    location: "Rampur, UP",
    period: "2018 - 2019",

  },
]

const ExperienceCard = ({ experience, index, isOdd }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <div className={`mb-8 flex justify-between items-stretch w-full ${isOdd ? "flex-row-reverse" : ""}`}>
      <div className="hidden md:block w-5/12" />

      <div className="mx-auto md:mx-0 relative flex items-center justify-center w-12 md:w-2/12">
        <div className="h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-500 mx-auto" />
        <motion.div
          className="absolute w-12 h-12 rounded-full bg-black border-4 border-cyan-400 flex items-center justify-center z-10"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <FiBriefcase className="text-cyan-400" />
        </motion.div>
      </div>

      <motion.div
        ref={cardRef}
        className="w-full md:w-5/12 bg-white/5 p-6 rounded-xl backdrop-blur-sm"
        initial={{ opacity: 0, x: isOdd ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isOdd ? -50 : 50 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ y: -5 }}
      >
        <h3 className="text-xl font-bold text-white mb-1">{experience.institue}</h3>
        <h4 className="text-lg text-cyan-400 mb-4">{experience.degree}</h4>

        <div className="flex flex-wrap gap-4 mb-4 text-sm text-white/70">
          <div className="flex items-center gap-1">
            <FiCalendar className="w-4 h-4" />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiMapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const Experience = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={sectionRef}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 audiowide">
            <span className="text-cyan-400">J</span>ourney
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            My Academics journey and the valuable experience I've gained along the way.
          </p>
        </motion.div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} isOdd={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
