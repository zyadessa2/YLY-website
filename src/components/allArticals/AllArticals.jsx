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

      if (!articles) return <>
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
      <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="Articles" ClassName={`${style.titleAbout} mb-4 mt-4  text-dark`} /></motion.h2>
        {Flag?<>
          <div class={`${style.container} row d-flex justify-content-center g-3 m-auto align-items-center `}>
          {articles.map(article => (
        <motion.div key={article.id} className={`${style.box} col-md-3 m-3`}>
            {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(article.id)}>Delete</button>:<></>}
          {/* <Link className='text-decoration-none' to={`/articalDetails/${article.id}`}>
          <img src={article.coverImageUrl} alt={article.title} />
          <div className={style.content}>
            <h3>{article.title}</h3>
            <p>{article.briefParagraph.split(' ').slice(0, 27).join(' ') + '...'}</p>
          </div>
            
          <div className={`${style.info} d-flex align-items-center justify-content-between`}>
            <span className='fw-bold text-white'>Write By <span className='text-danger fw-bold'>{article.writerName}</span></span>
            <Link to={`/articalDetails/${article.id}`}>Read more</Link>
          </div>
          
          </Link> */}
          <Link className='text-decoration-none' to={`/articalDetails/${article.id}`}>
                      <div class="w-100 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img class="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={article.coverImageUrl}/>
                        <div class="p-4">
                            <h2 class="text-xl  font-semibold">{article.title}</h2>
                            <p class="text-gray-600">{article.briefParagraph.split(' ').slice(0, 27).join(' ') + '...'}</p>
                            <div class="flex justify-between items-center mt-4">
                              <Link to={`/articalDetails/${article.id}`}><button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Read More</button></Link>
                            </div>
                        </div>
                      </div>
                    </Link>
        </motion.div>
          ))}
          
        </div>
        </> :
        <>
        <div class={`${style.container} row d-flex justify-content-center g-3 m-auto align-items-center `}>
        <div className="col-md-12">
            {articles.map(article => (
            <motion.div key={article.id} className={`${style.box} col-md-3 m-3`}>
                {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(article.id)}>Delete</button>:<></>}
              
              <Link className='text-decoration-none' to={`/articalDetails/${article.id}`}>
                          <div class="w-100 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                            <img class="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={article.coverImageUrl}/>
                            <div class="p-4">
                                <h2 class="text-xl  font-semibold">{article.title}</h2>
                                <p class="text-gray-600">{article.briefParagraph.split(' ').slice(0, 27).join(' ') + '...'}</p>
                                <div class="flex justify-between items-center mt-4">
                                  <Link to={`/articalDetails/${article.id}`}><button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Read More</button></Link>
                                </div>
                            </div>
                          </div>
                        </Link>
            </motion.div>
              ))}
        </div>
          
          
        </div>
        </>
        
        // <>
        // <div class={`${style.container} container m-auto row d-flex justify-content-between align-items-center`}>
        // <Slider {...settings} >
        // {articles.map(article => (
        // <motion.div
        //   key={article.id}
        //   // viewport={{ once: true }}
        //   // initial={{ x: -50, opacity: 0 }}
        //   // whileInView={{ x: 0, opacity: 1 }}
        //   // transition={{ duration: 1.4 }}
        //   className={`${style.box} col-md-3 m-4`}
        // >
        //     {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(article.id)}>Delete</button>:<></>}
        //     <Link className='text-decoration-none' to={`/articalDetails/${article.id}`}>
        //   <img src={article.coverImageUrl} alt={article.title} />
        //   <div className={style.content}>
        //     <h3>{article.title}</h3>
        //     <p>{article.briefParagraph}</p>
        //   </div>
        //   <div className={`${style.info} d-flex align-items-center justify-content-between`}>
        //     <span className='fw-bold text-white'>Write By <span className='text-danger fw-bold'>{article.writerName}</span></span>
        //     <Link to={`/articalDetails/${article.id}`}>Read more</Link>
        //   </div>
        //   </Link>
        // </motion.div>
        // ))}
       
        // </Slider>
        // </div>
        // </>
        }
        
      </div>
    </>
}

export default AllArticals
