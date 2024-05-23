import React, { useEffect, useRef } from 'react'
import AnimatedText from '../AnimatedText'
import { useInView, useMotionValue, useScroll, useSpring } from 'framer-motion';
import style from './About.module.css'
import { motion } from "framer-motion";
import belo from '../../images/character.webp'
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
            <h3 className='capitalize font-bold text-2xl text-light sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-light/75 xs:text-sm'>
                {time} | {place}
            </span >
            <p className='font-medium w-full text-light/50 md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}


const About = () => {
    
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

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref ,
            offset: ["start end" , "center start"]
        }
    )

    return (
        <div className='pt-4 about overflow-x-hidden'>
        <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="About Us" ClassName={`${style.titleAbout} mb-4 mt-4 ylyOrange `} /></motion.h2>

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
                <img className='w-100 belo' src={belo} alt="belo"  />
            </div>
        </div>
        
        


        <div className='container col-md-10 py-4 d-flex  m-auto alighn-items-center justify-content-between xl:text-center md:order-3'>
                    <div className='align-items-center d-flex flex-column items-end justify-center'>
                        <span className=' inline-block stateNumbers fw-bold numAbout  '>
                            <AnimatedNumbers className='numAbout' value={5000 }/>+
                        </span>
                        <h2 className='text-center fs-5 text-white '>Volunteers</h2>
                    </div>

                    <div className='align-items-center d-flex flex-column items-end justify-center'>
                        <span className='inline-block stateNumbers fw-bold numAbout '>
                        <AnimatedNumbers className='numAbout' value={200}/>+
                        </span>
                        <h2 className='text-center fs-5 text-white '>Events</h2>
                    </div>

                    <div className='align-items-center d-flex flex-column items-end justify-center'>
                        <span className='inline-block stateNumbers fw-bold numAbout '>
                        <AnimatedNumbers className='numAbout' value={6}/>+
                        </span>
                        <h2 className='text-center fs-5 text-white  '>Season</h2>
                    </div>
                    
        </div>

        </div>
     )

}

export default About

// return <>
// <div className="about container d-flex w-full flex-column align-items-center justify-content-center" id="about">
//         <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="About Us" ClassName={`${style.titleAbout} mb-4 mt-4  text-white`} /></motion.h2>
//         <div className='row w-full '>
//             <div className="col-md-12">

//                 <div className="row">
//                     <div className='col-md-8 d-flex flex-col align-items-start justify-content-start   '>
                        
//                         <div class={style.info}>
//                             <motion.div viewport={{once:true}} initial={{x:-100 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:1.5}} class={style.box}>
//                                 {/* <img decoding="async" src="images/avataaars (2).png" alt="" /> */}
//                                 <div class={style.text}>
//                                 <h3>Business Analysis</h3>
//                                 <p>
//                                     Lorem, ipsum dolor sit amet consectetur 
//                                     adipisicing elit. Enim nesciunt obcaecati 
//                                     quisquam quis laborum
//                                     recusandae debitis vel
//                                     Lorem, ipsum dolor sit amet consectetur 
//                                 </p>
//                                 </div>
//                             </motion.div>
//                             <motion.div viewport={{once:true}} initial={{x:-100 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:1.7}} class={style.box}>
//                                 {/* <img decoding="async" src="images/avataaars (2).png" alt="" /> */}
//                                 <div class={style.text}>
//                                 <h3>Business Analysis</h3>
//                                 <p>
//                                     Lorem, ipsum dolor sit amet consectetur 
//                                     adipisicing elit. Enim nesciunt obcaecati 
//                                     quisquam quis laborum
//                                     recusandae debitis vel
//                                     Lorem, ipsum dolor sit amet consectetur 
//                                 </p>
//                                 </div>
//                             </motion.div>
//                             <motion.div viewport={{once:true}} initial={{x:-100 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:1.9}} class={style.box}>
//                                 {/* <img decoding="async" src="images/avataaars (2).png" alt="" /> */}
//                                 <div class={style.text}>
//                                 <h3>Business Analysis</h3>
//                                 <p>
//                                     Lorem, ipsum dolor sit amet consectetur 
//                                     adipisicing elit. Enim nesciunt obcaecati 
//                                     quisquam quis laborum
//                                     recusandae debitis vel
//                                     Lorem, ipsum dolor sit amet consectetur 
//                                 </p>
//                                 </div>
//                             </motion.div>
                            
//                         </div>
//                     </div>
//                     <div className="col-md-4 d-flex align-items-center justify-content-center">
//                         <img className='w-100 belo' src={belo} alt="belo"  />
//                     </div>
//                 </div>
                
                

//             </div>
//         </div>
// </div>
// </>