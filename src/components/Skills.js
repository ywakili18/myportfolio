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
      <p class="text-xl sm:text-2xl md:text-3xl text-green-50 underline">
        Skill Set
      </p>
      {/* skills icon container */}
      <div class="text-green-50 text-xl sm:text-2xl mt-5 rounded-2xl">
        <div class="flex justify-evenly">
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
