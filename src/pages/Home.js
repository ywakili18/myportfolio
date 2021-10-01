import React from 'react'
import Typewriter from 'typewriter-effect/'

export const Home = () => {
  return (
    <div class="flex justify-center text-center">
      {/* primary container */}
      <div class="mt-60 sm:mt-60">
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
      </div>
      {/* end primary  */}
    </div>
  )
}
