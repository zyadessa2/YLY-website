import React from 'react'
import TransitionEffect from '../../components/TransitionEffect'
import img from '../../images/logImg.webp'
import style from './Signin.module.css'
import { Link } from 'react-router-dom'
const Siginin = () => {

  const handleSubmit =async (e)=>{
    e.preventDefault();
  }

  return <>
    <head>
        <title>Sign Up</title>
        <meta name='description' content='Sigin in to yly website' />
    </head>
    <TransitionEffect/>
    <main>
    <div className="login bg-dark  ">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-md-7 d-flex flex-column align-items-center justify-content-center">
          <form onSubmit={handleSubmit} className={`${style.formLogin} d-flex flex-column align-items-center w-75 p-4`} >
          <h3 className='h1 pb-2 text-white'>Sign up</h3>
                    <input type="text" className='mb-1 form-control borderinput' placeholder='name' />
                    <input type="email" className='mb-1 form-control borderinput' placeholder='ex@gmail.com' />
                    <input type="password" className='borderinput form-control' placeholder='password' />
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label className='d-flex align-items-center justify-content-start' htmlFor="file">
                        <img className='ADD' src="data:image/jpeg;base64,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" alt="" />
                        <span className='mt-2 ms-1 ylyBlue'>Add image</span>
                    </label>
                    <button className='mt-3 mb-3 btn ylyBlueBg btn-primary w-100 text-white '>Sign up</button>
          </form>
          <p className='ps-4 pt-3 pb-1 fs-5 noaccount text-white'>Have an account? <Link className='ylyBlue' to='/login'>Sign in</Link></p>
          </div>
          <div className="col-md-5">
            <img className={style.imgLogin} src={img} alt="" />
          </div>
        </div>
      </div>
    </main>
  </>
}

export default Siginin
