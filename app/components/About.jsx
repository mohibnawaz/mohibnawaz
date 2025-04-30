"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { FaCode, FaLaptopCode, FaServer } from "react-icons/fa"

const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Web Development",
      description: "Creating responsive and performant web applications using modern frameworks and best practices.",
    },
    {
      icon: <FaServer className="w-8 h-8" />,
      title: "Backend Solutions",
      description: "Building robust server-side applications, APIs, and database architectures.",
    },
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: "Full Stack Integration",
      description: "Seamlessly connecting frontend and backend systems for cohesive user experiences.",
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={sectionRef}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 audiowide">
            <span className="text-cyan-400">A</span>bout Me
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">Get to know me and what drives my passion for development.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl" />
              <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10">
                <Image src="/hero.jpg" alt="Mohib Nawaz" fill className=" object-contain" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg -z-10 blur-xl opacity-70" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Hi, I'm Mohib</h3>
            <p className="text-lg leading-relaxed text-white/80 mb-6">
              A passionate and dedicated full-stack developer with a love for building dynamic and scalable web
              applications. With expertise in both front-end and back-end technologies, I enjoy crafting solutions that
              are not only efficient but also visually appealing and user-friendly.
            </p>
            <p className="text-lg leading-relaxed text-white/80 mb-8">
              Beyond coding, I'm an avid cricket enthusiast. Whether it's playing on the field or following the latest
              matches, cricket fuels my competitive spirit and teamwork mindset. I'm always eager to learn, grow, and
              collaborate on impactful projects that combine technology and creativity.
            </p>

            

            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                <p className="text-white/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
