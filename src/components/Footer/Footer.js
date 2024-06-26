import React from 'react'
import style from './Footer.module.css';
import img1 from '../../images/20221005_110951.webp'
import img2 from '../../images/20221005_110951.webp'
import img3 from '../../images/20221005_110951.webp'
import img4 from '../../images/20221005_110951.webp'
import img5 from '../../images/20221005_110951.webp'
import img6 from '../../images/20221005_110951.webp'

const Footer = () => {

  let currentYear = new Date().getFullYear();

  return <>
    <footer class={style.footer}>
      <div class={style.container}>
        <div class={style.box}>
          <h3>YLY</h3>
          <ul class={style.social}>
            <li>
              <a href="https://www.facebook.com/Ylyministryy" class={style.facebook}>
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ylyministry/" class={style.instagram}>
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@ylyministry?is_from_webapp=1&sender_device=pc" class={style.tiktok}>
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/ylyministry/" class={style.linkedIn}>
                <i class="fa-brands fa-linkedin fs-5"></i>
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
            <div class={style.info}>Yly.ministryofyouthandsports@gmail.com</div>
          </div>
          <div class={style.line}>
            <i class="fas fa-phone-volume fa-fw"></i>
            <div class={style.info}>
              <span>+20123456789</span>
              <span>+20198765432</span>
            </div>
          </div>
        </div>
        <div class={`${style.footerGallery} `}>
          <img decoding="async"  src={img5} alt="yly" />
          <img decoding="async"  src={img2} alt="yly" />
          <img decoding="async"  src={img3} alt="yly" />
          <img decoding="async"  src={img6} alt="yly" />
          <img decoding="async"  src={img5} alt="yly" />
          <img decoding="async"  src={img6} alt="yly" />
        </div>
      </div>
      <p class={style.copyright}>copyright&copy; <span>{currentYear}</span></p>
    </footer>
</>
}

export default Footer
