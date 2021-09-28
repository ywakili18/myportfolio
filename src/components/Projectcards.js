import React from 'react'

const Projectcards = () => {
  return (
    // Main container
    <div>
      {/* Main card container */}
      <div class="flex justify-between">
        {/* Pokemon container */}
        <div class="rounded-3xl border-8 w-1/2 bg-green-500 mr-10">
          {/* Pokemon Description container */}
          <div class="">
            <p>Pokemon Mini</p>
            <p>
              A pokemon style game utilizing HTML, CSS, and Javscript, deployed
              on Heroku. Pick between pokemon and battle against a computer to
              determine a winner!
            </p>
          </div>
        </div>
        {/* image container */}
        <div class="w-1/2">
          <img
            class="rounded-3xl border-8 bg-green-500 mr-10"
            src="https://bit.ly/3EZQshi"
          />
        </div>
      </div>

      {/* Dvlpr container */}
      <div class="border">
        <p>Dvlpr.</p>
        {/* Dvlpr Description container */}
        <div>
          <p>
            Postgresql, Expressjs, React, and Node.js social media site. Chat,
            share, and network with other developers. Deployed on Heroku and
            styled with Tailwindcss UI library.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projectcards
