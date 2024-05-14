import { motion } from 'framer-motion'
import React from 'react'
import AnimatedText from '../AnimatedText'
import style from './News.module.css'
import img from '../../images/20230308_085330.jpg'

const News = () => {
  return <>
    <div class={style.articles} id="articles">
    <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="Articles" ClassName={`${style.titleAbout} mb-4 mt-4  text-white`} /></motion.h2>
      <div class={`${style.container} row d-flex justify-content-center g-3 m-auto align-items-center container`}>
        <motion.div  viewport={{once:true}} initial={{x:-50 , opacity:0}} whileInView={{x:0 , opacity:1  }} transition={{duration:1.4}} class={`${style.box} col-md-3 m-4 `}>
          <img src={img} alt="" />
          <div class={style.content}>
            <h3>Text Title</h3>
            <p>Lorem ipsum dolor, sit amet cipisicing elit. Maxime sapiente repudiandae incidunt cupiditate</p>
          </div>
          <div class={style.info}>
            <a href="#">Read more</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </motion.div>
        <motion.div viewport={{once:true}} initial={{x:-50 , opacity:0}} whileInView={{x:0 , opacity:1  }} transition={{duration:1.4}} class={`${style.box} col-md-3 m-4`}>
          <img src={img} alt="" />
          <div class={style.content}>
            <h3>Text Title</h3>
            <p>Lorem ipsum dolor, sit amet cipisicing elit. Maxime sapiente repudiandae incidunt cupiditate</p>
          </div>
          <div class={style.info}>
            <a href="#">Read more</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </motion.div>
        <motion.div viewport={{once:true}} initial={{x:-50 , opacity:0}} whileInView={{x:0 , opacity:1  }} transition={{duration:1.4}} class={`${style.box} col-md-3 m-4`}>
          <img src={img} alt="" />
          <div class={style.content}>
            <h3>Text Title</h3>
            <p>Lorem ipsum dolor, sit amet cipisicing elit. Maxime sapiente repudiandae incidunt cupiditate</p>
          </div>
          <div class={style.info}>
            <a href="#">Read more</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </motion.div>
        
      </div>
    </div>
  </>
}

export default News
