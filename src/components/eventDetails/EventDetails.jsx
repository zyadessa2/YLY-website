import { motion } from "framer-motion";
import style from './EventDetails.module.css';
import { useParams } from 'react-router-dom';
import { addDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import React, { useContext, useEffect, useState } from 'react'
import img from '../../images/20221005_110951.webp'
import AnimatedText from '../AnimatedText'
import emailjs from 'emailjs-com';
import {   collection, getDocs } from "firebase/firestore";
import DataTable from "react-data-table-component";
import { AuthContext } from '../../context/AuthContext'


const EventDetails = () => {
    const { flagAdmin } = useContext(AuthContext)
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [registrations, setRegistrations] = useState([]);
  const [Days, setDays] = useState('')
  const [Hours, setHours] = useState('')
  const [Mint, setMint] = useState('')
  const [sec, setSec] = useState('')
  const [email, setEmail] = useState('');
  const [toName, setToName] = useState('');
  const [phone, setPhone] = useState('');

useEffect(() => {
    const fetchEvent = async () => {
      const docRef = doc(db, 'events', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setEvent(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };
    fetchEvent();
  }, [id]);

  useEffect(() => {
    const fetchRegistrations = async () => {
      const registrationsCollection = collection(db, `events/${id}/registrations`);
      const registrationsSnapshot = await getDocs(registrationsCollection);
      const registrationsList = registrationsSnapshot.docs.map(doc => doc.data());
      setRegistrations(registrationsList);
    };
    fetchRegistrations();
  }, [id]);

  useEffect(() => {
    if (event) {
      const countdown = new Date(event.date).getTime();
      const counter = setInterval(() => {
        const datenow = new Date().getTime();
        const datediff = countdown - datenow;

        setDays(Math.floor(datediff / 1000 / 60 / 60 / 24));
        setHours(Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMint(Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60)));
        setSec(Math.floor((datediff % (1000 * 60)) / 1000));
      }, 1000);

      return () => clearInterval(counter);
    }
  }, [event]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (event) {
      const templateParams = {
        from_name: "YLY Team",
        to_name: toName,
        to_email: email,
        event_title: event.title,
        event_date: event.date,
        event_description: event.eventDetails,
        event_image_url: event.eventCoverUrl
      };

      emailjs.send('service_cuu6ace', 'template_b3om33t', templateParams, 'LVQRqjbA-v8p1iAJ_')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('تم التسجيل');
        }, (error) => {
          console.error('FAILED...', error);
          alert('لو المشكله اتكررت ابعتلنا رساله');
        });

      // Add registration to Firestore
      const registrationData = {
        name: toName,
        email: email,
        phone: phone,
        registeredAt: new Date()
      };
      const eventDocRef = doc(db, 'events', id);
      const registrationsCollectionRef = collection(eventDocRef, 'registrations');
      addDoc(registrationsCollectionRef, registrationData).then(() => {
        setRegistrations(prev => [...prev, registrationData]);
        setToName('');
        setEmail('');
        setPhone('');
      }).catch((error) => {
        console.error('Error adding registration: ', error);
      });
    }
  };
  


  const columns =[
    {
        name:"Name",
        selector:row => row.name,
        sortable:true,
    },
    {
        name:"email",
        selector:row => row.email,
        sortable:true,
    },
    {
        name:"phone",
        selector:row => row.phone,
        sortable:true,
    },

  ]



  const [rec, setRec] = useState(registrations)
  useEffect(() => {
    setRec(registrations);
  }, [registrations]);
console.log(rec);

function handleFilter(e){
    const newData = registrations.filter(row =>{
        return row.toName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) 
    })
    setRec(newData)
  }
    if (!event) return <>
      <div id="lauding">
        <div class="sk-cube-grid ">
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
          </div>
    </div>
      </>

    return <>
    <div className="latest">
    < div class={`${style.events} container `} id="events">
          <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="!! Event New " ClassName={`${style.titleAbout} my-5 text-white`} /></motion.h2>
            <div class={style.container}>
              <div className="row">
                  <div className="col-md-8">
                      <div className="">
                          <div class={style.time}>
                              <motion.div viewport={{once:true}} initial={{y:-60 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1}} class={style.unit}>
                              <span>{Days}</span>
                              <span className='text-light'>Days</span>
                              </motion.div>
                              <motion.div viewport={{once:true}} initial={{y:-60 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.2}} class={style.unit}>
                              <span>{Hours}</span>
                              <span className='text-light'>Hours</span>
                              </motion.div>
                              <motion.div viewport={{once:true}} initial={{y:-60 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.4}} class={style.unit}>
                              <span>{Mint}</span>
                              <span className='text-light'>Minutes</span>
                              </motion.div>
                              <motion.div viewport={{once:true}} initial={{y:-60 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.6}} class={style.unit}>
                              <span>{sec}</span>
                              <span className='text-light'>Seconds</span>
                              </motion.div>
                          </div>
                          <h2 className={style.title}>{event?.title}</h2>
                          <p className={style.description}>
                            {event?.eventDetails}
                          </p>
                      </div>
                  </div>
  
                  <div className="col-md-4">
                  { <img className='rounded' src={event?.eventCoverUrl} alt={event?.title} />}
                  </div>
              </div>
  
              <motion.div viewport={{once:true}} initial={{ scale :.6,opacity:0}} whileInView={{scale:1, opacity:1  }} transition={{duration:1.5}} class={style.subscribe}>
                <form className="d-flex flex-col" onSubmit={sendEmail}>
                  <input type="text" placeholder="Enter Your Name" value={toName} onChange={(e) => setToName(e.target.value)} required />
                  <input  type="tel" placeholder="Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                  <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <input type="submit" value="Subscribe" />
                </form>
              </motion.div>
            </div>

            {flagAdmin ?<>
                <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="Registrations All" ClassName={`${style.titleAbout} mb-4 mt-4  text-white`} /></motion.h2>
            <div className="users">
                <div className="container mb-5 mt-5">
                    <div className="search text-end">
                        <input type="text" className='form-control w-75 mb-4 m-auto ' placeholder='search By Name'  onChange={handleFilter}/>
                    </div>
                    <DataTable
                    columns={columns}
                    data={rec}
                    selectableRows
                    fixedHeader
                    pagination
                    >
                    </DataTable>
                </div>
            </div>
            </>:<></>}
            

      </div>
    </div>
    </>

}

export default EventDetails
