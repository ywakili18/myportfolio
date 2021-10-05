import React from 'react'
import Projectcards from '../components/Projectcards'
import { motion } from 'framer-motion'
const Projects = () => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ y: 100 }}
      exit={{ y: -600, opacity: 0 }}
      transition={{ delay: 0.1 }}
      class="sm:mt-10"
    >
      <Projectcards />
    </motion.div>
  )
}

export default Projects
