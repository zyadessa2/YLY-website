import React, { useContext, useState } from 'react'
import TransitionEffect from '../../components/TransitionEffect'
import style from './Login.module.css'
import img from '../../images/logImg.webp'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
  const [err , setErr] = useState(false)
  const navigate = useNavigate()

  const {currentUser , setFlagAdmin } = useContext(AuthContext)

  const handleSubmit =async (e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth , email , password);
      if(currentUser.uid == "NPdjSX0D1IP3zO761jVlacEmu0z2"){
        setFlagAdmin(true)
      }
      navigate('/')
    }catch(err){
        setErr(true)
    }
  }
  
  return <>
    <head>
        <title>Login In</title>
        <meta name='description' content='Login to yly website' />
    </head>
    <TransitionEffect/>
    <main>

      <div className="login  ">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-md-7 d-flex flex-column align-items-center justify-content-center">
          <form onSubmit={handleSubmit} className={`${style.formLogin} d-flex flex-column align-items-center w-75 p-4`} >
            <h3 className='h1 pb-2 loginColor'>Sign in</h3>
            <input type="email" className='mb-1  form-control' placeholder='ex@gmail.com' />
            <input type="password" className=' mt-1 form-control' placeholder='password' />
            <button className='mt-3 mb-3 btn borderbuttonSignin  ylyBlueBg w-100 text-white '>Sign in</button>
            <span className='text-center forgetpass fs-6 loginColor'>Forget your password?</span>
            {err && <span>somthing went wrong</span>}
          </form>
          <p className='ps-4 pt-3 pb-1 fs-5 noaccount text-white'>Don't have an account? <Link to='/signup' className='ylyBlue'>Sign up</Link></p>
          </div>
          <div className="col-md-5">
            <img className={style.imgLogin} src={img} alt="" />
          </div>
        </div>
      </div>
    </main>
  </>
}

export default Login
