import React from 'react'
import { SiGithub } from 'react-icons/si'
const TrakflowSocialLinks = () => {
  return (
    <div>
      {/* Primary buttons container */}
      <div class="mt-5 mb-5">
        {/* Links */}
        <div class="inline-flex">
          <a
            class=""
            href="https://immense-dawn-73702.herokuapp.com/"
            rel="noreferrer"
            target="_blank"
          >
            <button
              class=" 
              text-blue-100
              text-l sm:text-xl ml-20
              hover:text-pink-600 
              focus:ring  transition-all m-2 sm:mt-3 underline 
              "
            >
              Live Site
            </button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            class=" inline-flex text-center"
            href="https://github.com/ywakili18/trakflow"
          >
            {/* button */}

            <button
              class=" 
              w-24
              text-3xl sm:text-4xl
              ml-8
              text-blue-200
              hover:text-pink-600
              focus:ring  transition-all"
            >
              <SiGithub />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TrakflowSocialLinks
