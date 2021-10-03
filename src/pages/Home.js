import { motion } from 'framer-motion'
import React from 'react'
import Typewriter from 'typewriter-effect/'

export const Home = () => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ y: 100 }}
      exit={{ y: -1000 }}
      transition={{ delay: 0.05 }}
      class="flex justify-center text-center"
    >
      {/* primary container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        class="mt-36 sm:mt-40"
      >
        {/* Name description container */}
        {/* default text is 3xl for mobile  */}
        <div class="text-6xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl">
          <p>
            {/* used mark to change specific text color */}
            Hello, World!{' '}
          </p>
          I'm
          <mark class="bg-transparent text-green-400 "> Yousof</mark>
        </div>

        {/* Typing animation container */}
        <div
          class=" 
        opacity-70 mt-10 sm:mt-40
        text-2xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl
        "
        >
          <Typewriter
            options={{
              strings: ['Front-End Engineer', 'Deep Thinker', 'Problem Solver'],
              autoStart: true,
              loop: true,
              delay: 20,
              deleteSpeed: 15
            }}
          />
        </div>
      </motion.div>
      {/* end primary  */}
    </motion.div>
  )
}
