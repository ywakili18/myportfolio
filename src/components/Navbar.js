import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav class="flex justify-between p-5 text-xl sm:text-3xl">
      <NavLink
        className="transition 
        duration-300 ease-in-out
        transform hover:-translate-y-1 
        hover:scale-110 border-green-600 border-8 p-1 
        rounded-full"
        to="/"
      >
        yw
      </NavLink>
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
        text-indigo-500 underline
        hover:text-purple-600 
        transition-all"
        to="/Contact"
      >
        Contact Me
      </NavLink>
    </nav>
  )
}
export default Navbar
