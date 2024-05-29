import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import AnimatedText from '../AnimatedText'
import style from './AllArticals.module.css'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { db } from '../../firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext'

const AllArticals = () => {
  const [articles, setArticles] = useState([]);
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
        const fetchArticles = async () => {
          const articlesCollection = collection(db, 'news');
          const articlesSnapshot = await getDocs(articlesCollection);
          const articlesList = articlesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setArticles(articlesList);
        };
        fetchArticles();
      }, []);

      const handleDelete = async (id) => {
        const docRef = doc(db, 'news', id);
    
        await deleteDoc(docRef)
          .then(() => {
            alert("تم حذف الوثيقة بنجاح!");
            setArticles(articles.filter(article => article.id !== id)); // إزالة المقالة من الحالة بعد الحذف
          })
          .catch((error) => {
            alert("حدث خطأ أثناء محاولة حذف الوثيقة:", error);
          });
      }

      if (!articles) return <div>Loading...</div>;
      ;
      
      return <>
      <div class={`${style.articles} articals`} id="news">
      <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="Articles" ClassName={`${style.titleAbout} mb-4 mt-4  text-white`} /></motion.h2>
        {Flag?<>
          <div class={`${style.container} row d-flex justify-content-center g-3 m-auto align-items-center container`}>
          {articles.map(article => (
        <motion.div
          key={article.id}
          viewport={{ once: true }}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4 }}
          className={`${style.box} col-md-3 m-4`}
        >
            {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(article.id)}>Delete</button>:<></>}
          <Link className='text-decoration-none' to={`/articalDetails/${article.id}`}>
          <img src={article.coverImageUrl} alt={article.title} />
          <div className={style.content}>
            <h3>{article.title}</h3>
            <p>{article.briefParagraph}</p>
          </div>
            
          <div className={`${style.info} d-flex align-items-center justify-content-between`}>
            <span className='fw-bold text-white'>Write By <span className='text-danger fw-bold'>{article.writerName}</span></span>
            <Link to={`/articalDetails/${article.id}`}>Read more</Link>
          </div>
          
          </Link>
        </motion.div>
          ))}
          
        </div>
        </> : <>
        <div class={`${style.container} container m-auto row d-flex justify-content-between align-items-center`}>
        <Slider {...settings} >
        {articles.map(article => (
        <motion.div
          key={article.id}
          viewport={{ once: true }}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4 }}
          className={`${style.box} col-md-3 m-4`}
        >
            {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(article.id)}>Delete</button>:<></>}
            <Link className='text-decoration-none' to={`/articalDetails/${article.id}`}>
          <img src={article.coverImageUrl} alt={article.title} />
          <div className={style.content}>
            <h3>{article.title}</h3>
            <p>{article.briefParagraph}</p>
          </div>
          <div className={`${style.info} d-flex align-items-center justify-content-between`}>
            <span className='fw-bold text-white'>Write By <span className='text-danger fw-bold'>{article.writerName}</span></span>
            <Link to={`/articalDetails/${article.id}`}>Read more</Link>
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

export default AllArticals
