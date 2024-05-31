import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import AnimatedText from '../AnimatedText'
import style from './AllEvents.module.css'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { db } from '../../firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext'

const AllEvents = () => {
    const [events, setEvents] = useState([]);
    const {flagAdmin} = useContext(AuthContext)
  
      const [windowSize, setWindowSize] = useState({
          width: window.innerWidth,
          height: window.innerHeight
        });
        const [Flag, setFlag] = useState(null)
      
        useEffect(() => {
          const handleResize = () => {
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight
            });
          };
      
          window.addEventListener('resize', handleResize);
      
          if(windowSize.width > '430'){
            setFlag(true)
          }else{
            setFlag(false)
          }
          console.log(windowSize.width);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
      
      var settings = {
          dots: true,
          infinite: true,
          autoplay:true,
          autoplaySpeed:3000,
          arrows:false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
  
        useEffect(() => {
          const fetchEvents = async () => {
            const eventsCollection = collection(db, 'events');
            const eventsSnapshot = await getDocs(eventsCollection);
            const eventsList = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setEvents(eventsList);
          };
          fetchEvents();
        }, []);
  
        const handleDelete = async (id) => {
          const docRef = doc(db, 'events', id);
      
          await deleteDoc(docRef)
            .then(() => {
              alert("تم حذف الايفنت بنجاح!");
              setEvents(events.filter(event => event.id !== id)); // إزالة المقالة من الحالة بعد الحذف
            })
            .catch((error) => {
              alert("حدث خطأ أثناء محاولة حذف الوثيقة:", error);
            });
        }
  
        if (!events) return <>
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
        <div class={`${style.articles} articals`} id="news">
        <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="All events" ClassName={`${style.titleAbout} mb-4 mt-4  text-white`} /></motion.h2>
          {Flag?<>
            <div class={`${style.container} row d-flex justify-content-center g-3 m-auto align-items-center container`}>
            {events.map(event => (
          <motion.div
            key={event.id}
            
            className={`${style.box} col-md-3 m-4`}
          >
              {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(event.id)}>Delete</button>:<></>}
            <Link className='text-decoration-none' to={`/eventDetails/${event.id}`}>
            <img src={event.eventCoverUrl} alt={event.title} />
            <div className={style.content}>
              <h3>{event.title}</h3>
              <p>{event.briefParagraph}</p>
            </div>
              
            <div className={`${style.info} d-flex align-items-center justify-content-between`}>
              <Link to={`/eventDetails/${event.id}`}>Read more</Link>
            </div>
            
            </Link>
          </motion.div>
            ))}
            
          </div>
          </> : <>
          <div class={`${style.container} container m-auto row d-flex justify-content-between align-items-center`}>
          <Slider {...settings} >
          {events.map(event => (
          <motion.div
            key={event.id}
            // viewport={{ once: true }}
            // initial={{ x: -50, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // transition={{ duration: 1.4 }}
            className={`${style.box} col-md-3 m-4`}
          >
              {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(event.id)}>Delete</button>:<></>}
              <Link className='text-decoration-none' to={`/articalDetails/${event.id}`}>
            <img src={event.coverImageUrl} alt={event.title} />
            <div className={style.content}>
              <h3>{event.title}</h3>
              <p>{event.briefParagraph}</p>
            </div>
            <div className={`${style.info} d-flex align-items-center justify-content-between`}>
              <span className='fw-bold text-white'>Write By <span className='text-danger fw-bold'>{event.writerName}</span></span>
              <Link to={`/articalDetails/${event.id}`}>Read more</Link>
            </div>
            </Link>
          </motion.div>
          ))}
         
          </Slider>
          </div>
          </>
          }
          
        </div>
      </>
}

export default AllEvents
