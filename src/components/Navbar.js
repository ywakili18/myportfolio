import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav class="flex justify-between  p-10 text-xs sm:text-2xl ">
        <div>
          <NavLink
            className="p-2 sm:p-2 rounded-2xl text-green-200 border-2"
            to="/"
          >
            y.w
          </NavLink>
        </div>
        <NavLink
          className=" 
        hover:text-green-500 
        transition-all"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className=" 
        hover:text-green-500 
        transition-all"
          to="/About"
        >
          About
        </NavLink>
        <NavLink
          className=" 
        hover:text-green-500 
        transition-all"
          to="/Projects"
        >
          Projects
        </NavLink>
        <NavLink
          className=" 
        text-blue-500 underline
        hover:text-blue-600 
        transition-all"
          to="/Contact"
        >
          Contact Me
        </NavLink>
      </nav>
    </div>
  )
}
export default Navbar
