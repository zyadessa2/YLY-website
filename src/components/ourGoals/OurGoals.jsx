import React from 'react'
import AnimatedText from '../AnimatedText'
import { motion } from 'framer-motion'
import style from './OurGoals.module.css'
import img from '../../images/20221005_110951.jpg'

const OurGoals = () => {
  return <>
  <section class={style.goals} id="goals">
    <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="Our Goals" ClassName={`${style.titleAbout} mb-5 text-white`} /></motion.h2>
        <div class={`${style.goalsContainer} container m-auto row d-flex justify-content-between align-items-center`}>
            <motion.div viewport={{once:true}} initial={{scale:.7 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}} class={`${style.goalsBox} col-md-3 `}>
                <i class="fa-solid fa-globe"></i>
                <p>Forming groups of young volunteers from all governorates and universities</p>
            </motion.div>
            <motion.div viewport={{once:true}} initial={{scale:.7 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}} class={`${style.goalsBox} col-md-3 `}>
                <i class="fa-solid fa-handshake-angle"></i>
                <p>Integrate youth more effectively into community activities</p>
            </motion.div>
            <motion.div viewport={{once:true}} initial={{scale:.7 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}} class={`${style.goalsBox} col-md-3 `}>
                <i class="fa-regular fa-calendar-check"></i>
                <p>Providing an opportunity for young people to participate in the Ministry’s activities</p>
            </motion.div>
        </div>
    </section>
  </>
}

export default OurGoals
