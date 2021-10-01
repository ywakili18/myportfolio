import React, { useState } from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiGithub } from 'react-icons/si'
const Buttons = () => {
  const [showText, setShowText] = useState(false)
  return (
    <div>
      {/* Primary buttons container */}
      <div class="mt-5 mb-5">
        {/* Links */}
        <div class="inline-flex">
          <a class="" href="http://yousofwpokemongoldmini.surge.sh/">
            <button
              class=" 
              text-yellow-600
              text-xl sm:text-2xl ml-20
              hover:text-red-800 
              focus:ring  transition-all m-2 sm:mt-3 underline
              "
            >
              Live Site
            </button>
          </a>
          <a
            class=" inline-flex text-center"
            href="https://github.com/ywakili18/Pokemon-Mini"
          >
            <button
              class=" 
              w-24
              text-3xl sm:text-4xl
              ml-8
              text-yellow-600
              hover:text-red-800
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
export default Buttons
