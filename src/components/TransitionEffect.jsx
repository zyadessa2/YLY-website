import { motion } from 'framer-motion'
import React from 'react'

const TransitionEffect = () => {
  return <>
  <motion.div className='position-fixed top-0 bottom-0 right-full w-100 vh-100 z-3 ylyBlueBg'
    initial={{x:"100%" , width:"100%"}}
    animate={{x:"0%" , width:"0%"}}
    exit={{x:["0%" , "100%"] , width:["0%" , "100%"]}}
    transition={{duration:0.8 , ease:"easeInOut"}}
    />
    <motion.div className='position-fixed top-0 bottom-0 right-full w-100 vh-100 z-2 ylyOrangeBg'
    initial={{x:"100%" , width:"100%"}}
    animate={{x:"0%" , width:"0%"}}
    transition={{delay:0.2 , duration:0.8 , ease:"easeInOut"}}
    />
    <motion.div className='position-fixed top-0 bottom-0 right-full w-100 vh-100 z-1 bg-white'
    initial={{x:"100%" , width:"100%"}}
    animate={{x:"0%" , width:"0%"}}
    transition={{delay:0.4 ,duration:0.8 , ease:"easeInOut"}}
    />
  </>
}

export default TransitionEffect
