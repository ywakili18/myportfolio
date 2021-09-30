import React, { useState } from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiGithub } from 'react-icons/si'
const Buttons = () => {
  const [showText, setShowText] = useState(false)
  return (
    <div>
      {/* Primary buttons container */}
      <div>
        {/* Links */}
        <div class="flex justify-evenly">
          <a href="http://yousofwpokemongoldmini.surge.sh/">
            <button
              class=" 
                  bg-yellow-50 
                  py-2 px-2
                  rounded-full
                  text-base sm:text-lg md:text-xl 
                  tracking-wide text-yellow-500 
                  hover:shadow-2xl hover:bg-yellow-200
                  mt-5 transform hover:scale-110 motion-reduce:transform-none"
            >
              Live Site
            </button>
          </a>
          <a href="https://github.com/ywakili18/Pokemon-Mini">
            <button
              class=" 
                  bg-yellow-50 
                  py-2 px-2
                  rounded-full
                  text-2xl  md:text-3xl
                  tracking-wide text-yellow-500 
                  hover:shadow-2xl hover:bg-yellow-200
                  mt-5 transform hover:scale-110 motion-reduce:transform-none"
            >
              <SiGithub />
            </button>
          </a>
        </div>

        {/* button to showcase tech used */}
        <div class="flex justify-center">
          <button
            onClick={() => setShowText(!showText)}
            class="
                    bg-yellow-50 
                    px-3 py-2 
                    text-sm tracking-wide text-yellow-500 
                    rounded-full hover:shadow-2xl hover:bg-yellow-200
                    mt-5 transform hover:scale-110 motion-reduce:transform-none"
          >
            {showText ? 'Hide Technologies used' : 'Show Technologies used'}
          </button>
        </div>
        {showText && (
          <div class="text-3xl text-yellow-500 flex justify-evenly mt-5">
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
          </div>
        )}
      </div>
    </div>
  )
}

export default Buttons
