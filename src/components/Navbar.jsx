import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className='relative z-10' >
      <div>
        <h1 className='font-bold text-3xl mt-10 ml-2 md:ml-32 md:text-5xl'>Shoes</h1>
      </div>
      <div className='relative left-[90%]'>
      <GiHamburgerMenu className='  font-bold text-2xl -mt-8 md:hidden' />
        <ul className='hidden md:flex md:gap-5 md:-mt-14 md:-ml-[30rem] md:text-xl '>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
