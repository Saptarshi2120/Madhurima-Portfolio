"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen flex items-center pt-16 pb-20 px-4">
      <motion.div
        ref={ref}
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side - Text Content */}
          <motion.div variants={itemVariants} className="flex flex-col items-start space-y-6 md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-heading">
              <span className="text-primary">Data Analyst</span>
              <br />
              <span className="text-[#EDEDED]">with a passion for insights</span>
            </h1>
            <p className="text-lg text-[#EDEDED]/80 max-w-xl">
              Transforming complex data into actionable business intelligence using Python, SQL, and Power BI
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-background">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white/10 hover:border-highlight hover:text-highlight"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
              <motion.a
                href="https://github.com/madhurima-dutta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ y: -5, color: "#FFDEB4" }}
                className="text-[#EDEDED] hover:text-highlight transition-colors"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/madhu-rima-dutta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ y: -5, color: "#FFDEB4" }}
                className="text-[#EDEDED] hover:text-highlight transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div variants={itemVariants} className="md:w-1/2 flex justify-center">
            <div className="relative w-[250px] h-[300px] md:w-[300px] md:h-[350px]">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>

              {/* Image with rounded edges and drop shadow */}
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/images/profile-photo.png"
                  alt="Madhurima Dutta"
                  width={300}
                  height={350}
                  className="rounded-2xl shadow-xl object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
