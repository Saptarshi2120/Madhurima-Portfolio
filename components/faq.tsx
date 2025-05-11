"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What types of data do you usually work with?",
    answer: "I work with both structured and unstructured business data - inventory, customer information, financial time series, and fuel usage with emission statistics.",
  },
  {
    question: "Which tools do you prefer for visualization?",
    answer: "I prefer using Power BI, Excel Pivot Charts, and Python libraries like Matplotlib, Seaborn, and Plotly to create clear, interactive, and insightful visualizations.",
  },
  {
    question: "Are your projects open source?",
    answer: "Yes, most projects are hosted on GitHub with code, notebooks, and instructions and deployment.",
  },
  {
    question: "Are you open to freelance or remote work?",
    answer: "Yes, I'm open to freelance or remote roles aligned with analytics, finance, or research.",
  },
  {
    question: "Do you write technical blogs or tutorials?",
    answer: "I'm planning to add a blog soon to share breakdowns of my projects and insights.",
  },
]

const Faq = () => {
  return (
    <div className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-2 text-center font-heading">FAQ</h2>
        <p className="text-[#EDEDED]/80 mb-10 text-center">
          Answers to frequently asked questions about my work and expertise.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-primary/20">
                <AccordionTrigger className="text-left hover:text-highlight">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-[#EDEDED]/80">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  )
}

export default Faq
