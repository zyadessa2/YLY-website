import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import logoYLY from '../../images/YLY 1_White .webp'
import logoMins from '../../images/Minis White.webp'
const Navbar = () => {
  return <>
  <nav className={`${style.header} bg-dark navbar navbar-expand-lg z-1`}>
  <div className="container-fluid">
    <Link className={`${style.logo} navbar-brand`} to={'/'}>
      <img className='w-100' src={logoYLY} alt='logo'/>
      <img className='w-100' src={logoMins} alt='logo'/>
    </Link>

    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`${style.newNav}  align-items-center  navbar-nav m-auto mb-2 mb-lg-0 `}>
        <li className="nav-item">
          <Link title='tst' className="nav-link " to={'about'}>About</Link>
        </li>
        <li className="nav-item">
          <Link title='tst' className="nav-link " to={'ourGoals'}>Our Goals</Link>
        </li>
        <li className="nav-item">
          <Link title='tst' className="nav-link " to={'news'}>News</Link>
        </li>
        <li className="nav-item">
          <Link title='tst' className="nav-link " to={'board'}>Board</Link>
        </li>
        <li className="nav-item">
          <Link title='tst' className="nav-link " to={'governments'}>Governments</Link>
        </li>
      </ul>
      
      <ul className={`${style.social}  align-items-center navbar-nav ms-auto mb-2 mb-lg-0`}>
                <li className='pe-3'><a className="nav-link " title='tst' href="#"><i className="fab fa-facebook-f fs-5"></i></a></li>
                <li className='pe-3'><a className="nav-link " title='tst' href="#"><i className="fa-brands fa-instagram fs-5"></i></a></li>
                <li className='pe-3'><a className="nav-link " title='tst' href="#"><i className="fa-brands fa-tiktok fs-5"></i></a></li>
                <li className='pe-3 '><a className="nav-link " title='tst' href="#"><i className="fa-brands fa-linkedin fs-5"></i></a></li>
                <li className='pe-3 '><Link className="nav-link " to={'login'} title='tst' href="#"><span>login</span></Link></li>
                <li className='pe-3 '><Link className="nav-link " to={'signup'} title='tst' href="#"><span>sign up</span></Link></li>
      </ul> 

    </div>
  </div>
</nav>
  </>
}

export default Navbar
