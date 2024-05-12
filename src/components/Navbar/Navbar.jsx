import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
const Navbar = () => {
  return <>
        <div class={`${style.header} `} id="header">
        <div class={style.container}>
            <a href="#" class={style.logo}>YLY</a>
              <ul class={style.mainNav}>
                  <li><a href="">About</a></li>
                  <li><a href="">Our Goals</a></li>
                  <li><a href="">News</a></li>
                  <li><a href="">Board</a></li>
                  <li><a href="">Governments</a></li>
              </ul>
              <ul className={style.social}>
                <li className='pe-3'><a href="#"><i class="fab fa-facebook-f fs-5"></i></a></li>
                <li className='pe-3'><a href="#"><i class="fa-brands fa-instagram fs-5"></i></a></li>
                <li className='pe-3'><a href="#"><i class="fa-brands fa-tiktok fs-5"></i></a></li>
              </ul>            
        </div>
    </div>
    {/* <nav class="navbar navbar-expand-lg bg-transperent navBack">
  <div class="container">
    <a class={style.logo} href="#">YLY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav m-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Our Goals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Board</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Governments</a>
        </li>
      </ul>

      <ul className="navbar-nav ms-auto">
      <li className={`nav-item d-flex fs-4 ${style.sochover} align-items-center`}>
          <a className={style.sochover} href="" target='_blank'><i className='fab fa-facebook mx-2'></i></a>
          <a className={style.sochover} href="" target='_blank'><i class="fa-brands fa-tiktok"></i></a>
          <a className={style.sochover} href="" target='_blank'><i className='fab fa-instagram mx-2'></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
  </>
}

export default Navbar
