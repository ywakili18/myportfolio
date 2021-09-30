import React from 'react'
import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodeDotJs,
  SiGithub,
  SiReact,
  SiPostgresql
} from 'react-icons/si'

const Skills = () => {
  return (
    <div class="text-center mt-5 rounded-3xl">
      <p class="text-2xl sm:text-3xl md:text-4xl text-green-50 ">
        Technologies
      </p>
      {/* skills icon container */}
      <div class="text-green-50 text-3xl sm:text-4xl mt-5 rounded-2xl">
        <div class="flex justify-evenly ">
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiNodeDotJs />
        </div>
        <div class="flex justify-evenly mt-5">
          <SiGithub />
          <SiReact />
          <SiPostgresql />
          <SiTailwindcss />
        </div>
      </div>
    </div>
  )
}

export default Skills
