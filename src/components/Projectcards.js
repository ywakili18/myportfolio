import PokeGoldCard from './PokeGoldCard'
import DvlprCard from './DvlprCard'
import TrakflowCard from './TrakflowCard'
import React from 'react'
import { motion } from 'framer-motion'
const Projectcards = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      class="sm:flex md:flex"
    >
      <TrakflowCard />
      <DvlprCard />
      <PokeGoldCard />
    </motion.div>
  )
}

export default Projectcards
