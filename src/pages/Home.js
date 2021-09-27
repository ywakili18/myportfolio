import React from 'react'
import Typewriter from 'typewriter-effect/'

export const Home = () => {
  return (
    <div class="flex justify-center">
      {/* primary container */}
      <div class="text-4xl sm:text-6xl md:text-6xl mt-40 sm:mt-60">
        {/* Name description container */}
        <div class="border">
          <p>
            Hello, world! I'm
            <mark class="bg-transparent text-yellow-600"> Yousof</mark>
          </p>
        </div>

        {/* Typing animation container */}
        <div class="border opacity-70 mt-10 sm:mt-40">
          <Typewriter
            options={{
              strings: ['Front-End Engineer', 'Deep Thinker', 'Problem Solver'],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 20
            }}
          />
        </div>
      </div>
    </div>
  )
}
