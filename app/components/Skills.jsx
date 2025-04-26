"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "TailwindCSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "GraphQL", level: 65 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "CI/CD", level: 75 },
      { name: "Testing", level: 80 },
      { name: "Agile", level: 85 },
    ],
  },
]

const SkillBar = ({ skill, index, isInView }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white">{skill.name}</span>
        <span className="text-cyan-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </div>
  )
}

const SkillCategory = ({ category, items, categoryIndex }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className="bg-white/5 rounded-xl p-6 backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
    >
      <h3 className="text-xl font-bold mb-6 text-cyan-400">{category}</h3>
      <div>
        {items.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} isInView={isInView} />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#6db2e4_1%,_transparent_60%)] opacity-10 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={sectionRef}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 audiowide">
            <span className="text-cyan-400">S</span>kills
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            My technical toolkit and expertise that I bring to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <SkillCategory
              key={skillGroup.category}
              category={skillGroup.category}
              items={skillGroup.items}
              categoryIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
