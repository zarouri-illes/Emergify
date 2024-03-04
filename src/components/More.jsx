import { motion } from 'framer-motion'
import { useState } from 'react';

const More = () => {
    const [isview, setisView] = useState(false);
    return (
        <section id='more' className='md:flex px-14 items-center justify-between mt-32'>
            <motion.div 
            initial={{x: -200, opacity:0}}
            transition={{duration:0.8}}
            onViewportEnter={() => setisView(true)}
            animate={isview ? {x:0, opacity:1}: {}}
            className='text-main space-y-4 max-w-[750px]'>
                <h1 className='text-3xl font-bold'>Streamlining Emergency Response: Advanced Ambulance Services</h1>
                <p>Emergify  integrates cutting-edge solutions to enhance every aspect of emergency response. With our advanced traffic management system, ambulances can navigate congested roads efficiently, leveraging real-time data and priority clearance mechanisms facilitated by our direct communication channels with local authorities. Moreover, our platform facilitates seamless connectivity with hospitals, enabling ambulance crews to transmit vital patient information and ETA to emergency departments in advance, ensuring prompt preparation and streamlined admission upon arrival. Through automated alerts and transparent communication features, we ensure all stakeholders are kept informed throughout the process, fostering effective collaboration and maximizing the effectiveness of emergency care.</p>
            </motion.div>

            <motion.img
            initial={{x: 200, opacity:0}}
            transition={{duration:0.8}}
            onViewportEnter={() => setisView(true)}
            animate={isview ? {x:0, opacity:1}: {}}
            src="/think.gif" alt="thinking" className='w-[400px] mt-8 md:mt-0' />
        </section>
    )
}

export default More