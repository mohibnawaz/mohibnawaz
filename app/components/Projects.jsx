"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FiExternalLink, FiGithub } from "react-icons/fi"

const projects = [
  {
    id: 1,
    title: "Mylinkfolio",
    description: "An ATS-friendly resume builder optimized for LinkedIn users to create professional, streamlined resumes.",
    image: "/linkfolio.png",
    tags: ["React", "Node.js", "MongoDB", "API"],
    github: "https://github.com/mohibnawaz/mylinkfolio",
    live: "https://mylinkfolio-opal.vercel.app/",
  },
  {
    id: 2,
    title: "Shieldgen",
    description: "ShieldGen is a self-defense training platform that offers helpful videos and tracks your progress over time.",
    image: "/shiledgen.png",
    tags: ["Next.js", "Youtube", "TailwindCSS", "Vercel"],
    github: "https://github.com/mohibnawaz/shieldgen",
    live: "https://shieldgen.vercel.app/",
  },
  {
    id: 3,
    title: "Levitation",
    description: "A secure invoice management system that allows users to create, send, and manage invoices in real-time.",
    image: "/levitation.png",
    tags: ["React", "MongoDB", "Pupeteer"],
    github: "https://github.com/iQliPsE-22/levitation",
    live: "https://levitation-eight.vercel.app/",
  },
]

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      className="group relative bg-white/5 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70" />
      </div>

      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-white/70 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 text-cyan-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            href={project.github}
            className="flex items-center gap-1 text-white/70 hover:text-cyan-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className="w-4 h-4" />
            <span>Code</span>
          </Link>
          <Link
            href={project.live}
            className="flex items-center gap-1 text-white/70 hover:text-cyan-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={sectionRef}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 audiowide">
            <span className="text-cyan-400">P</span>rojects
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A showcase of my technical expertise and creative problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
