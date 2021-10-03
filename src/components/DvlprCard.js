import React from 'react'
import dvlpr from '../images/dvlpr.gif'
import DvlprSocialLinks from './DvlprSocialLinks'
const DvlprCard = () => {
  return (
    // Main container
    <div
      class="transition 
    duration-300 ease-in-out
    transform hover:-translate-y-1 
    hover:scale-90 bg-gray-800 flex border-2
     sm:w-3/5 md:w-1/2 lg:p-20 "
    >
      {/* Main card container */}
      <div class="flex-col justify-center mt-10 shadow-inner">
        {/* Pokemon-Gold mini container */}
        <div class=" ">
          {/* Pokemon Description */}
          <div class="text-center break-all">
            {/* Title */}
            <p
              class="
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                text-transparent bg-clip-text 
                bg-gradient-to-br from-purple-400 to-pink-800 "
            >
              Dvlpr.
            </p>
            {/* Description */}
            <p
              class="
                  text-sm sm:text-lg md:text-base break-normal 
                  text-purple-400
                  mt-5 italic"
            >
              Dvlpr is an PostgreSQL,Express,React,Node (PERN stack) social
              media clone that is tailored for web developers. It features user
              login authentication and a REST api utlizing Express.js, Node.js
              and Sequelize. The front-end features Tailwindcss as UI library
              and React as Javascript library. Dvlpr is also hosted on heroku.
            </p>
            {/* Button Component */}
            <DvlprSocialLinks />
          </div>
        </div>
        {/* gif showcasing work container */}
        <div class="flex justify-center">
          <img class="mt-2 h-60 " src={dvlpr} />
        </div>
      </div>
    </div>
  )
}

export default DvlprCard
