import React from 'react'
import { nav } from '../const';
import { motion } from 'framer-motion';
import { HiBars3BottomRight, HiBars4 } from "react-icons/hi2";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [navbar,setNav] = useState(false);
    
    const toggleOpen = () => {
        setNav(!navbar)
    }

  return (
    <motion.nav 
    initial={{y: -200, opacity: 0}}
    animate={{y:0, opacity: 1}}
    transition={{duration:1}}
    className='lg:flex flex items-center justify-between px-4 lg:px-8 bg-white'>
        <div>
            <img src="/logo.png" alt="" className=' w-[100px]'/>
        </div>

        <ul className='md:flex items-center hidden gap-8'>
            {
                nav.links.map((item) => (
                    <li><a href={item.goTo} className='text-lg font-semibold transition-all duration-300 hover:text-main'>{item.title}</a></li>
                ))
            }



        </ul>

        <div className='md:flex gap-4 hidden'>
            {
                nav.buttons.map((item) => (
                    <Link to={item.goTo} className='hover:opacity-70 transition-all duration-300'>
                        <button className={`md:px-6 md:py-4  px-4 text-sm ${item.color} bg-main rounded-[50px] text-white`}>
                            {item.title}
                        </button>
                    </Link>
                ))
            }
        </div>

        
        

        <div className={`md:hidden absolute left-0 z-50  w-full px-8 transition-all duration-500 ${navbar ? 'top-[110px]' : 'top-[-410px]'} `}>
                        <ul className="rounded-[10px] bg-white z-40 py-8 border list-none flex flex-col max-w-full gap-6 justify-center text-center items-center">
                            {
                                nav.links.map((item) => (
                                    <li>
                                        <a href={item.goTo} className="font-bold text-secondary">{item.title}</a>
                                    </li>
                                ))
                            }

{
                nav.buttons.map((item) => (
                    <Link to={item.goTo} className='hover:opacity-70 transition-all duration-300'>
                        <button className={`px-6 py-2 ${item.color} bg-main rounded-[50px] text-white`}>
                            {item.title}
                        </button>
                    </Link>
                ))
            }
                        </ul>
                    </div>


            { navbar ? <ImCross onClick={() => toggleOpen()}  className='md:hidden text-2xl'/>  : <HiBars4  onClick={() => toggleOpen()} className='md:hidden text-3xl' />}

    </motion.nav>
  )
}

export default Navbar