import React from 'react'
import Typewriter from 'typewriter-effect/'

export const Home = () => {
  return (
    <div class="text-center">
      {/* primary container */}

      <div class="text-6xl ">
        {/* Name description container */}
        <div class="border">
          <p class="text-8xl">
            Hello, world! I'm
            <mark class="bg-transparent text-yellow-600"> Yousof</mark>
          </p>
        </div>

        {/* Typing animation container */}
        <div class="border">
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
