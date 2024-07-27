import React, { useEffect, useRef } from 'react'
import style from './State.module.css'
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const State = () => {

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

  return (
    <div class={style.stats} id="stats">
      <h2>.</h2>
      <div class={style.container}>
        <div class={style.box}>
          <i class="far fa-user fa-2x fa-fw"></i>
          <AnimatedNumbers className={style.number} value={5000 }/>
          {/* <span class={style.number}>300</span> */}
          <span class={style.text}>Clients</span>
        </div>
        <div class={style.box}>
          <i class="fas fa-code fa-2x fa-fw"></i>
          <AnimatedNumbers className={style.number} value={5000 }/>
          <span class={style.text}>Projects</span>
        </div>
        <div class={style.box}>
          <i class="fas fa-globe-asia fa-2x fa-fw"></i>
          <AnimatedNumbers className={style.number} value={5000 }/>
          <span class={style.text}>Countries</span>
        </div>
        <div class={style.box}>
          <i class="far fa-money-bill-alt fa-2x fa-fw"></i>
          <AnimatedNumbers className={style.number} value={5000 }/>
          <span class={style.text}>Money</span>
        </div>
      </div>
    </div>
  )
}

export default State
