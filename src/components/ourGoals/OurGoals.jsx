import React, { useEffect, useState } from 'react'
import AnimatedText from '../AnimatedText'
import { motion } from 'framer-motion'
import style from './OurGoals.module.css'
import Slider from 'react-slick'

const OurGoals = () => {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
      });
      const [Flag, setFlag] = useState(null)
    
      useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        if(windowSize.width > '430'){
          setFlag(true)
        }else{
          setFlag(false)
        }
        console.log(windowSize.width);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return <>
  <section class={style.goals} id="goals">
  <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="Our Goals" ClassName={`${style.titleAbout} mb-5 text-white`} /></motion.h2>
    {Flag? <>
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
    </> : <>
    <div class={`${style.goalsContainer} container m-auto row d-flex justify-content-between align-items-center`}>
    <Slider {...settings} >
            <motion.div  initial={{scale:.8 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}} class={`${style.goalsBox} col-md-3 `}>
                <i class="fa-solid fa-globe"></i>
                <p>Forming groups of young volunteers from all governorates and universities</p>
            </motion.div>
            <motion.div  initial={{scale:.8 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}} class={`${style.goalsBox} col-md-3 `}>
                <i class="fa-solid fa-handshake-angle"></i>
                <p>Integrate youth more effectively into community activities</p>
            </motion.div>
            <motion.div  initial={{scale:.8 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}} class={`${style.goalsBox} col-md-3 `}>
                <i class="fa-regular fa-calendar-check"></i>
                <p>Providing an opportunity for young people to participate in the Ministry’s activities</p>
            </motion.div>
    </Slider>
    </div>
        
    </>}
    
        
    </section>
  </>
}

export default OurGoals
