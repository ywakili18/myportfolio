import React from 'react'
import Skills from '../components/Skills'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ y: 100 }}
      exit={{ y: -600, opacity: 0 }}
      transition={{ delay: 0.1 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <Skills />
        <p class="text-lg p-5 bg-gray-700 text-green-100">
          My name is Yousof Wakili. I am a full-stack software engineer with an
          emphasis on the front-end side. I enjoy creating dynamic, responsive,
          and intuitive web applications. My past experiences working in the
          telecom industry consisted of wearing many different hats--primarily
          leading the business in surpassing quotas/goals.
        </p>
        <p class="text-lg  p-5 bg-gray-700 text-green-100">
          My passion for software development stemmed from working in telecom
          and a personal hobby of building computers. When utilizing various
          Customer Relation Management (CRM) tools and presenting software
          functionality/features to clients, it ultimately led me to take my
          first programming course in 2016. As of today what was once a small
          hobby became my career.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default About
