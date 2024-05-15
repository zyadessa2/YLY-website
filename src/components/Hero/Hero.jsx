import React from 'react'
import Slider from 'react-slick'
import style from './Hero.module.css'
import belo from '../../images/character.webp'

const Hero = () => {
  return <>

  <div class={style.landing} >
          <div class={`${style.container} container`}>
            
              <div class={`${style.text}`}>
                  <h1>welcome to YLY family</h1>
                  <p>Lorem ipsum dolor sit amet consectetur,
                    alias quia dolores labore odit aliquam sed temporibus modi vel commodi?</p>
              </div>

              <div class={`${style.image} `}>
                  <img src={belo} alt="" />
              </div>
          </div>
          <a href="#about" class={style.goDown}>
              <i class="fas fa-angle-double-down fa-2x"></i>
          </a>
      </div>

  </>
}

export default Hero
