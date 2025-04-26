"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoDocumentAttachSharp } from "react-icons/io5"
import Link from "next/link"
import Scroll from "./Scroll"

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9])

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const titleText = "SYED MOHIB NAWAZ"

  return (
    <motion.div
      ref={containerRef}
      id="home"
      className="relative min-h-dvh flex flex-col justify-center items-center overflow-hidden"
      style={{ opacity, scale }}
    >
      <motion.div
        className="fixed inset-0 bg-[radial-gradient(circle_at_center,#6db2e4_1%,_transparent_60%)] opacity-20 lg:opacity-15 z-[-1]"
        style={{ y }}
      />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-12 z-10">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="audiowide text-5xl md:text-7xl font-semibold leading-tight"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-block overflow-hidden">
              {titleText.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block bg-gradient-to-r from-[#f0f0f0] to-cyan-300 bg-clip-text text-transparent"
                  variants={letterVariants}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-2xl text-[#a0a0a0] hover:text-white mt-4">Full Stack Developer</p>
            <p className="text-lg text-[#a0a0a0] mt-2 max-w-lg">
              Crafting digital experiences with code, creativity, and a passion for problem-solving.
            </p>

            <div className="flex flex-row justify-start gap-8 items-center w-full mt-8 text-sm">
              <Link
                href="https://github.com/mohibnawaz/mohibnawaz"
                className="group flex flex-col items-center transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative overflow-hidden rounded-full p-3 bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <FaGithub className="h-8 w-8 group-hover:text-cyan-400 transition-all duration-300" />
                </div>
                <p className="text-[#a0a0a0] mt-2 group-hover:text-cyan-400 transition-all duration-300">Github</p>
              </Link>
              <Link
                href="https://www.linkedin.com/in/syedmohibnawaz1/"
                className="group flex flex-col items-center transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative overflow-hidden rounded-full p-3 bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <FaLinkedin className="h-8 w-8 group-hover:text-cyan-400 transition-all duration-300" />
                </div>
                <p className="text-[#a0a0a0] mt-2 group-hover:text-cyan-400 transition-all duration-300">LinkedIn</p>
              </Link>
              <Link
                href="/resume.pdf"
                className="group flex flex-col items-center transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative overflow-hidden rounded-full p-3 bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <IoDocumentAttachSharp className="h-8 w-8 group-hover:text-cyan-400 transition-all duration-300" />
                </div>
                <p className="text-[#a0a0a0] mt-2 group-hover:text-cyan-400 transition-all duration-300">Resume</p>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <Image
                src="/introduction-visual.png"
                alt="Mohib Nawaz"
                width={500}
                height={500}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <Scroll />
    </motion.div>
  )
}

export default Hero
