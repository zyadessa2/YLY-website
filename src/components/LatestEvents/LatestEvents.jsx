import React, { useEffect, useState } from 'react'
import img from '../../images/20221005_110951.webp'
import AnimatedText from '../AnimatedText'
import { motion } from "framer-motion";
import style from './LatestEvents.module.css'
import { collection, getDocs , query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../firebase';
import emailjs from 'emailjs-com';

const LatestEvents = () => {
  const [event, setEvent] = useState(null);
  const [Days, setDays] = useState('')
  const [Hours, setHours] = useState('')
  const [Mint, setMint] = useState('')
  const [sec, setSec] = useState('')
  const [email, setEmail] = useState('');
  const [toName, setToName] = useState('');

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     const eventCollection = collection(db, 'event');
  //     const eventSnapshot = await getDocs(eventCollection);
  //     const eventList = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  //     setEvent(eventList);
  //   };
  //   fetchArticles();
  // }, []);
  useEffect(() => {
    const fetchLatestEvent = async () => {
      const eventCollection = collection(db, 'event');
      const eventQuery = query(eventCollection, orderBy('date', 'desc'), limit(1));
      const eventSnapshot = await getDocs(eventQuery);
      const eventList = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      if (eventList.length > 0) {
        setEvent(eventList[0]);
      }
    };
    fetchLatestEvent();
  }, []);

  // let countdown = new Date(event[0].date).getTime()
  // const counter =()=>{
  //   setInterval(()=> {
  //     let datenow = new Date().getTime()

  //     let datediff = countdown - datenow;

  //     setDays(Math.floor(datediff / 1000 /60 / 60 /24)) 
  //     setHours(Math.floor((datediff %( 1000 *60 * 60*24)) / (1000 * 60 * 60)))  
  //     setMint(Math.floor((datediff %( 1000 *60 * 60)) / (1000 * 60 ))) 
  //     setSec(Math.floor((datediff %( 1000 *60 )) / 1000))  

  //   } , 1000)
  // }
  // counter()

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
        event_description: event.eventBriefParagraph,
        event_image_url: event.eventImageUrl
      };

      emailjs.send('service_cuu6ace', 'template_b3om33t', templateParams, 'LVQRqjbA-v8p1iAJ_')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Event details have been sent to your email successfully.');
        }, (error) => {
          console.error('FAILED...', error);
          alert('An error occurred while sending the email.');
        });
    }
  };


  if (!event) {
    return <div>Loading...</div>;
  }

  return <>
  <div className="latest">
  < div class={`${style.events} container `} id="events">
        <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="Latest Events" ClassName={`${style.titleAbout} my-5 text-white`} /></motion.h2>
          <div class={style.container}>
            <div className="row">
                <div className="col-md-8">
                    <div class={style.info}>
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
                        <h2 className={style.title}>Lorem ipsum dolor sit amet </h2>
                        <span className={style.description}>
                          consectetur adipisicing elit. Inventore, nesciunt, quis id autem error molestias voluptatem beatae nobis magnam eos culpa tenetur, 
                        </span>
                    </div>
                </div>

                <div className="col-md-4">
                  <img src={img} alt={event?.title} />
                </div>
            </div>

            <motion.div viewport={{once:true}} initial={{ scale :.6,opacity:0}} whileInView={{scale:1, opacity:1  }} transition={{duration:1.5}} class={style.subscribe}>
              {/* <form onSubmit={sendEmail}>
                <input type="text" placeholder="Enter Your Name" value={toName} onChange={(e) => setToName(e.target.value)} required />
                <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="submit" value="Subscribe" />
                <input type="email" placeholder="Enter Your Email" />
                <input type="submit" value="Subscribe" />
              </form> */}
            </motion.div>
          </div>
    </div>
  </div>
  </>
}

export default LatestEvents
