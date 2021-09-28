import React from 'react'
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiNodejs,
  DiGithubBadge,
  DiReact,
  DiPostgresql
} from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
const Skills = () => {
  return (
    <div class="border">
      <p>skills</p>
      {/* skills icon container */}
      <div>
        <p>
          <DiHtml5 />
        </p>
        <p>
          <DiCss3 />
        </p>
        <p>
          <DiJavascript1 />
        </p>
        <p>
          <DiNodejs />
        </p>
        <p>
          <DiGithubBadge />
        </p>
        <p>
          <DiReact />
        </p>
        <p>
          <DiPostgresql />
        </p>
        <p>
          <SiTailwindcss />
        </p>
      </div>
    </div>
  )
}

export default Skills
