import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';

const Navbar = () => {
  const[nav,setNav]=useState(false)

  const handler=()=>{
    setNav(!nav)
  }

  return (
    <nav 
    className='w-screen h-[80px] z-10 fixed drop-shadow-lg bg-white'>
      <div className='flex w-full h-full items-center justify-between px-10'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold sm:text-4xl mr-4'>Chatty</h1>
          <ul className='hidden md:flex'>
            <li className='cursor-pointer'><Link to='home' smooth={true} duration={500}>Home</Link></li>
            <li className='cursor-pointer'><Link to='about' smooth={true} duration={500}>About</Link></li>
            <li className='cursor-pointer'><Link to='support' smooth={true} duration={500}>Support</Link></li>
            <li className='cursor-pointer'><Link to='feature' smooth={true} duration={500}>Feature</Link></li>
            <li className='cursor-pointer'><Link to='feedback' smooth={true} duration={500}>Feedback</Link></li>
          </ul>
        </div>

        <div className='hidden md:flex pr-4 font-semibold'>
          <button className='mr-4 bg-transparent text-black hover:bg-transparent'>Sign In</button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>

        <div className='md:hidden'>
          {nav === false ? 
          <div onClick={handler} className='text-2xl'><FiMenu /></div> : 
          <div onClick={handler} className='text-2xl'><IoClose /></div>}
        </div>
      </div>

     {nav? <ul className='w-full bg-white md:hidden absolute px-7'>
            <li className='border-b-2 cursor-pointer border-zinc-300'>
              <Link onClick={handler} to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='border-b-2 cursor-pointer border-zinc-300'>
              <Link onClick={handler} to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='border-b-2 cursor-pointer border-zinc-300'>
              <Link onClick={handler} to='support' smooth={true} duration={500}>Support</Link>
            </li>
            <li className='border-b-2 cursor-pointer border-zinc-300'>
              <Link onClick={handler} to='feature' smooth={true} duration={500}>Feature</Link>
            </li>
            <li className='border-b-2 cursor-pointer border-zinc-300'>
              <Link onClick={handler} to='feedback' smooth={true} duration={500}>Feedback</Link>
            </li>
          <div className='flex flex-col my-4'>
            <button className='text-black font-semibold border-2 py-3 mb-2 px-8 hover:bg-slate-400 hover:text-white hover:border-0 bg-transparent'>Sign In</button>
            <button className='py-3 px-8 hover:font-semibold hover:bg-white hover:text-black hover:border-2'>Sign Up</button>
          </div>
          
      </ul> : null}
      
    </nav>
  )
}

export default Navbar