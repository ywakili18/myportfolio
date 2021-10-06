import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav class="flex justify-between  p-10 text-xs sm:text-2xl ">
        <div>
          <NavLink
            className="p-2 sm:p-2 rounded-2xl text-blue-300 border-2"
            to="/"
          >
            یوسف
          </NavLink>
        </div>
        <NavLink
          className=" 
        hover:text-blue-500 
        transition-all"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className=" 
        hover:text-blue-500 
        transition-all"
          to="/Projects"
        >
          Projects
        </NavLink>
        <NavLink
          className=" 
        hover:text-blue-500 
        transition-all"
          to="/About"
        >
          About
        </NavLink>
        <NavLink
          className=" 
        text-blue-500 underline
        hover:text-purple-500 
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
