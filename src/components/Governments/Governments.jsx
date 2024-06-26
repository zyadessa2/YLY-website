import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import AnimatedText from '../AnimatedText'
import style from './Governments.module.css'
import egyMap from '../../images/egypt_map-removebg-preview.png'


const Gov = ({name , x , y}) =>{

  return(
      <motion.div className='position-absolute 
      d-flex align-items-center justify-content-center 
      cursor-pointer rounded-full 
      fw-bold  text-light 
      py-3 px-6 shadow-dark  
        px-3-md bg-transparent-xs
      text-dark-xs  '
  whileHover={{scale:1.05}}
  initial={{x:0 , y:0}}
  whileInView={{x:x , y:y , transition:{duration:1.5}}}
  viewport={{once:true}}
  
  >
      {name}
  </motion.div>
  )
}

const Governments = () => {

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

  return <>
  {/* <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}}  whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="Governments" ClassName={`${style.titleAbout} mb-4 mt-4  text-white`} /></motion.h2> */}
    <div className="gover">
    <div className=" image m-auto w-75 position-relative pt-5 " id="governments">
      <img  className={style.egyMap} src={egyMap} alt="yly" />
    
      <div className='w-full vh-100 potition-absolute d-flex align-items-center justify-content-center rounded-full 
      bg-Light  
      '>
        
        {Flag?<>
        <Gov name="Alexandria" x="-6vw" y="-20vw" />
        <Gov name="Aswan" x="10vw" y="10vw" />
        <Gov name="Asyut" x="20vw" y="15vw" />
        <Gov name="Beheira" x="0vw" y="-10vw" />
        <Gov name="Beni Suef" x="-20vw" y="-18vw" />
        <Gov name="Cairo" x="8vw" y="-18vw" />
        <Gov name="Dakahlia" x="2vw" y="-7vw" />
        <Gov name="Damietta" x="8vw" y="-2vw" />
        <Gov name="Faiyum" x="-25vw" y="2vw" />
        <Gov name="Giza" x="18vw" y="9vw" />
        <Gov name="Ismailia" x="3vw" y="-22vw" />
        </> : <>
        <Gov name="Alexandria" x="-6vw" y="-100vw" />
        <Gov name="Aswan" x="10vw" y="9vw" />
        <Gov name="Asyut" x="20vw" y="-80vw" />
        <Gov name="Beheira" x="0vw" y="-70vw" />
        <Gov name="Beni Suef" x="-20vw" y="-60vw" />
        <Gov name="Cairo" x="8vw" y="-90vw" />
        <Gov name="Dakahlia" x="2vw" y="-40vw" />
        <Gov name="Damietta" x="8vw" y="-30vw" />
        <Gov name="Faiyum" x="-25vw" y="-20vw" />
        <Gov name="Giza" x="10vw" y="-95vw" />
        <Gov name="Ismailia" x="3vw" y="-12vw" />
        </>}
        
        {/* <Gov name="Kafr El Sheikh" x="3vw" y="-20vw" />
        <Gov name="Luxor" x="2vw" y="-13vw" />
        <Gov name="Matrouh" x="5vw" y="-32vw" />
        <Gov name="Minya" x="3vw" y="-54vw" />
        <Gov name="Monufia" x="2vw" y="-34vw" />
        <Gov name="New Valley" x="1vw" y="-31vw" />
        <Gov name="North Sinai" x="4vw" y="-14vw" />
        <Gov name="Port Said" x="-7vw" y="-24vw" />
        <Gov name="Qalyubia" x="-5vw" y="-23vw" />
        <Gov name="Qena" x="-3vw" y="=23vw" />
        <Gov name="Red Sea" x="-1vw" y="23vw" />
        <Gov name="Sharqia" x="-9vw" y="vw" />
        <Gov name="Sohag" x="7vw" y="-20vw" />
        <Gov name="South Sinai" x="-5vw" y="-10vw" />
        <Gov name="Suez" x="3vw" y="-5vw" />
        <Gov name="6th of October" x="1vw" y="-3vw" /> */}
      </div>
    </div>
    </div>
    
  
  </>
}

export default Governments
