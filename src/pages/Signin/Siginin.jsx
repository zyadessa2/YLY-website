import React, { useRef, useState } from 'react'
import TransitionEffect from '../../components/TransitionEffect'
import img from '../../images/logImg.webp'
import style from './Signin.module.css'
import {  createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {auth , db, storage} from '../../firebase'
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Siginin = () => {
  // const [err , setErr] = useState(false)
  // const navigate = useNavigate()

  // const handleSubmit =async (e)=>{
  //   e.preventDefault();
  //   const displayName = e.target[0].value;
  //   const whats = e.target[1].value;
  //   const NationalID = e.target[2].value;
  //   const email = e.target[3].value;
  //   const password = e.target[4].value;
  //   const PersonalPhoto= e.target[5].files[0];
  //   const IDPhoto = e.target[6].files[0];
  //   const code = e.target[7].value;
  //   console.log(code);

  //   try{
  //   const res = await createUserWithEmailAndPassword(auth, email, password)

  //   const uploadImage = async (image, refPath) => {
  //     if (image) {
  //       const imageRef = ref(storage, refPath);
  //       const uploadTask = uploadBytesResumable(imageRef, image);
  //       await new Promise((resolve, reject) => {
  //         uploadTask.on(
  //           "state_changed",
  //           null,
  //           (error) => reject(error),
  //           () => resolve()
  //         );
  //       });
  //       return await getDownloadURL(imageRef);
  //     }
  //     return null;
  //   };

  //   const storageRef = ref(storage, displayName); 
  //   const IDPhotoURL = await uploadImage(IDPhoto, `coverImages/${displayName}`);

  //   const uploadTask = uploadBytesResumable(storageRef, PersonalPhoto);
  //   // const uploadID = uploadBytesResumable(storageRef2, IDPhoto);

  // uploadTask.on(
  //   (error) => {
  //     setErr(true)
  //   }, 
  //   () => {
  //     // getDownloadURL(uploadID.snapshot.ref).then(async(idURL) => {
  //     //   await setDoc(doc(db , "users" , res.user.uid),{
  //     //     IDURL:idURL,
  //     //   })
  //     // });
  //     getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
  //       await updateProfile(res.user,{
  //         displayName,
  //         photoURL:downloadURL,
  //       })
  //       await setDoc(doc(db , "users" , res.user.uid),{
  //         uid:res.user.uid,
  //         displayName,
  //         whats,
  //         NationalID,
  //         email,
  //         password,
  //         photoURL: downloadURL,
  //         IDPhotoURL,
  //         code,
  //       })
  //     });
  //   }
  // );
  // window.location.reload()
  // navigate('/')
  //   }catch(err){
  //       // setErr(true)
  //   }
  // }

  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     phone: '',
  //     nationalId: '',
  //     email: '',
  //     password: '',
  //     profileImage: null,
  //     idImage: null,
  //     code: '',
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string().required('الاسم مطلوب'),
  //     phone: Yup.string()
  //       .matches(/^01[0-9]{9}$/, 'رقم الهاتف غير صالح، يجب ادخال رقم مصرى')
  //       .required('رقم الواتس مطلوب'),
  //     nationalId: Yup.string()
  //       .matches(/^[0-9]{14}$/, 'الرقم القومي يجب أن يكون مكون من 14 رقم')
  //       .required('الرقم القومي مطلوب'),
  //     email: Yup.string().email('البريد الإلكتروني غير صالح').required('البريد الإلكتروني مطلوب'),
  //     password: Yup.string().required('كلمة المرور مطلوبة'),
  //     profileImage: Yup.mixed().required('صورة شخصية مطلوبة'),
  //     idImage: Yup.mixed().required('صورة البطاقة مطلوبة'),
  //     code: Yup.string().required('الكود مطلوب'),
  //   }),
  //   onSubmit: (values) => {
  //     console.log(values);
  //     // هنا يمكن أن تضيف كود لإرسال البيانات إلى الخادم
  //   },
  // });
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { name, phone, nationalId, email, password, profileImage, idImage, code } = values;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const uploadImage = async (image, refPath) => {
        if (image) {
          const imageRef = ref(storage, refPath);
          const uploadTask = uploadBytesResumable(imageRef, image);
          await new Promise((resolve, reject) => {
            uploadTask.on(
              'state_changed',
              null,
              (error) => reject(error),
              () => resolve()
            );
          });
          return await getDownloadURL(imageRef);
        }
        return null;
      };

      const storageRef = ref(storage, name); 
      const idPhotoURL = await uploadImage(idImage, `coverImages/${name}`);

      const uploadTask = uploadBytesResumable(storageRef, profileImage);

      uploadTask.on(
        (error) => {
          setErr(true);
        }, 
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await updateProfile(res.user, {
            displayName: name,
            photoURL: downloadURL,
          });
          await setDoc(doc(db , 'users' , res.user.uid), {
            uid: res.user.uid,
            displayName: name,
            phone,
            nationalId,
            email,
            password,
            photoURL: downloadURL,
            idPhotoURL,
            code,
          });
        }
      );
      
      window.location.reload();
      navigate('/');
    } catch(err) {
      setErr(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      nationalId: '',
      email: '',
      password: '',
      profileImage: null,
      idImage: null,
      code: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('الاسم مطلوب'),
      phone: Yup.string()
        .matches(/^01[0-9]{9}$/, 'رقم الهاتف غير صالح، يجب ادخال رقم مصرى')
        .required('رقم الواتس مطلوب'),
      nationalId: Yup.string()
        .matches(/^[0-9]{14}$/, 'الرقم القومي يجب أن يكون مكون من 14 رقم')
        .required('الرقم القومي مطلوب'),
      email: Yup.string().email('البريد الإلكتروني غير صالح').required('البريد الإلكتروني مطلوب'),
      password: Yup.string().required('كلمة المرور مطلوبة'),
      profileImage: Yup.mixed().required('صورة شخصية مطلوبة'),
      idImage: Yup.mixed().required('صورة البطاقة مطلوبة'),
      code: Yup.string().required('الكود مطلوب'),
    }),
    onSubmit: handleSubmit,
  });

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
                    <input type="text" className='mb-1 form-control borderinput' placeholder='الاسم' {...formik.getFieldProps('name')}/>
                    {formik.touched.name && formik.errors.name ? <div className='text-danger fw-bold'>{formik.errors.name}</div> : null}
                    <input type="number" className='mb-1 form-control borderinput' placeholder='رقم الواتس' {...formik.getFieldProps('phone')}/>
                    {formik.touched.phone && formik.errors.phone ? <div className='text-danger fw-bold'>{formik.errors.phone}</div> : null}
                    <input type="number" className='mb-1 form-control borderinput' placeholder='الرقم القومى' {...formik.getFieldProps('nationalId')}/>
                    {formik.touched.nationalId && formik.errors.nationalId ? <div className='text-danger fw-bold'>{formik.errors.nationalId}</div> : null}
                    <input type="email" className='mb-1 form-control borderinput' placeholder='ex@gmail.com' {...formik.getFieldProps('email')}/>
                    {formik.touched.email && formik.errors.email ? <div className='text-danger fw-bold'>{formik.errors.email}</div> : null}
                    <input type="password" className='borderinput form-control' placeholder='password' {...formik.getFieldProps('password')}/>
                    {formik.touched.password && formik.errors.password ? <div className='text-danger fw-bold'>{formik.errors.password}</div> : null}

                    
                    {/* <div className="imageSign d-flex my-3"> */}
                    <div class="input-group mt-3 mb-3">
                      <label class="input-group-text" for="file1">صوره شخصيه</label>
                      <input type="file" class="form-control" id="file1" onChange={(event) => formik.setFieldValue('profileImage', event.currentTarget.files[0])}/>
                    </div>      
                    {formik.touched.profileImage && formik.errors.profileImage ? <div className='text-danger fw-bold'>{formik.errors.profileImage}</div> : null}
                    <div class="input-group mb-3">
                      <label class="input-group-text" for="file2">صوره البطاقه</label>
                      <input type="file" class="form-control" id="file2" onChange={(event) => formik.setFieldValue('idImage', event.currentTarget.files[0])}/>
                    </div>
                    {formik.touched.idImage && formik.errors.idImage ? <div className='text-danger fw-bold'>{formik.errors.idImage}</div> : null}
                    {/* </div> */}
                    <input type="text" className='mb-1 form-control borderinput' placeholder='اكتب الكود ' {...formik.getFieldProps('code')}/>
                    {formik.touched.code && formik.errors.code ? <div className='text-danger fw-bold'>{formik.errors.code}</div> : null}
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

