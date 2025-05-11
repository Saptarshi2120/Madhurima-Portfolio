"use client"
import { motion } from "framer-motion"
import { BarChart3, BookOpen, BrainCircuit, Database } from "lucide-react"

const About = () => {
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
    <div className="py-20 px-4 bg-[#0B0C10]/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="flex flex-col md:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 font-heading">About Me</h2>
            <div className="space-y-4 text-[#EDEDED]/80">
              <p>
                Hi, I'm Madhurima Dutta, a passionate Data Analyst with a strong foundation in mathematics from IIT
                Jodhpur. I specialize in uncovering insights using Python, SQL, and Power BI, with hands-on experience
                in domains like marketing, finance, and inventory systems.
              </p>
              <p>
                Currently working as an Assistant Data Analyst at Columbia Shipmanagement, I've developed automated
                processes that reduced manual labor by 40% and increased data accuracy by 50%.
              </p>
              <p>
                With a Master's degree in Mathematics and experience in predictive modeling, I'm dedicated to
                transforming complex data into actionable business intelligence.
              </p>
            </div>
          </motion.div>

          <motion.div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4" variants={containerVariants}>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-[#0B0C10]/80 border border-[#1F8EF1]/20 rounded-lg p-6 flex flex-col items-center text-center shadow-lg"
            >
              <Database className="h-10 w-10 text-[#1F8EF1] mb-4" />
              <h3 className="font-medium text-lg mb-2 font-heading">Data Analysis</h3>
              <p className="text-sm text-[#EDEDED]/70">
                Transforming raw data into meaningful insights through cleaning, processing, and visualization.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-[#0B0C10]/80 border border-[#1F8EF1]/20 rounded-lg p-6 flex flex-col items-center text-center shadow-lg"
            >
              <BrainCircuit className="h-10 w-10 text-[#1F8EF1] mb-4" />
              <h3 className="font-medium text-lg mb-2 font-heading">Machine Learning</h3>
              <p className="text-sm text-[#EDEDED]/70">
                Building predictive models using regression, classification, and other ML techniques.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-[#0B0C10]/80 border border-[#1F8EF1]/20 rounded-lg p-6 flex flex-col items-center text-center shadow-lg"
            >
              <BarChart3 className="h-10 w-10 text-[#1F8EF1] mb-4" />
              <h3 className="font-medium text-lg mb-2 font-heading">Data Visualization</h3>
              <p className="text-sm text-[#EDEDED]/70">
                Creating interactive dashboards and reports with Power BI and Python libraries.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-[#0B0C10]/80 border border-[#1F8EF1]/20 rounded-lg p-6 flex flex-col items-center text-center shadow-lg"
            >
              <BookOpen className="h-10 w-10 text-[#1F8EF1] mb-4" />
              <h3 className="font-medium text-lg mb-2 font-heading">Statistical Analysis</h3>
              <p className="text-sm text-[#EDEDED]/70">
                Applying statistical methods to extract meaningful patterns and trends from data.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
