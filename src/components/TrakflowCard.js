import React from 'react'
import Trakflow from '../images/Trakflow.gif'
import TrakflowSocialLinks from './TrakflowSocialLinks'
const TrakflowCard = () => {
  return (
    // Main container
    <div
      class="transition 
      duration-300 ease-in-out
      transform hover:-translate-y-1 
      hover:scale-90 shadow-2xl flex 
       sm:w-3/5 md:w-1/2 lg:p-20 bg-white bg-opacity-10 "
    >
      {/* Main card container */}
      <div class=" justify-center ">
        {/* Dvlpr mini container */}
        <div class=" ">
          {/* Dvlpr Description */}
          <div class="text-center break-all">
            {/* Title */}
            <p
              class="
                text-2xl sm:text-3xl md:text-4xl lg:text-4xl 
                text-transparent bg-clip-text 
                bg-gradient-to-br from-blue-500 via-indigo-200 to-pink-800 p-2"
            >
              Trakflow
            </p>
            {/* Description */}
            <p
              class="
                  text-sm sm:text-lg md:text-base break-normal 
                  text-blue-300 
                  mt-5 italic"
            >
              Trakflow is a PERN stack bug tracker application. Features JWT
              authentication, creating new tickets/bugs that are tracked in a
              current "flow". Users are able to create new tickets, add
              comments, update and delete tickets.
            </p>
            {/* Button Component */}
            <TrakflowSocialLinks />
          </div>
        </div>
        {/* gif showcasing work container */}
        <div class="flex justify-center">
          <img class="mt-2 h-60 " src={Trakflow} />
        </div>
      </div>
    </div>
  )
}

export default TrakflowCard
