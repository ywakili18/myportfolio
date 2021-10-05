import React from 'react'
import ContactCard from '../components/ContactCard'
import { motion } from 'framer-motion'
const Contact = () => {
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
        <ContactCard />
      </motion.div>
    </motion.div>
  )
}

export default Contact
