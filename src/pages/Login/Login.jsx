import React from 'react'
import TransitionEffect from '../../components/TransitionEffect'
import style from './Login.module.css'
import img from '../../images/logImg.webp'
import { Link } from 'react-router-dom'
const Login = () => {

  const handleSubmit =async (e)=>{
    e.preventDefault();
  }

  return <>
    <head>
        <title>Login In</title>
        <meta name='description' content='Login to yly website' />
    </head>
    <TransitionEffect/>
    <main>

      <div className="login bg-dark ">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-md-7 d-flex flex-column align-items-center justify-content-center">
          <form onSubmit={handleSubmit} className={`${style.formLogin} d-flex flex-column align-items-center w-75 p-4`} >
            <h3 className='h1 pb-2 text-primary'>Sign in</h3>
            <input type="email" className='mb-1  form-control' placeholder='ex@gmail.com' />
            <input type="password" className=' mt-1 form-control' placeholder='password' />
            <button className='mt-3 mb-3 btn borderbuttonSignin btn btn-primary w-100 text-white '>Sign in</button>
            <span className='text-center forgetpass fs-6 text-primary'>Forget your password?</span>
          </form>
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
