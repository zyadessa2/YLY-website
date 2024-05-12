import React from 'react'
import Slider from 'react-slick'
import style from './Hero.module.css'
import slide1 from '../../images/20221005_094216.jpg'
import slide2 from '../../images/20221005_110951.jpg'
import slide3 from '../../images/20230308_085330.jpg'

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return <>
    {/* <div className="row gx-0 mb-3">
        <div className={`${style.filter}col-md-12`}>
        <Slider {...settings} className='slider'>
            <img src={slide3} className={`${style.img} w-100`} alt="" />
            <img src={slide3} className={`${style.img} w-100`} alt="" />
            <img src={slide3} className={`${style.img} w-100`} alt="" />
        </Slider>
        </div>
    </div> */}

    <div className="hero vh-100 w-100 bg-black">

    </div>

  </>
}

export default Hero
