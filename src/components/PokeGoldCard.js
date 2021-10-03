import React from 'react'
import pokemini from '../images/pokemini.gif'
import PokeCardSocialLinks from './PokeCardSocialLinks'
const PokeGoldCard = () => {
  return (
    // Main container
    <div
      class="transition 
    duration-300 ease-in-out
    transform hover:-translate-y-1 
    hover:scale-90  flex  
     sm:w-3/5 md:w-1/2 shadow-2xl lg:p-20 "
    >
      {/* Main card container */}
      <div class="flex-col justify-center mt-10 ">
        {/* Pokemon-Gold mini container */}
        <div class=" ">
          {/* Pokemon Description */}
          <div class="text-center break-all">
            {/* Title */}
            <p
              class="
                text-2xl sm:text-3xl md:text-4xl lg:text-4xl 
                text-transparent bg-clip-text 
                bg-gradient-to-br from-red-600 to-yellow-600"
            >
              Pokemon Gold Mini
            </p>
            {/* Description */}
            <p
              class="
                  text-sm sm:text-lg md:text-base break-normal 
                  text-yellow-500
                  mt-5 italic"
            >
              Pokemon Gold Mini is an HTML, CSS, and Javascript game hosted on
              Heroku. This Pokemon inspired game lets you choose between two
              Pokemon to battle and determine a winner!
            </p>
            {/* Button Component */}
            <PokeCardSocialLinks />
          </div>
        </div>
        {/* gif showcasing work container */}
        <div class="flex justify-center">
          <img class="mt-2 h-60 p-2" src={pokemini} />
        </div>
      </div>
    </div>
  )
}

export default PokeGoldCard
