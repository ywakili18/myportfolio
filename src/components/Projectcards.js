import React from 'react'

const Projectcards = () => {
  return (
    // Main container
    <div>
      {/* Pokemon container */}
      <div class="border">
        <p>Pokemon Mini</p>
        {/* Pokemon Description container */}
        <div>
          <p>
            A pokemon style game utilizing HTML, CSS, and Javscript, deployed on
            Heroku. Pick between pokemon and battle against a computer to
            determine a winner!
          </p>
        </div>
      </div>

      {/* Dvlpr container */}
      <div class="border">
        <p>Dvlpr.</p>
        {/* Pokemon Description container */}
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
