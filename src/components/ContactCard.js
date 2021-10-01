import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
const ContactCard = () => {
  return (
    <div class="rounded-3xl mt-40 bg-gray-800 py-10">
      <div class="mt-20">
        <p class="text-green-50 text-center text-4xl md:text-6xl">
          Let Me Build Your New{' '}
          <span
            class="
                text-transparent bg-clip-text 
                bg-gradient-to-t from-green-200 to-green-600"
          >
            Idea
          </span>
        </p>
        <p class="text-green-50 text-center text-xl md:text-2xl break-normal mt-10">
          You can reach out to me on LinkedIn, GitHub, or Email me for any of
          your hiring or business needs.
        </p>
      </div>
      <div class="mt-10 mb-10">
        <h1 class="text-green-600 justify-center flex text-4xl">
          <AiFillLinkedin />
          <AiFillGithub />
        </h1>
        <a
          target="_blank"
          href="mailto:ywakili18@gmail.com?subject=hello world"
          class="text-green-600 justify-center flex text-2xl mt-4"
        >
          ywakili18@gmail.com
        </a>
      </div>
    </div>
  )
}

export default ContactCard
