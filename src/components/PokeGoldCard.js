import React, { useState } from 'react'
import pokemini from '../images/pokemini.gif'
import Buttons from './Buttons'
const PokeGoldCard = () => {
  return (
    // Main container
    <div
      class="transition 
    duration-300 ease-in-out
    transform hover:-translate-y-1 
    hover:scale-90 bg-gray-800 mt-40
    rounded-3xl"
    >
      {/* Main card container */}
      <div class="flex-col justify-center mt-5 shadow-inner">
        {/* Pokemon-Gold mini container */}
        <div class="w-full h-full">
          {/* Pokemon Description */}
          <div class="text-center break-all">
            {/* Title */}
            <p
              class="
                text-3xl sm:text-4xl md:text-5xl lg:text-5xl 
                text-transparent bg-clip-text 
                bg-gradient-to-br from-red-600 to-yellow-600"
            >
              Pokemon Gold Mini
            </p>
            {/* Button Component */}
            <Buttons />
            {/* Description */}
            <p
              class="
                  text-base sm:text-lg md:text-xl break-normal 
                  text-yellow-600
                  mt-5 italic "
            >
              Pokemon Gold Mini is an HTML, CSS, and Javascript game hosted on
              Heroku. This Pokemon inspired game lets you choose between two
              Pokemon to battle and determine a winner!
            </p>
          </div>
        </div>
        {/* gif showcasing work container */}
        <div class="flex justify-center rounded-3xl object-contain">
          <img class="mt-2 rounded-3xl" src={pokemini} />
        </div>
      </div>
    </div>
  )
}

export default PokeGoldCard
