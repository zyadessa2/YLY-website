import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import logoYLY from '../../images/logo 1nav.webp'
import logoMins from '../../images/logo 1nav.webp'
import { AuthContext } from '../../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { motion } from 'framer-motion'


const CustomLink = ({to , title , className=""}) => {


  return(
    <Link to={to} className={`${className} relative group`}>
      {title}

      {/* <span className={`absolute left-0 group-hover:w-full 
      transition-[width] ease duration-300
      -bottom-0.5  h-[1px] inline-block dark:bg-light bg-dark `}>&nbsp;</span> */}
    </Link>
  )
}

const CustomMobileLink = ({to , title , className="" , toggle , signOutClick}) => {
  const {currentUser , flagAdmin , setFlagAdmin} = useContext(AuthContext)

  const handelClick = ()=>{
    toggle()
    
  }
  
  const handleSignOut =()=>{
    signOutClick()
  }


  return(
    <Link to={to} className={`${className} relative group text-light dark:text-dark my-2 text-decoration-none `} onClick={() => {handelClick() ; handleSignOut();}}>
      {title}

      {/* <span className={`absolute left-0 group-hover:w-full 
      transition-[width] ease duration-300
      -bottom-0.5  h-[1px] inline-block dark:bg-dark bg-light `}>&nbsp;</span> */}
    </Link>
  )
}



const Navbar = () => {
  const {currentUser , flagAdmin , setFlagAdmin} = useContext(AuthContext)


  const [flag, setFlag] = useState(false)
  useEffect(() => {
    if(currentUser){
      setFlag(true)
      if(currentUser.uid == "GrI0PViLPBRiVPWDVW0KBuUOsDA3"){
              setFlagAdmin(true)
            }else{
                    setFlagAdmin(false)
                  }
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

  const [isOpen , setIsOpen] = useState(false)

  const handelClick = ()=>{
    setIsOpen(!isOpen)
  }

  const handleSignOut =()=>{
    setFlagAdmin(false)
  }
  
  return <>


<header className= {`${style.header} relative z-10 lg:px-16 md:px-12 sm:px-8  w-full px-32 py-8 font-medium flex items-center justify-between`} >

<button className='hidden lg:flex  flex-col justify-center items-center' onClick={handelClick}>
  <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-0.5' : "-translate-y-0.5"}`}></span>
  <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
  <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1.5' : "translate-y-0.5"}`}></span>
</button>

<div 
className='w-full flex justify-between items-center lg:hidden'>
  <nav className='flex justify-center align-center'>
    <CustomLink to='/'  title="Home"  className='mr-3 text-decoration-none text-light'/>
    <CustomLink to="/about" title="About Us" className='mx-3 text-decoration-none text-light'/>
    {/* <CustomLink to="/ourGoals" title="Our Goals" className='mx-3 text-decoration-none text-light'/> */}
    <CustomLink to="/allArticals" title="News" className='mx-3 text-decoration-none text-light'/>
    <CustomLink to="/allEvents" title="Events" className='mx-3 text-decoration-none text-light'/>
    {/* <CustomLink to="/board" title="Board" className='mx-3 text-decoration-none text-light'/> */}
    <CustomLink to="/theMinistry" title="The Ministry" className='mx-3 text-decoration-none text-light'/>
    {flag && flagAdmin ?<>
      <div class="dropdown-center">
        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Admin Access
        </button>
        <ul class="dropdown-menu">
          <li><Link class="dropdown-item" to='/users'>Users</Link></li>
          <li><Link class="dropdown-item" to='/addNews'>Add News</Link></li>
          <li><Link class="dropdown-item" to='/addEvents'>Add Events</Link></li>
        </ul>
      </div>
        </>:<></>}
  </nav>
  
  <nav className='flex items-center justify-center flex-wrap'>
    <motion.a href="https://www.facebook.com/Ylyministryy" target={'_blank'}
    whileHover={{y:-2}}
    whileTap={{scale:0.9}}
    className='w-6 text-white mr-3 '
    ><i className="fab fa-facebook-f fs-5"></i></motion.a>
    <motion.a className='w-6 text-white mx-3' href="https://www.instagram.com/ylyministry/" target={'_blank'}
    whileHover={{y:-2}}
    whileTap={{scale:0.9}}
    ><i className="fa-brands fa-instagram fs-5"></i></motion.a>
    <motion.a className='w-6 text-white ml-3' href="https://www.tiktok.com/@ylyministry?is_from_webapp=1&sender_device=pc" target={'_blank'}
    whileHover={{y:-2}}
    whileTap={{scale:0.9}}
    ><i className="fa-brands fa-tiktok fs-5"></i></motion.a>
    <motion.a className='w-6 text-white  mx-3' href="https://www.linkedin.com/company/ylyministry/" target={'_blank'}
    whileHover={{y:-2}}
    whileTap={{scale:0.9}}
    ><i className="fa-brands fa-linkedin fs-5"></i></motion.a>
    {flag? <> 
      <Link to="/login" title="Log Out" className='mx-3 text-decoration-none text-black' onClick={() => { signOut(auth); handleSignOut();}}>Log Out</Link>
      <span className='mx-3 text-decoration-none text-black'>Hello {currentUser?.displayName}</span>
        </> : <>
      <CustomLink to="/login" title="login" className='mx-3 text-decoration-none text-white'/>
      <CustomLink to="/signup" title="signup" className='mx-2 text-decoration-none text-white'/>
    </>}

  </nav>

</div>

{
  isOpen ?
<div 
initial={{scale:0 , opacity:0 , x:"-50%" , y:"-50%"}}
animate={{scale:1 , opacity:1 }}
transition={{duration:1}}
className='z-30 login rounded-lg backdrop-blur-md py-[70px] min-w-[70vw] flex flex-col  justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
  <nav className='flex items-center flex-col justify-center'>
    <CustomMobileLink to='/'  title="Home"  className='' toggle={handelClick}/>
    <CustomMobileLink to="/about" title="About Us" className='' toggle={handelClick}/>
    {/* <CustomMobileLink to="/ourGoals" title="Our Goals" className='' toggle={handelClick}/> */}
    <CustomMobileLink to="/allArticals" title="News" className='' toggle={handelClick}/>
    <CustomMobileLink to="/allEvents" title="Events" className='' toggle={handelClick}/>
    {/* <CustomMobileLink to="/board" title="Board" className='' toggle={handelClick}/> */}
    <CustomLink to="/theMinistry" title="The Ministry" className='mx-3 text-decoration-none text-light' toggle={handelClick}/>
  </nav>
  
  <nav className='flex items-center justify-center flex-wrap mt-4'>
    <motion.a href="https://www.facebook.com/Ylyministryy" target={'_blank'}
    whileHover={{y:-2}}
    whileTap={{scale:0.9}}
    className='w-6 text-white mr-3 '
    ><i className="fab fa-facebook-f fs-5"></i></motion.a>
    <motion.a className='w-6 text-white mx-3' href="https://www.instagram.com/ylyministry/" target={'_blank'}
    whileHover={{y:-2}}
    whileTap={{scale:0.9}}
    ><i className="fa-brands fa-instagram fs-5"></i></motion.a>
    <motion.a className='w-6 text-white ml-3' href="https://www.tiktok.com/@ylyministry?is_from_webapp=1&sender_device=pc" target={'_blank'}
    whileHover={{y:-2}}
    whileTap={{scale:0.9}}
    ><i className="fa-brands fa-tiktok fs-5"></i></motion.a>
    <motion.a className='w-6 text-white  mx-3' href="https://www.linkedin.com/company/ylyministry/" target={'_blank'}
    whileHover={{y:-2}}
    whileTap={{scale:0.9}}
    ><i className="fa-brands fa-linkedin fs-5"></i></motion.a>
    {flag? <> 
      <Link to="/login" title="Log Out" className='mx-3 text-decoration-none text-black' onClick={() => { signOut(auth); handleSignOut();}}>Log Out</Link>
      <span className='mx-3 text-decoration-none text-black'>Hello {currentUser?.displayName}</span>
        </> : <>
      <div className='mt-3'>
        <CustomLink to="/login" title="login" className='mx-3 text-decoration-none text-white' toggle={handelClick}/>
        <CustomLink to="/signup" title="signup" className='mx-2 text-decoration-none text-white' toggle={handelClick}/>
      </div>
      
    </>}

  </nav>

</div>
  : null
}

<Link to='/' className='w-[160px] md:w-[120px] absolute left-[50%] top-1  translate-x-[-50%]'>
<img className='w-100' src={logoYLY}/>
</Link>
</header>


  {/* <nav className={`${style.header}  navbar navbar-expand-lg z-1`}>
  <div className="container-fluid">
    <Link className={`${style.logo} navbar-brand`} to={'/'}>
      <img className='w-100' src={logoYLY} alt='logo'/>
    </Link>

    <button className="w-fit navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`${style.newNav}  align-items-center  navbar-nav m-auto ps-5 mb-2 mb-lg-0 `}>
        <li className="nav-item">
          <Link title='tst' className="nav-link " to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link title='tst' className="nav-link " to={'about'}>About Us</Link>
        </li>
        <li className="nav-item">
          <Link title='tst' className="nav-link " to={'ourGoals'}>Our Goals</Link>
        </li>
        <li className="nav-item">
          <Link title='tst' className="nav-link " to={'allArticals'}>News</Link>
        </li>
        <li className="nav-item">
          <Link title='tst' className="nav-link " to={'board'}>Board</Link>
        </li>
        <li className="nav-item">
          <Link title='tst' className="nav-link " to={'allEvents'}>Events</Link>
        </li>
        {flag && flagAdmin ?<>
          <div class="dropdown ">
            <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              User Access
            </a>

            <ul class="dropdown-menu">
              <li className="nav-item">
                <Link title='tst' className="nav-link " to={'users'}>Users</Link>
              </li>
              <li className="nav-item">
                <Link title='tst' className="nav-link " to={'addNews'}>Add News</Link>
              </li>
              <li className="nav-item">
                <Link title='tst' className="nav-link " to={'addEvents'}>Add Events</Link>
              </li>
            </ul>
          </div>
        </>:<></>}
      </ul>
      
      <ul className={`${style.social}  align-items-center navbar-nav ms-auto mb-2 mb-lg-0`}>
                <li className='pe-3'><a className="nav-link " title='tst' href="https://www.facebook.com/Ylyministryy"><i className="fab fa-facebook-f fs-5"></i></a></li>
                <li className='pe-3'><a className="nav-link " title='tst' href="https://www.instagram.com/ylyministry/"><i className="fa-brands fa-instagram fs-5"></i></a></li>
                <li className='pe-3'><a className="nav-link " title='tst' href="https://www.tiktok.com/@ylyministry?is_from_webapp=1&sender_device=pc"><i className="fa-brands fa-tiktok fs-5"></i></a></li>
                <li className='pe-3 '><a className="nav-link " title='tst' href="https://www.linkedin.com/company/ylyministry/"><i className="fa-brands fa-linkedin fs-5"></i></a></li>
                {flag? <> 
                  <li className='pe-3 '><Link className="nav-link " to={'login'} title='tst' onClick={() => { signOut(auth); handleSignOut();}} ><span>log out</span></Link></li>
                  <li className='pe-3 '><span className='nav-link text-danger fw-bold bg-slate-100'>Hello {currentUser?.displayName}</span></li>
                </> : <>
                <li className='pe-3 '><Link className="nav-link " to={'login'} title='tst'><span>login</span></Link></li>
                <li className='pe-3 '><Link className="nav-link " to={'signup'} title='tst'><span>signup</span></Link></li>
                </>}
      </ul> 

    </div>
  </div>
</nav> */}
  </>
}

export default Navbar
//fe8f01
//1034a8