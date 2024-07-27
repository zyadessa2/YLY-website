import React ,{ useEffect, useRef, useState } from 'react'
import style from './Hero.module.css'
import belo from '../../images/character.webp'
import img from '../../images/20230308_085330.webp'

const Hero = () => {

  return <>
    <div class={style.carousel}>
        <div class={style.list}>
            <div class={style.item}>
                {/* <img src={img}/> */}
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
        {/* <div class={style.thumbnail}>
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
            
        </div> */}
        <div class={style.time}></div>
    </div>
  </>
}

export default Hero
