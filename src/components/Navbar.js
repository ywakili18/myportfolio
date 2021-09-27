import React from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav class="flex justify-between">
      <p class="text-xl sm:text-4xl ">yw</p>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Projects">Projects</NavLink>
      <NavLink to="/Contact">Contact Me</NavLink>
    </nav>
  )
}
export default Navbar
