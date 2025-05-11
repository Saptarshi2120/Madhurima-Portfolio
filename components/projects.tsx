"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Car Price Prediction Model",
    description: "Regression with Python; R² score: 0.879",
    image: "/images/Car_Price_Prediction.png",
    tags: ["Python", "Scikit-learn", "Pandas", "Regression"],
    github: "https://github.com/madhurima-dutta/Car_Price_Predictor",
    demo: "https://github.com/madhurima-dutta/Car_Price_Predictor",
  },
  {
    id: 2,
    title: "Stock Risk Simulation",
    description: "Monte Carlo forecasting for tech stocks",
    image: "/images/stock_price.png",
    tags: ["Python", "NumPy", "Matplotlib", "Finance"],
    github: "https://github.com/madhurima-dutta/Stock_Market_Analysis_and_Prediction",
    demo: "https://github.com/madhurima-dutta/Stock_Market_Analysis_and_Prediction",
  },
  {
    id: 3,
    title: "Black-Scholes Pricing Tool",
    description: "Real-time European options calculator",
    image: "/images/black_scholes.png",
    tags: ["Python", "Finance", "Mathematics", "Options"],
    github: "https://github.com/madhurima-dutta/Option_Pricing_Model",
    demo: "https://github.com/madhurima-dutta/Option_Pricing_Model",
  },
  {
    id: 4,
    title: "Inventory Management System",
    description: "PostgreSQL system with user-level access & sales insights",
    image: "/images/inventory.png",
    tags: ["SQL", "PostgreSQL", "Database", "Analytics"],
    github: "https://github.com/madhurima-dutta/Inventory-Management-System",
    demo: "https://github.com/madhurima-dutta/Inventory-Management-System",
  },
  {
    id: 5,
    title: "Customer Segmentation Analysis",
    description: "K-means clustering for targeted marketing",
    image: "/images/kmeans.png",
    tags: ["Python", "Clustering", "Marketing", "Visualization"],
    github: "https://github.com/madhurima-dutta/Machine-Learning",
    demo: "https://github.com/madhurima-dutta/Machine-Learning",
  },
  {
    id: 6,
    title: "Sales Forecasting Dashboard",
    description: "Power BI dashboard with predictive analytics",
    image: "/images/power_bi.png",
    tags: ["Power BI", "Forecasting", "DAX", "Business Intelligence"],
    github: "https://github.com/madhurima-dutta/Power_BI",
    demo: "https://github.com/madhurima-dutta/Power_BI",
  },
]

const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  // Show only 3 projects initially
  const displayedProjects = showAll ? projects : projects.slice(0, 3)

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
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-heading">Projects</h2>
          <p className="text-[#EDEDED]/80 mx-auto max-w-2xl">
            A collection of my data analysis and machine learning projects, showcasing my skills and expertise.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="h-full bg-[#0B0C10]/80 border border-primary/20 rounded-lg overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <div className="relative overflow-hidden h-48">
                    <div className="w-full h-full">
                      <Image
                        src={project.image || "/placeholder.svg?height=300&width=500"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out rounded-t-lg"
                        style={{
                          transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-[#EDEDED]/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-primary/20 text-xs text-primary py-1 px-2 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-lighter transition-colors duration-200"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-lighter transition-colors duration-200"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-primary text-background py-2 px-6 rounded-full hover:bg-primary-lighter transition-colors duration-200"
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
