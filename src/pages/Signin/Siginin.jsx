import React, { useState } from 'react'
import TransitionEffect from '../../components/TransitionEffect'
import img from '../../images/logImg.webp'
import style from './Signin.module.css'
import {  createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {auth , db, storage} from '../../firebase'
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom'


const Siginin = () => {
  const [err , setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit =async (e)=>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const whats = e.target[1].value;
    const NationalID = e.target[2].value;
    const email = e.target[3].value;
    const password = e.target[4].value;
    const PersonalPhoto= e.target[5].files[0];
    const IDPhoto = e.target[6].files[0];
    const code = e.target[7].value;
    console.log(code);

    try{
    const res = await createUserWithEmailAndPassword(auth, email, password)

    const storageRef = ref(storage, displayName); 
    const storageRef2 = ref(storage, displayName+'2'); 

    const uploadTask = uploadBytesResumable(storageRef, PersonalPhoto);
    const uploadID = uploadBytesResumable(storageRef2, IDPhoto);

  uploadTask.on(
    (error) => {
      setErr(true)
    }, 
    () => {
      getDownloadURL(uploadID.snapshot.ref).then(async(idURL) => {
        await setDoc(doc(db , "users" , res.user.uid),{
          IDURL:idURL,
        })
      });
      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
        await updateProfile(res.user,{
          displayName,
          photoURL:downloadURL,
        })
        await setDoc(doc(db , "users" , res.user.uid),{
          uid:res.user.uid,
          displayName,
          whats,
          NationalID,
          email,
          password,
          photoURL: downloadURL,
          // uploadID,
          code,
        })
      });
    }
  );
  navigate('/')
    }catch(err){
        setErr(true)
    }
  }


  return <>
    <head>
        <title>Sign Up</title>
        <meta name='description' content='Sigin in to yly website' />
        <meta name='name' content='Sigin in to yly website' />
    </head>
    <TransitionEffect/>
    <main>
    <div className="login bg-dark vh-100 ">
        <div className="row  justify-content-center align-items-center">
          <div className="col-md-7 d-flex flex-column align-items-center justify-content-center">
          <form onSubmit={handleSubmit} className={`${style.formLogin} d-flex flex-column align-items-center w-75 mt-5 p-4`} >
          <h3 className='h1 pb-2 text-white'>Sign up</h3>
                    <input type="text" className='mb-1 form-control borderinput' placeholder='الاسم' />
                    <input type="number" className='mb-1 form-control borderinput' placeholder='رقم الواتس' />
                    <input type="number" className='mb-1 form-control borderinput' placeholder='الرقم القومى' />
                    <input type="email" className='mb-1 form-control borderinput' placeholder='ex@gmail.com' />
                    <input type="password" className='borderinput form-control' placeholder='password' />
                    
                    {/* <div className="imageSign d-flex my-3"> */}
                    <div class="input-group mt-3 mb-3">
                      <label class="input-group-text" for="file1">صوره شخصيه</label>
                      <input type="file" class="form-control" id="file1" />
                    </div>
                    <div class="input-group mb-3">
                      <label class="input-group-text" for="file2">صوره البطاقه</label>
                      <input type="file" class="form-control" id="file2" />
                    </div>
                    {/* </div> */}
                    <input type="text" className='mb-1 form-control borderinput' placeholder='اكتب الكود ' />
                    <button className='mt-3 mb-3 btn ylyBlueBg btn-primary w-100 text-white '>Sign up</button>
            {err && <span>somthing went wrong</span>}
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
