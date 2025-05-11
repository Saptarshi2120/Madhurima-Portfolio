"use client"

import { motion } from "framer-motion"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-primary/20">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-[#EDEDED]/70">© {currentYear} Madhurima Dutta. All rights reserved.</p>
        </div>

        <div className="flex space-x-6">
          <motion.a
            href="#home"
            className="text-sm text-[#EDEDED]/70 hover:text-highlight transition-colors"
            whileHover={{ y: -2 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#about"
            className="text-sm text-[#EDEDED]/70 hover:text-highlight transition-colors"
            whileHover={{ y: -2 }}
          >
            About
          </motion.a>
          <motion.a
            href="#projects"
            className="text-sm text-[#EDEDED]/70 hover:text-highlight transition-colors"
            whileHover={{ y: -2 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="text-sm text-[#EDEDED]/70 hover:text-highlight transition-colors"
            whileHover={{ y: -2 }}
          >
            Contact
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
