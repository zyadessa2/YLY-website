import React, { useContext, useEffect, useState } from 'react'
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {auth , db, storage} from '../../firebase'
import { addDoc, collection, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom'

const EditEvent = ({ eventId, setEvents }) => {
    const [err , setErr] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventImage = e.target[0].files[0];
        const title = e.target[1].value;
        const eventBriefParagraph = e.target[2].value;
        const date = e.target[3].value;
        console.log(title, eventImage, eventBriefParagraph, date);
        if (!eventImage || !title || !eventBriefParagraph || !date) {
          alert("Please fill out all fields and provide an image.");
          return;
      }
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
    
          const eventImageUrl = await uploadImage(eventImage, `eventImage/${title}`);
          
          const eventData = {
            eventImageUrl,
            title,
            eventBriefParagraph,
            date,
          };
    
          // تحديث المستند الحالي في Firestore باستخدام معرف الحدث
          const docRef = doc(db, "event", eventId);
          await updateDoc(docRef, eventData);
    
          // تحديث الحالة المحلية للأحداث
          setEvents(prevEvents => 
            prevEvents.map(event => 
              event.id === eventId ? { id: eventId, ...eventData } : event
            )
          );
    
          alert("تم تعديل الحدث بنجاح!");
    
        } catch (error) {
          setErr(true);
          console.error("Error uploading images: ", error);
          alert("حدثت مشكلة، إذا تكررت المشكلة يرجى التواصل مع الإدارة.");
        }
      };
    //   const handleSubmit =async(e)=>{
    //     e.preventDefault();
    //     const eventImage = e.target[0].files[0];
    //     const title = e.target[1].value;
    //     const eventBriefParagraph = e.target[2].value;
    //     const date = e.target[3].value;
    //     console.log(title ,eventImage , eventBriefParagraph ,date);
    //     try {
    //       const uploadImage = async (image, refPath) => {
    //         if (image) {
    //           const imageRef = ref(storage, refPath);
    //           const uploadTask = uploadBytesResumable(imageRef, image);
    //           await new Promise((resolve, reject) => {
    //             uploadTask.on(
    //               "state_changed",
    //               null,
    //               (error) => reject(error),
    //               () => resolve()
    //             );
    //           });
    //           return await getDownloadURL(imageRef);
    //         }
    //         return null;
    //       };
      
    //       const eventImageUrl = await uploadImage(eventImage, `eventImage/${title}`);
          
    //       const eventData = {
    //         eventImageUrl,
    //         title,
    //         eventBriefParagraph,
    //         date,
    //       };
      
    //       const oldDocId = "حدد معرف المستند القديم هنا إذا كان موجودًا";
    //   if (oldDocId) {
    //     const oldDocRef = doc(db, "event", oldDocId);
    //     await deleteDoc(oldDocRef);
    //   }

    //   // إضافة البيانات إلى Firestore وإنشاء مستند بمعرف فريد
    //   const docRef = await addDoc(collection(db, "event"), eventData);

    //   alert("تم تعديل الحدث بنجاح!");

    // } catch (error) {
    //   setErr(true);
    //   console.error("Error uploading images: ", error);
    //   alert("حدثت مشكلة، إذا تكررت المشكلة يرجى التواصل مع الإدارة.");
    // }
    //     }
  return <>
   <div className="editEvents">
        <div className="edit">
        <form onSubmit={handleSubmit} className=' d-flex flex-column align-items-center m-auto w-75 mt-5 p-4' >
          <h3 className='h1 pb-2 text-white'>Edit Event</h3>
                    <div class="input-group mt-3 mb-3">
                      <label class="input-group-text" for="file1">صوره الغلاف</label>
                      <input type="file" class="form-control" id="file1" />
                    </div>
                    <input type="text" className='mb-1 form-control borderinput' placeholder=' العنوان' />
                    <input type="text" className='mb-1 form-control borderinput' placeholder=' فقره مختصره' />
                    <input type="text" className='mb-1 form-control borderinput' placeholder=' Jul 31, 2024 23:59:59 ' />
                    <button className='mt-3 mb-3 btn ylyBlueBg btn-primary w-100 text-white '>تعديل</button>
          </form>
        </div>
    </div>
  </>
}

export default EditEvent
