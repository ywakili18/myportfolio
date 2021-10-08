import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import yousof_w from '../images/yousof_w.pdf'
const ContactCard = () => {
  return (
    <div class="mt-36 border bg-gray-700 w-1/2 py-10 mx-auto ">
      <div class="mt-10">
        <p class="text-blue-50 text-center text-2xl md:text-3xl">
          Let Me Build Your New{' '}
          <span
            class="
                text-transparent bg-clip-text 
                bg-gradient-to-t from-blue-200 to-blue-600"
          >
            Idea
          </span>
        </p>
        <p class="text-blue-100 text-center text-xs md:text-xl break-normal mt-10">
          Feel free to reach out to me via LinkedIn, GitHub, or Email me for any
          of your hiring or business needs.
        </p>
      </div>

      <div class="mt-10 mb-10 flex justify-center">
        {/* Social media links icons */}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/youseffect/"
        >
          <button
            class="text-blue-100 
          text-4xl sm:text-6xl 
              hover:text-green-500 
              focus:ring  transition-all  "
          >
            <AiFillLinkedin />
          </button>
        </a>
        <a rel="noreferrer" target="_blank" href="https://github.com/ywakili18">
          <button
            class="text-blue-100 
              text-4xl sm:text-6xl 
              hover:text-green-500 
              focus:ring  transition-all  "
          >
            <AiFillGithub />
          </button>
        </a>
      </div>

      {/* email container */}
      <a
        rel="noreferrer"
        target="_blank"
        href="mailto:ywakili18@gmail.com?subject=Reaching out to connect!"
        class="text-green-600 justify-center flex text-2xl mt-4"
      >
        <button
          class="text-green-50 
          text-lg sm:text-xl 
              hover:text-green-500 
              focus:ring  transition-all underline "
        >
          ywakili18@gmail.com
        </button>
      </a>
      <a
        href={yousof_w}
        class="text-green-600 justify-center flex text-2xl mt-4"
        download
      >
        {' '}
        <button
          class="text-green-50 
          text-lg sm:text-xl
          hover:text-green-500 
          focus:ring  transition-all underline"
        >
          Click here to view my resume
        </button>
      </a>
    </div>
  )
}

export default ContactCard
