"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="#home" className="text-2xl font-bold audiowide text-white">
              <span className="text-cyan-400">M</span>ohib
            </Link>
            <p className="text-white/50 mt-2">Full Stack Developer</p>
          </motion.div>

          <motion.div
            className="flex gap-6 mt-6 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="https://github.com/mohibnawaz"
              className="text-white/50 hover:text-cyan-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/syedmohibnawaz1"
              className="text-white/50 hover:text-cyan-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://twitter.com"
              className="text-white/50 hover:text-cyan-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-8 text-white/50 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>© {currentYear} Syed Mohib Nawaz. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
