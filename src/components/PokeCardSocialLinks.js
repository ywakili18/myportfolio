import React from 'react'
import { SiGithub } from 'react-icons/si'
const PokeCardSocialLinks = () => {
  return (
    <div>
      {/* Primary buttons container */}
      <div class="mt-5 mb-5">
        {/* Links */}
        <div class="inline-flex">
          <a
            rel="noreferrer"
            target="_blank"
            class=""
            href="http://yousofwpokemongoldmini.surge.sh/"
          >
            <button
              class=" 
              text-yellow-500
              text-l sm:text-xl ml-20
              hover:text-red-800 
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
            href="https://github.com/ywakili18/Pokemon-Mini"
          >
            <button
              class=" 
              w-24
              text-3xl sm:text-4xl
              ml-8
              text-yellow-500
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
export default PokeCardSocialLinks
