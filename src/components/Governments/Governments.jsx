import { motion } from 'framer-motion'
import React from 'react'
import AnimatedText from '../AnimatedText'
import style from './Governments.module.css'

const Governments = () => {
  return <>
    <div className='vh-100 w-100 bg-dark'>
      <motion.h2  initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="Governments" ClassName={`${style.titleAbout} mb-4 mt-4  text-white`} /></motion.h2>
    </div>
  </>
}

export default Governments
