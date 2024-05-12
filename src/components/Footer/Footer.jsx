import React from 'react'
import style from './Footer.module.css';
import img1 from '../../images/YLY 1_White .png'
import img2 from '../../images/20221005_094216.jpg'
import img3 from '../../images/20221005_110951.jpg'
import img4 from '../../images/20230308_085330.jpg'
import img5 from '../../images/20230308_140817.jpg'
import img6 from '../../images/20221005_110951.jpg'
const Footer = () => {

  let currentYear = new Date().getFullYear();

  return <>
    <footer class={style.footer}>
      <div class={style.container}>
        <div class={style.box}>
          <h3>YLY</h3>
          <ul class={style.social}>
            <li>
              <a href="#" class={style.facebook}>
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" class={style.twitter}>
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" class={style.youtube}>
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </li>
          </ul>
          <p class={style.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
          </p>
        </div>
        <div class={style.box}>
          <ul class={style.links}>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Goals</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Board</a></li>
            <li><a href="#">Governments</a></li>
          </ul>
        </div>
        <div class={`${style.box} mt-4`}>
          {/* <div class={style.line}>
            <i class="fas fa-map-marker-alt fa-fw"></i>
            <div class={style.info}>Egypt, Giza, Inside The Sphinx, Room Number 220</div>
          </div> */}
          <div class={style.line}>
            <i class="fa-solid fa-envelope"></i>
            <div class={style.info}>yly@gmail.com</div>
          </div>
          <div class={style.line}>
            <i class="fas fa-phone-volume fa-fw"></i>
            <div class={style.info}>
              <span>+20123456789</span>
              <span>+20198765432</span>
            </div>
          </div>
        </div>
        <div class={style.footerGallery}>
          <img decoding="async" src={img5} alt="" />
          <img decoding="async" src={img2} alt="" />
          <img decoding="async" src={img3} alt="" />
          <img decoding="async" src={img6} alt="" />
          <img decoding="async" src={img5} alt="" />
          <img decoding="async" src={img6} alt="" />
        </div>
      </div>
      <p class={style.copyright}>copyright&copy; <span>{currentYear}</span></p>
    </footer>
</>
}

export default Footer
