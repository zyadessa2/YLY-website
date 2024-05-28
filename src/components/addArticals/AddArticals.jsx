import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {auth , db, storage} from '../../firebase'
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

const AddArticals = () => {
    const [err , setErr] = useState(false)
    const navigate = useNavigate()
    const {currentUser} = useContext(AuthContext)


      const handleSubmit =async(e)=>{
        e.preventDefault();
        const coverImage = e.target[0].files[0];
        const title = e.target[1].value;
        const briefParagraph = e.target[2].value;
        const par1 = e.target[3].value;
        const imagePar1 = e.target[4].files.length > 0 ? e.target[4].files[0] : null;
        const par2 = e.target[5].value;
        const imagePar2 = e.target[6].files.length > 0 ? e.target[6].files[0] : null;
        const par3 = e.target[7].value;
        const imagePar3 = e.target[8].files.length > 0 ? e.target[8].files[0] : null;
        const par4 = e.target[9].value;
        const imagePar4 = e.target[10].files.length > 0 ? e.target[10].files[0] : null;

        try {
          const uploadImage = async (image, refPath) => {
            if (image) {
              const imageRef = ref(storage, refPath);
              const uploadTask = uploadBytesResumable(imageRef, image);
              await new Promise((resolve, reject) => {
                uploadTask.on(
                  "state_changed",
                  null,
                  (error) => reject(error),
                  () => resolve()
                );
              });
              return await getDownloadURL(imageRef);
            }
            return null;
          };
      
          const coverImageUrl = await uploadImage(coverImage, `coverImages/${title}`);
          const imagePar1Url = await uploadImage(imagePar1, `par1Images/${title}1`);
          const imagePar2Url = await uploadImage(imagePar2, `par2Images/${title}2`);
          const imagePar3Url = await uploadImage(imagePar3, `par3Images/${title}3`);
          const imagePar4Url = await uploadImage(imagePar4, `par4Images/${title}4`);
      
          const articleData = {
            writerName:currentUser.displayName,
            writerImage:currentUser.photoURL,
            coverImageUrl,
            title,
            briefParagraph,
            paragraphs: [
              { text: par1, image: imagePar1Url },
              { text: par2, image: imagePar2Url },
              { text: par3, image: imagePar3Url },
              { text: par4, image: imagePar4Url }
            ]
          };
      
          // إضافة البيانات إلى Firestore وإنشاء مستند بمعرف فريد
          const docRef = await addDoc(collection(db, "news"), articleData);
      
          console.log("Document successfully written with ID: ", docRef.id);
          alert("تمت اضافه الخبر بنجاح");

          // console.log(
          //   coverImageUrl,
          //   imagePar1Url,
          //   imagePar2Url,
          //   imagePar3Url,
          //   imagePar4Url
          // );
         
        } catch (error) {
          setErr(true);
          console.error("Error uploading images: ", error);
          alert( "فى مشكله لو المشكله اتكررت كلم حد من الادمن");
        }}

  return <>
    <div className="addArtical">
        <div className="editArticals">
        <form onSubmit={handleSubmit} className=' d-flex flex-column align-items-center m-auto w-75 mt-5 p-4' >
          <h3 className='h1 pb-2 text-white'>Add new</h3>
                    <div class="input-group mt-3 mb-3">
                      <label class="input-group-text" for="file1">صوره الغلاف</label>
                      <input type="file" class="form-control" id="file1" />
                    </div>
                    <input type="text" className='mb-1 form-control borderinput' placeholder=' العنوان' />
                    <input type="text" className='mb-1 form-control borderinput' placeholder=' فقره مختصره' />
                    <input type="text" className='mb-1 form-control borderinput' placeholder='اول فقره' />
                    <div class="input-group mt-3 mb-3">
                      <label class="input-group-text" for="file1">صوره اول فقره</label>
                      <input type="file" class="form-control" id="file1" />
                    </div>
                    <input type="text" className='mb-1 form-control borderinput' placeholder='تانى فقره' />
                    <div class="input-group mt-3 mb-3">
                      <label class="input-group-text" for="file1">صوره تانى فقره</label>
                      <input type="file" class="form-control" id="file1" />
                    </div>
                    <input type="text" className='mb-1 form-control borderinput' placeholder='تالت فقره' />
                    <div class="input-group mt-3 mb-3">
                      <label class="input-group-text" for="file1">صوره تالت فقره</label>
                      <input type="file" class="form-control" id="file1" />
                    </div>
                    <input type="text" className='mb-1 form-control borderinput' placeholder='رابع فقره' />
                    <div class="input-group mt-3 mb-3">
                      <label class="input-group-text" for="file1">صوره رابع فقره</label>
                      <input type="file" class="form-control" id="file1" />
                    </div>
                    <button className='mt-3 mb-3 btn ylyBlueBg btn-primary w-100 text-white '>اضافه</button>
          </form>
        </div>
    </div>
        
  </>
}

export default AddArticals
