import React, { useRef, useState } from 'react'
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import { Hero } from './const';


const MultiParallax = () => {

    const [view, setView] = useState(false);

    const ref = useRef(null);
    const  { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
    const sect = useTransform(scrollYProgress, [0,1], ["0%", "200%"])
    return (
        <section ref={ref} className='w-full h-full overflow-hidden'>
            
            <motion.div
            style={{y: sect}}
            className='lg:mb-32'
            >
                <Hero/>
            </motion.div>

            <motion.div className='absolute top-[700px]  z-30 bg-transparent'>
            <div>
             <img src="/City.png" alt="" className='w-[2000px] bg-transparent' />
            </div>

            <div className='overflow-hidden md:mt-[-100px] w-full bg-[#23447c]' >
                <motion.img
            initial={{x: 0}}
            animate={view ? {x:900}:{}}
            transition={{duration: 4 }}
            onViewportEnter={()=> setView(true)}
             src="/g.gif" alt="Ambulance" />
            </div>
            </motion.div>
        </section>
    )
}

export default MultiParallax