import React, { useState } from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiGithub } from 'react-icons/si'
const Buttons = () => {
  const [showText, setShowText] = useState(false)
  return (
    <div>
      {/* Primary buttons container */}
      <div class="">
        {/* Links */}
        <div class="inline-flex">
          <a class="" href="http://yousofwpokemongoldmini.surge.sh/">
            <button
              class=" 
              text-yellow-500
              text-xl sm:text-3xl ml-20
              hover:text-red-600 
              focus:ring  transition-all m-2 sm:mt-3
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
              text-4xl
              ml-12
              text-yellow-500
              hover:text-red-700
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
