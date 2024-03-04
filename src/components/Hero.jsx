import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Hero = () => {

    const [view, setView] = useState(false);

    return (
        <section id='home' className='lg:flex mb-10 lg:flex-row md:py-10 lg:gap-4 items-center w-full flex-col lg:justify-between px-14 pb-32 py-8 overflow-x-hidden relative  z-20'>
            
            <motion.div
            className='w-auto'
            initial={{x: -500, opacity: 0}}
            animate={{x:0, opacity:1}}
            transition={{ duration:1, delay:0.2}}>
                <img src="/Ambulance.gif" alt="" className='lg:w-[600px] md:w-[300px] w-[200px] block mx-auto'  />
            </motion.div>
            
            <div className='space-y-4 text-center lg:text-left'>
                <motion.h1 
                initial={{x: 200, opacity: 0}}
                onViewportEnter={()=>{setView(true)}}
                animate={view ? {x:0, opacity:1} : {}}
                transition={{ duration:1, delay:0.3}}
                className='xl:text-4xl lg:text-4xl text-xl  max-w-[750px] py-2 font-bold text-main'>
                    Navigate Smarter, Save Lives: Ambulance Traffic & Hospital Connectivity
                </motion.h1>
                <motion.p 
                initial={{x: 200, opacity: 0}}
                animate={{x:0, opacity:1}}
                transition={{ duration:1, delay:0.2}}
                className='lg:text-xl text-md max-w-[700px] '>Enhancing ambulance response with traffic control and hospital connectivity. Our platform ensures swift navigation and seamless coordination, optimizing emergency care.</motion.p>
            
                <br /> <br /> 
                <motion.a 
                initial={{opacity: 0, x: 250}}
                whileHover={{opacity: 0.7,}}
                animate={{opacity:1,  x:0}}
                transition={{ duration:1}}
                href="#" className='mt-8 px-8 py-2 bg-main rounded-[50px] text-white  hover:opacity-70 transition-all duration-300'>
                    Get Started
                </motion.a>
            </div>

            
        </section>
  )
}

export default Hero