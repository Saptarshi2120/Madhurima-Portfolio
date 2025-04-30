"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send form data to Formspree
      const response = await fetch("https://formspree.io/f/xblodozv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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
    <div className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-heading">Contact Me</h2>
          <p className="text-[#EDEDED]/80 mx-auto max-w-2xl">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-[#0B0C10]/80 border-primary/20 focus:border-primary text-[#EDEDED]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-[#0B0C10]/80 border-primary/20 focus:border-primary text-[#EDEDED]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="bg-[#0B0C10]/80 border-primary/20 focus:border-primary text-[#EDEDED]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                  className="bg-[#0B0C10]/80 border-primary/20 focus:border-primary text-[#EDEDED]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-background"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {submitStatus === "success" && (
                <div className="p-3 bg-green-500/20 border border-green-500 rounded-md text-green-400 text-sm">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-3 bg-red-500/20 border border-red-500 rounded-md text-red-400 text-sm">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-[#0B0C10]/80 border border-primary/20 rounded-lg p-6 space-y-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium font-heading">Email</h3>
                  <a
                    href="mailto:madhurimadutta2001@gmail.com"
                    className="text-[#EDEDED]/80 hover:text-highlight transition-colors"
                  >
                    madhurimadutta2001@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium font-heading">Phone</h3>
                  <a href="tel:+918481016734" className="text-[#EDEDED]/80 hover:text-highlight transition-colors">
                    +91 8481016734
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium font-heading">Location</h3>
                  <p className="text-[#EDEDED]/80">Mumbai, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Github className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium font-heading">GitHub</h3>
                  <a
                    href="https://github.com/madhurima-dutta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#EDEDED]/80 hover:text-highlight transition-colors"
                  >
                    github.com/madhurima-dutta
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Linkedin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium font-heading">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/madhu-rima-dutta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#EDEDED]/80 hover:text-highlight transition-colors"
                  >
                    linkedin.com/in/madhu-rima-dutta
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
