"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

const techStack = [
  { name: "Python", icon: "🐍" },
  { name: "Pandas", icon: "🐼" },
  { name: "NumPy", icon: "🔢" },
  { name: "Scikit-learn", icon: "🤖" },
  { name: "Matplotlib", icon: "📊" },
  { name: "Seaborn", icon: "📈" },
  { name: "SQL", icon: "🗃️" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySQL", icon: "🐬" },
  { name: "Power BI", icon: "📊" },
  { name: "Excel", icon: "📑" },
  { name: "Git", icon: "🔄" },
  { name: "Jupyter Notebook", icon: "📓" },
  { name: "Google Colab", icon: "🧪" },
  { name: "LaTeX", icon: "📐" },
  { name: "MS Word", icon: "📝" },
  { name: "PowerPoint", icon: "📽️" },
  { name: "PyTorch", icon: "🔥" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "GitHub", icon: "🐱" },
  { name: "SharePoint", icon: "🔗" },
  { name: "DAX", icon: "📉" },
  { name: "Desmos", icon: "📈" },
]

const TechStack = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <div ref={ref} className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold mb-10 text-center font-heading">Tech Stack</h2>

        {/* Fixed height container to prevent layout shifts */}
        <div className="relative h-[300px] overflow-hidden">
          {/* First row of tech stack items */}
          <div className="flex space-x-6 absolute left-0 animate-marquee">
            {techStack.slice(0, Math.ceil(techStack.length / 2)).map((tech, index) => (
              <motion.div
                key={`${tech.name}-1-${index}`}
                className="flex flex-col items-center justify-center p-4 bg-[#0B0C10]/80 rounded-lg shadow-sm border border-primary/20 min-w-[120px] h-[120px] hover:border-primary/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <span className="text-4xl mb-2">{tech.icon}</span>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Second row of tech stack items */}
          <div className="flex space-x-6 absolute left-0 top-[160px] animate-marquee2">
            {techStack.slice(Math.ceil(techStack.length / 2)).map((tech, index) => (
              <motion.div
                key={`${tech.name}-2-${index}`}
                className="flex flex-col items-center justify-center p-4 bg-[#0B0C10]/80 rounded-lg shadow-sm border border-primary/20 min-w-[120px] h-[120px] hover:border-primary/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <span className="text-4xl mb-2">{tech.icon}</span>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
