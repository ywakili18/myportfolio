import React from 'react'
import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodeDotJs,
  SiReact,
  SiPostgresql,
  SiPython,
  SiFlask
} from 'react-icons/si'

const Skills = () => {
  return (
    <div class="text-center sm:flex justify-evenly p-10 bg-gray-800">
      {/* Skills icon container */}
      <div class="p-10">
        <p class="text-2xl sm:text-4xl">Front-End Techonologies</p>
        <div class="flex justify-center text-2xl sm:text-5xl mt-5">
          <SiHtml5 className="text-yellow-500" />
          <SiCss3 className="text-blue-500" />
          <SiTailwindcss className="text-blue-400" />
          <SiJavascript className="text-yellow-400" />
          <SiReact className="text-blue-300" />
        </div>
      </div>
      <div class="p-10">
        <p class="text-2xl sm:text-4xl">Back-End Techonologies</p>
        <div class="text-green-50 flex justify-center  text-2xl sm:text-5xl mt-5">
          <SiNodeDotJs className="text-green-400" />
          <SiPostgresql className="text-blue-500" />
          <SiPython className="text-blue-300" />
          <SiFlask className="text-red-300" />
        </div>
      </div>
    </div>
  )
}

export default Skills
