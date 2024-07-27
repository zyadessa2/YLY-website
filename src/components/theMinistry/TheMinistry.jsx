import React, { useEffect, useRef } from 'react'
import AnimatedText from '../AnimatedText'
import { useInView, useMotionValue, useScroll, useSpring } from 'framer-motion';
import style from './TheMinistry.module.css'
import { motion } from "framer-motion";
import belo from '../../images/character.webp'
import img from '../../images/download.webp'
import LiIcon from '../LiIcon';


const Details = ({type , time , place , info }) =>{

    const ref = useRef(null)

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />

        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5 , type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl text-dark sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 xs:text-sm'>
                {time} | {place}
            </span >
            <p className='font-medium w-full text-dark/50 md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}


const TheMinistry = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref ,
            offset: ["start end" , "center start"]
        }
    )

    return (
        <div className='py-4 about bg-light overflow-x-hidden'>
        <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="About Ministry" ClassName={`${style.titleAbout} mb-4 mt-4 text-dark `} /></motion.h2>

        <div className="row container mx-auto mt-5">
            <div className="col-md-8">
            <div ref={ref} className='w-[100%] mx-auto relative lg:w-[100%] md:w-full'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='dark:bg-light absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details
                type="Lorem ipsum dolor sit amet " 
                time="2022-2025"
                place="Lorem ipsum dolor sit amet"
                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence.Lorem ipsum dolor sit amet"  
                
                />
                
                <Details
                type="Lorem ipsum dolor sit amet " 
                time="2022-2025"
                place="Lorem ipsum dolor sit amet"
                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet"  
                />
                
            </ul>
        </div>
            </div>

            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <img className='w-100 ' src={img} alt="belo"  />
            </div>
        </div>
        <div className="row container mx-auto mt-5">
            <div className="col-md-8">
            <div ref={ref} className='w-[100%] mx-auto relative lg:w-[100%] md:w-full'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='dark:bg-light absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details
                type="Lorem ipsum dolor sit amet " 
                time="2022-2025"
                place="Lorem ipsum dolor sit amet"
                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence.Lorem ipsum dolor sit amet"  
                
                />
                
                <Details
                type="Lorem ipsum dolor sit amet " 
                time="2022-2025"
                place="Lorem ipsum dolor sit amet"
                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet"  
                />
                
            </ul>
        </div>
            </div>

            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <img className='w-100 ' src={belo} alt="belo"  />
            </div>
        </div>
        
        </div>
    )
}

export default TheMinistry
