import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import logoYLY from '../../images/YLY 1_White .webp'
import logoMins from '../../images/Minis White.webp'
import { AuthContext } from '../../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const Navbar = () => {
  const {currentUser , flagAdmin , setFlagAdmin} = useContext(AuthContext)

  const [flag, setFlag] = useState(false)
  useEffect(() => {
    if(currentUser){
      setFlag(true)
    }else{
      setFlag(false)
    }
  }, [currentUser])
  
  // const [flagAdmin, setFlagAdmin] = useState(false)
  // useEffect(() => {
  //   if(flag){
  //     if(currentUser.uid == "NPdjSX0D1IP3zO761jVlacEmu0z2"){
  //       setFlagAdmin(true)
  //     }else{
  //       setFlagAdmin(false)
  //     }
  //   }
  // }, [currentUser])
  function handleSignOut(){
    setFlagAdmin(false)
  }
  return <>
  <nav className={`${style.header}  navbar navbar-expand-lg z-1`}>
  <div className="container-fluid">
    <Link className={`${style.logo} navbar-brand`} to={'/'}>
      <img className='w-100' src={logoYLY} alt='logo'/>
      <img className='w-100' src={logoMins} alt='logo'/>
    </Link>

    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`${style.newNav}  align-items-center  navbar-nav m-auto ps-5 mb-2 mb-lg-0 `}>
        <li className="nav-item">
          <Link title='tst' className="nav-link " to={'/'}>Home</Link>
        </li>
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
        {flagAdmin && flag ?<li className="nav-item">
          <Link title='tst' className="nav-link " to={'users'}>Users</Link>
        </li>:<></>}
      </ul>
      
      <ul className={`${style.social}  align-items-center navbar-nav ms-auto mb-2 mb-lg-0`}>
                <li className='pe-3'><a className="nav-link " title='tst' href="#"><i className="fab fa-facebook-f fs-5"></i></a></li>
                <li className='pe-3'><a className="nav-link " title='tst' href="#"><i className="fa-brands fa-instagram fs-5"></i></a></li>
                <li className='pe-3'><a className="nav-link " title='tst' href="#"><i className="fa-brands fa-tiktok fs-5"></i></a></li>
                <li className='pe-3 '><a className="nav-link " title='tst' href="#"><i className="fa-brands fa-linkedin fs-5"></i></a></li>
                {flag? <> 
                  <li className='pe-3 '><Link className="nav-link " to={'login'} title='tst' onClick={() => { signOut(auth); handleSignOut();}} ><span>log out</span></Link></li>
                  {/* <li className='pe-3 '><span className="nav-link text-danger fw-bold">Hello {currentUser.displayName}</span></li> */}
                </> : <>
                <li className='pe-3 '><Link className="nav-link " to={'login'} title='tst'><span>login</span></Link></li>
                <li className='pe-3 '><Link className="nav-link " to={'signup'} title='tst'><span>signup</span></Link></li>
                </>}
      </ul> 

    </div>
  </div>
</nav>
  </>
}

export default Navbar
//fe8f01
//1034a8