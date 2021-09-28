import React from 'react'
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
