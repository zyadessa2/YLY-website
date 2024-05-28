import React ,{ useEffect, useRef, useState } from 'react'
import style from './Hero.module.css'
import belo from '../../images/character.webp'
import img from '../../images/20230308_085330.webp'

const Hero = () => {

  return <>
    <div class={style.carousel}>
        <div class={style.list}>
            <div class={style.item}>
                <img src={img}/>
                <div class={style.content}>
                    <div class={style.author}>Welcome To</div>
                    <div class={style.title}>YLY</div>
                    <div class={style.topic}>FAMILY</div>
                    <div class={style.des}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione 
                    </div>
                </div>
            </div>
        </div>
        <div class={style.thumbnail}>
            <div class={style.item}>
                <img src={img}/>
                <div class={style.content}>
                    <div class={style.title}>
                        Name Slider
                    </div>
                    <div class={style.description}>
                        Description
                    </div>
                </div>
            </div>
            <div class={style.item}>
                <img src={img}/>
                <div class={style.content}>
                    <div class={style.title}>
                        Name Slider
                    </div>
                    <div class={style.description}>
                        Description
                    </div>
                </div>
            </div>
            <div class={style.item}>
                <img src={img}/>
                <div class={style.content}>
                    <div class={style.title}>
                        Name Slider
                    </div>
                    <div class={style.description}>
                        Description
                    </div>
                </div>
            </div>
            
        </div>

        <div class={style.time}></div>
    </div>
  {/* <div class={`${style.landing} hero`} >
          <div class={`${style.container} container`}>
            
              <div class={`${style.text}`}>
                  <h1>welcome to YLY family</h1>
                  <p>Lorem ipsum dolor sit amet consectetur,
                    alias quia dolores labore odit aliquam sed temporibus modi vel commodi?</p>
              </div>

              <div class={`${style.image} `}>
                  <img src={img}lo" />
              </div>
          </div>
          <a href="#about" class={style.goDown}>
              <i class="fas fa-angle-double-down fa-2x"></i>
          </a>
      </div> */}
  </>
}

export default Hero
