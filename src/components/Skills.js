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
    <div class="border text-center">
      <p class="text-5xl text-green-500">Technologies</p>
      {/* skills icon container */}
      <div class="text-green-500 text-5xl mt-60 sm:mt-20 flex justify-around">
        <SiHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiNodeDotJs />
        <SiGithub />
        <SiReact />
        <SiPostgresql />
        <SiTailwindcss />
      </div>
    </div>
  )
}

export default Skills
