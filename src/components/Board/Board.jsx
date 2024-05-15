import { motion } from 'framer-motion'
import React from 'react'
import style from './Board.module.css'
import AnimatedText from '../AnimatedText'
import img from '../../images/download.jpg'

const Board = () => {
  return <>
      <div class={style.board} id="board">
      <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="Board" ClassName={`${style.titleAbout} mb-5 mt-5  text-white`} /></motion.h2>
        <div class={style.container}>
            <div class={`${style.cards} row mt-5 justify-content-center aligin-items-center m-auto`}>
                        <motion.div  initial={{scale:.6 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}} className={`${style.sizeTop} col-md-2 col-sm-4`}>
                    <div class={style.card}>
                            <img src={img} alt="" />
                        <div class={style.text}>
                            <h3>Dr/Ashraf sobhy</h3>
                            <span>Minister of Youth </span>
                        </div>
                    </div>
                </motion.div>
                <motion.div  initial={{scale:.6 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}} className={`${style.sizeTop}  col-md-2 col-sm-4`}>
                    <div class={style.card}>
                        <picture>
                            <img src={img} alt="" />
                        </picture>
                        <div class={style.text}>
                            <h3>Dr/Ashraf sobhy</h3>
                            <span>Minister of Youth </span>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div class={`${style.cards} mt-5 row justify-content-center aligin-items-center m-auto`}>
              <motion.div initial={{y:50 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.4}} className={`${style.size} mt-5 col-md-2 col-sm-3`}>
                <div class={style.card}>
                    <picture>
                        <img src={img} alt="" />
                    </picture>
                    <div class={style.text}>
                        <h3>Dr/Ashraf sobhy</h3>
                        <span>Minister of Youth </span>
                    </div>
                </div>
              </motion.div>
              <motion.div initial={{y:50 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.4}} className={`${style.size} mt-5 col-md-2 col-sm-3`}>
                <div class={style.card}>
                    <picture>
                        <img src={img} alt="" />
                    </picture>
                    <div class={style.text}>
                        <h3>Dr/Ashraf sobhy</h3>
                        <span>Minister of Youth</span>
                    </div>
                </div>
              </motion.div>
              <motion.div initial={{y:50 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.4}} className={`${style.size} mt-5 col-md-2 col-sm-3`}>
                <div class={style.card}>
                    <picture>
                        <img src={img} alt="" />
                    </picture>
                    <div class={style.text}>
                        <h3>Dr/Ashraf sobhy</h3>
                        <span>Minister of Youth</span>
                    </div>
                </div>
              </motion.div>
              <motion.div initial={{y:50 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.4}} className={`${style.size} mt-5 col-md-2 col-sm-3`}>
                <div class={style.card}>
                    <picture>
                        <img src={img} alt="" />
                    </picture>
                    <div class={style.text}>
                        <h3>Dr/Ashraf sobhy</h3>
                        <span>Minister of Youth</span>
                    </div>
                </div>
              </motion.div>
              <motion.div initial={{y:50 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.4}} className={`${style.size} mt-5 col-md-2 col-sm-3`}>
                <div class={style.card}>
                    <picture>
                        <img src={img} alt="" />
                    </picture>
                    <div class={style.text}>
                        <h3>Dr/Ashraf sobhy</h3>
                        <span>Minister of Youth</span>
                    </div>
                </div>
              </motion.div>
            </div>
        </div>
    </div>
  </>
}

export default Board
