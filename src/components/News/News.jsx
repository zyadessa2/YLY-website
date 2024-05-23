import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import AnimatedText from '../AnimatedText'
import style from './News.module.css'
import Slider from 'react-slick'
import img from '../../images/20230308_085330.webp'

const News = () => {
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
    <div class={`${style.articles} bg-dark`} id="news">
    <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="Articles" ClassName={`${style.titleAbout} mb-4 mt-4  text-white`} /></motion.h2>
      {Flag?<>
        <div class={`${style.container} row d-flex justify-content-center g-3 m-auto align-items-center container`}>
        <motion.div  viewport={{once:true}} initial={{x:-50 , opacity:0}} whileInView={{x:0 , opacity:1  }} transition={{duration:1.4}} class={`${style.box} col-md-3 m-4  `}>
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
        <button className='btn btn-primary w-25 mt-4'>Read More</button>
      </div>
      </> : <>
      <div class={`${style.container} container m-auto row d-flex justify-content-between align-items-center`}>
      <Slider {...settings} >
      <motion.div    class={`${style.box} col-md-12   `}>
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
        <motion.div   class={`${style.box} col-md-3 `}>
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
        <motion.div   class={`${style.box} col-md-3 `}>
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
      </Slider>
      <button className='btn btn-primary w-50 m-auto mt-5'>Read More</button>
      </div>
      </>
      }
      
    </div>
  </>
}

export default News
