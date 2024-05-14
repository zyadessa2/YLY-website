import React from 'react'
import AnimatedText from '../AnimatedText'
import { motion } from 'framer-motion'
import style from './OurGoals.module.css'

const OurGoals = () => {
  return (
    <div className='vh-100 w-100 '>
        <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="Our Goals" ClassName={`${style.titleAbout} mb-4 mt-4  text-white`} /></motion.h2>
    </div>
  )
}

export default OurGoals
