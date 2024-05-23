import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
const Navbar = () => {
  return <>
  <nav class={`${style.header} bg-dark navbar navbar-expand-lg z-1`}>
  <div class="container-fluid">
    <Link class={`${style.logo} navbar-brand`} to={'/'}>YLY</Link>

    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class={`${style.newNav}  align-items-center  navbar-nav m-auto mb-2 mb-lg-0 `}>
        <li class="nav-item">
          <Link title='tst' class="nav-link " to={'about'}>About</Link>
        </li>
        <li class="nav-item">
          <Link title='tst' class="nav-link " to={'ourGoals'}>Our Goals</Link>
        </li>
        <li class="nav-item">
          <Link title='tst' class="nav-link " to={'news'}>News</Link>
        </li>
        <li class="nav-item">
          <Link title='tst' class="nav-link " to={'board'}>Board</Link>
        </li>
        <li class="nav-item">
          <Link title='tst' class="nav-link " to={'governments'}>Governments</Link>
        </li>
      </ul>
      
      <ul className={`${style.social}  align-items-center navbar-nav ms-auto mb-2 mb-lg-0`}>
                <li className='pe-3'><a class="nav-link " title='tst' href="#"><i class="fab fa-facebook-f fs-5"></i></a></li>
                <li className='pe-3'><a class="nav-link " title='tst' href="#"><i class="fa-brands fa-instagram fs-5"></i></a></li>
                <li className='pe-3'><a class="nav-link " title='tst' href="#"><i class="fa-brands fa-tiktok fs-5"></i></a></li>
                <li className='pe-3 '><a class="nav-link " title='tst' href="#"><i class="fa-brands fa-linkedin fs-5"></i></a></li>
                <li className='pe-3 '><Link class="nav-link " to={'login'} title='tst' href="#"><span>login</span></Link></li>
                <li className='pe-3 '><Link class="nav-link " to={'signup'} title='tst' href="#"><span>sign up</span></Link></li>
      </ul> 

    </div>
  </div>
</nav>
  </>
}

export default Navbar
