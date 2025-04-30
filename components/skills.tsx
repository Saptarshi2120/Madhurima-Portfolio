"use client"

import { motion } from "framer-motion"

const skills = [
  "Data Cleaning & Wrangling",
  "Exploratory Data Analysis (EDA)",
  "Machine Learning",
  "Power BI Dashboards",
  "Advanced Excel (Pivot Tables, Forecasting)",
  "SQL Queries & Optimization",
  "Statistical Modeling",
  "Version Control (Git/GitHub)",
  "Data Visualization",
  "Time Series Analysis",
  "Deep Learning",
  "Dashboard Design",
]

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-10 text-center font-heading">Skills</h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="bg-[#0B0C10]/80 border border-[#1F8EF1]/20 rounded-lg p-4 h-full flex items-center justify-center text-center hover:border-[#1F8EF1]/50 transition-all duration-300 shadow-lg">
                <span className="font-medium">{skill}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
