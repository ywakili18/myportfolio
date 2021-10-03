import React from 'react'
import { SiGithub } from 'react-icons/si'
const DvlprSocialLinks = () => {
  return (
    <div>
      {/* Primary buttons container */}
      <div class="mt-5 mb-5">
        {/* Links */}
        <div class="inline-flex">
          <a
            class=""
            href="https://dvlpr-app.herokuapp.com/"
            rel="noreferrer"
            target="_blank"
          >
            <button
              class=" 
              text-purple-400
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
            href="https://github.com/ywakili18/Dvlpr"
          >
            <button
              class=" 
              w-24
              text-3xl sm:text-4xl
              ml-8
              text-purple-400
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

export default DvlprSocialLinks
