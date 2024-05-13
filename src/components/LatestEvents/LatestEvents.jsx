import React from 'react'
import img from '../../images/20221005_110951.jpg'
import AnimatedText from '../AnimatedText'
import { motion } from "framer-motion";
import style from './LatestEvents.module.css'

const LatestEvents = () => {
  return <>
  <div class={`${style.events} container`} id="events">
        <motion.h2  initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="Latest Events" ClassName={`${style.titleAbout} mb-4 mt-4  text-white`} /></motion.h2>
          <div class={style.container}>
            <div className="row">
                <div className="col-md-8">
                    <div class={style.info}>
                        <div class={style.time}>
                            <motion.div initial={{y:-60 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1}} class={style.unit}>
                            <span>15</span>
                            <span className='text-light'>Days</span>
                            </motion.div>
                            <motion.div initial={{y:-60 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.2}} class={style.unit}>
                            <span>08</span>
                            <span className='text-light'>Hours</span>
                            </motion.div>
                            <motion.div initial={{y:-60 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.4}} class={style.unit}>
                            <span>45</span>
                            <span className='text-light'>Minutes</span>
                            </motion.div>
                            <motion.div initial={{y:-60 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.6}} class={style.unit}>
                            <span>55</span>
                            <span className='text-light'>Seconds</span>
                            </motion.div>
                        </div>
                        <h2 class={style.title}>Tech Masters Event 2021</h2>
                        <p class={style.description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero tenetur doloremque iusto ut adipisci quam
                            ratione aliquam excepturi nulla in harum, veritatis porro
                        </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <img src={img} alt="" />
                </div>
            </div>

            <motion.div initial={{ scale :.6,opacity:0}} whileInView={{scale:1, opacity:1  }} transition={{duration:1.5}} class={style.subscribe}>
              <form action="">
                <input type="email" placeholder="Enter Your Email" />
                <input type="submit" value="Subscribe" />
              </form>
            </motion.div>
          </div>
        </div>
  </>
}

export default LatestEvents
