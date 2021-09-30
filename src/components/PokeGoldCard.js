import React, { useState } from 'react'
import pokemini from '../images/pokemini.gif'
import Buttons from './Buttons'
const PokeGoldCard = () => {
  return (
    // Main container
    <div>
      {/* Main card container */}
      <div class="flex-col justify-center ">
        {/* Pokemon-Gold mini container */}
        <div class="w-full h-full">
          {/* Pokemon Description */}
          <div class="text-center">
            {/* Title */}
            <p
              class="
                text-3xl sm:text-4xl md:text-5xl lg:text-5xl 
                text-transparent bg-clip-text 
                bg-gradient-to-br from-red-600 to-yellow-600 mt-10 "
            >
              Pokemon Gold Mini
            </p>
            {/* Button Component */}
            <Buttons />
            {/* Description */}
            <p
              class="
                  text-base sm:text-lg md:text-xl break-normal 
                  text-transparent bg-clip-text bg-gradient-to-br from-white to-yellow-300 
                  mt-5 italic "
            >
              Pokemon Gold Mini is an HTML, CSS, and Javascript game hosted on
              Heroku. This Pokemon inspired game lets you choose between two
              Pokemon to battle and determine a winner!
            </p>
          </div>
        </div>
        {/* gif showcasing work container */}
        <div class="flex justify-center ">
          <img class="rounded-3xl mt-5" src={pokemini} />
        </div>
      </div>
    </div>
  )
}

export default PokeGoldCard
