import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {

    const [isview, setisView] = useState(false);

    return (
        <section id='services' className='bg-white relative md:pt-[100px] mt-[400px]  lg:mt-[400px] z-[500] px-14'>
            <motion.h2 
            initial={{x: -200, opacity:0}}
            transition={{duration:0.8}}
            onViewportEnter={() => setisView(true)}
            animate={isview ? {x:0, opacity:1}: {}}
            className='text-4xl text-main font-bold'>What do we offer ?</motion.h2>
            <div className='flex mt-10 flex-wrap justify-between gap-2 lg:gap-0'>
                <motion.div
                initial={{x: -200, opacity:0}}
                transition={{duration:1}}
                onViewportEnter={() => setisView(true)}
                animate={isview ? {x:0, opacity:1}: {}}
                
                className='text-center p-8 rounded-[10px] flex-col justify-center border-solid border-2 border-main'>
                    <img src="/police.gif" className='w-[530px]' alt="Police" />
                    <h2 className='max-w-[500px]'>Revolutionizing ambulance response with real-time traffic control. Our platform enables instant communication with authorities, ensuring smooth navigation through congested roads for swift emergency interventions..</h2>
                </motion.div>

                <motion.div 
                initial={{x: 200, opacity:0}}
                transition={{duration:1}}
                onViewportEnter={() => setisView(true)}
                animate={isview ? {x:0, opacity:1}: {}}
                className='text-center p-8 rounded-[10px] flex-col justify-center border-solid border-2 border-main'>
                    <img src="/hospital.gif" className='w-[530px]' alt="Police" />
                    <h2 className='max-w-[500px]'>Optimizing ambulance care with hospital coordination. Our platform enables instant communication between ambulances and medical facilities, ensuring swift patient transfers and efficient emergency response</h2>
                </motion.div>
            </div>
        </section>
    )
}

export default About;