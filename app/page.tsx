"use client"

import { useRef } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Skills from "@/components/skills"
import Faq from "@/components/faq"
import Contact from "@/components/contact"
<<<<<<< HEAD
=======
import ChatBot from "@/components/ChatBot"
>>>>>>> 1c817cc5d90674d7f8d64f927442a0a07b139eda
import { useInView } from "framer-motion"

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const techStackRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 })
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 })
  const techStackInView = useInView(techStackRef, { once: true, amount: 0.3 })
  const faqInView = useInView(faqRef, { once: true, amount: 0.3 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 })

  return (
    <div className="flex flex-col">
      <section id="home">
        <Hero />
      </section>

      <section
        id="about"
        ref={aboutRef}
        className={`transition-opacity duration-1000 ease-in-out ${aboutInView ? "opacity-100" : "opacity-0"}`}
      >
        <About />
      </section>

      <section
        id="projects"
        ref={projectsRef}
        className={`transition-opacity duration-1000 ease-in-out ${projectsInView ? "opacity-100" : "opacity-0"}`}
      >
        <Projects />
      </section>

      <section
        id="tech-stack"
        ref={techStackRef}
        className={`transition-opacity duration-1000 ease-in-out ${techStackInView ? "opacity-100" : "opacity-0"}`}
      >
        <TechStack />
      </section>

      <section
        id="skills"
        ref={skillsRef}
        className={`transition-opacity duration-1000 ease-in-out ${skillsInView ? "opacity-100" : "opacity-0"}`}
      >
        <Skills />
      </section>

      <section
        id="faq"
        ref={faqRef}
        className={`transition-opacity duration-1000 ease-in-out ${faqInView ? "opacity-100" : "opacity-0"}`}
      >
        <Faq />
      </section>

      <section
        id="contact"
        ref={contactRef}
        className={`transition-opacity duration-1000 ease-in-out ${contactInView ? "opacity-100" : "opacity-0"}`}
      >
        <Contact />
      </section>
    </div>
  )
}
