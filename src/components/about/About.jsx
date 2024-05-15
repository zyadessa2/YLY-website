import React, { useEffect, useRef } from 'react'
import AnimatedText from '../AnimatedText'
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import style from './About.module.css'
import { motion } from "framer-motion";
import Slider from 'react-slick'

import belo from '../../images/character.webp'


const About = () => {

    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


    const AnimatedNumbers = ({value}) =>{
        const ref = useRef(null);
        const motionValue = useMotionValue(0);
        const springValue = useSpring(motionValue , {duration:6000});
        const isInView = useInView(ref , {once: true});
    
        useEffect(() => {
          if(isInView){
            motionValue.set(value);
          }
        }, [isInView , value , motionValue])
        
        useEffect(() =>{
            springValue.on("change" , (latest)=>{
                if(ref.current && latest.toFixed(0) <= value){
                    ref.current.textContent = latest.toFixed(0)
                }
            })
        } , [springValue , value])
    
    
        return <span ref={ref}></span>
    }

  return <>
    <div className="about container d-flex w-full flex-column align-items-center justify-content-center" id="about">
            <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="About Us" ClassName={`${style.titleAbout} mb-4 mt-4  text-white`} /></motion.h2>
            <div className='row w-full '>
                <div className="col-md-12">

                    <div className="row">
                        <div className='col-md-8 d-flex flex-col align-items-start justify-content-start   '>
                            
                            <div class={style.info}>
                                <motion.div viewport={{once:true}} initial={{x:-100 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:1.5}} class={style.box}>
                                    {/* <img decoding="async" src="images/avataaars (2).png" alt="" /> */}
                                    <div class={style.text}>
                                    <h3>Business Analysis</h3>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur 
                                        adipisicing elit. Enim nesciunt obcaecati 
                                        quisquam quis laborum
                                        recusandae debitis vel
                                        Lorem, ipsum dolor sit amet consectetur 
                                    </p>
                                    </div>
                                </motion.div>
                                <motion.div viewport={{once:true}} initial={{x:-100 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:1.7}} class={style.box}>
                                    {/* <img decoding="async" src="images/avataaars (2).png" alt="" /> */}
                                    <div class={style.text}>
                                    <h3>Business Analysis</h3>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur 
                                        adipisicing elit. Enim nesciunt obcaecati 
                                        quisquam quis laborum
                                        recusandae debitis vel
                                        Lorem, ipsum dolor sit amet consectetur 
                                    </p>
                                    </div>
                                </motion.div>
                                <motion.div viewport={{once:true}} initial={{x:-100 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:1.9}} class={style.box}>
                                    {/* <img decoding="async" src="images/avataaars (2).png" alt="" /> */}
                                    <div class={style.text}>
                                    <h3>Business Analysis</h3>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur 
                                        adipisicing elit. Enim nesciunt obcaecati 
                                        quisquam quis laborum
                                        recusandae debitis vel
                                        Lorem, ipsum dolor sit amet consectetur 
                                    </p>
                                    </div>
                                </motion.div>
                                
                            </div>
                            {/* <p className=' text-center colorAbout'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Aspernatur aperiam distinctio, nulla amet perferendis commodi deleniti cum,
                            tempora voluptate harum accusantium tenetur 
                            laborum facilis nesciunt quos beatae ipsa id fuga?
                            </p> */}
                        </div>

                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <img className='w-100 belo' src={belo} alt="" />
                        </div>
                    </div>
                    
                    <div className='col-md-10 py-4 d-flex flex-col m-auto alighn-items-center justify-content-between xl:text-center md:order-3'>
                        <div className='align-items-center d-flex flex-column items-end justify-center'>
                            <span className=' inline-block stateNumbers fw-bold text-white  '>
                                <AnimatedNumbers value={5000 }/>+
                            </span>
                            <h2 className='text-center fs-5 colorAbout '>Volunteers</h2>
                        </div>

                        <div className='align-items-center d-flex flex-column items-end justify-center'>
                            <span className='inline-block stateNumbers fw-bold text-white '>
                            <AnimatedNumbers value={200}/>+
                            </span>
                            <h2 className='text-center fs-5 colorAbout '>Events</h2>
                        </div>

                        <div className='align-items-center d-flex flex-column items-end justify-center'>
                            <span className='inline-block stateNumbers fw-bold text-white '>
                            <AnimatedNumbers value={6}/>+
                            </span>
                            <h2 className='text-center fs-5 colorAbout  '>Season</h2>
                        </div>
                        
                    </div>

                </div>
            </div>
    </div>
    </>
}

export default About
