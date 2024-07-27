import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import AnimatedText from '../AnimatedText'
import style from './News.module.css'
import Slider from 'react-slick'
import img from '../../images/20230308_085330.webp'
import { Link } from 'react-router-dom'
import { db } from '../../firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext'

const News = () => {
  const [articles, setArticles] = useState([]);
  const { flagAdmin  } = useContext(AuthContext)
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
      
      const displayedArticles = articles.slice(0, 5);

      return  <>
      <div className={`${style.articles} articals`} id="news">
        <motion.h2 viewport={{ once: true }} initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1.4 }}>
          <AnimatedText text="Articles" ClassName={`${style.titleAbout} mb-4 mt-4 text-dark`} />
        </motion.h2>
        {/* <div class="articles" id="articles">
      <h2 class="main-title">Articles</h2>
      <div class="container">
        <div class="box">
          <img src="images/cat-01.jpg" alt=""/>
          <div class="content">
            <h3>text title</h3>
            <p>Lorem ipsum dolor, sit amet cipisicing elit. Maxime sapiente repudiandae incidunt cupiditate</p>
          </div>
          <div class="info">
            <a href="#">Read more</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div class="box">
          <img src="images/cat-02.jpg" alt=""/>
          <div class="content">
            <h3>text title</h3>
            <p>Lorem ipsum dolor, sit amet cipisicing elit. Maxime sapiente repudiandae incidunt cupiditate</p>
          </div>
          <div class="info">
            <a href="#">Read more</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div class="box">
          <img src="images/cat-03.jpg" alt=""/>
          <div class="content">
            <h3>text title</h3>
            <p>Lorem ipsum dolor, sit amet cipisicing elit. Maxime sapiente repudiandae incidunt cupiditate</p>
          </div>
          <div class="info">
            <a href="#">Read more</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div class="box">
          <img src="images/cat-04.jpg" alt=""/>
          <div class="content">
            <h3>text title</h3>
            <p>Lorem ipsum dolor, sit amet cipisicing elit. Maxime sapiente repudiandae incidunt cupiditate</p>
          </div>
          <div class="info">
            <a href="#">Read more</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div class="box">
          <img src="images/cat-01.jpg" alt=""/>
          <div class="content">
            <h3>text title</h3>
            <p>Lorem ipsum dolor, sit amet cipisicing elit. Maxime sapiente repudiandae incidunt cupiditate</p>
          </div>
          <div class="info">
            <a href="#">Read more</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div class="box">
          <img src="images/cat-02.jpg" alt=""/>
          <div class="content">
            <h3>text title</h3>
            <p>Lorem ipsum dolor, sit amet cipisicing elit. Maxime sapiente repudiandae incidunt cupiditate</p>
          </div>
          <div class="info">
            <a href="#">Read more</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div class="box">
          <img src="images/cat-03.jpg" alt=""/>
          <div class="content">
            <h3>text title</h3>
            <p>Lorem ipsum dolor, sit amet cipisicing elit. Maxime sapiente repudiandae incidunt cupiditate</p>
          </div>
          <div class="info">
            <a href="#">Read more</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div class="box">
          <img src="images/cat-04.jpg" alt=""/>
          <div class="content">
            <h3>text title</h3>
            <p>Lorem ipsum dolor, sit amet cipisicing elit. Maxime sapiente repudiandae incidunt cupiditate</p>
          </div>
          <div class="info">
            <a href="#">Read more</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
    </div> */}
        <div className={`${style.container}   m-auto row justify-content-center align-items-center`}>
                {displayedArticles.map(article => (
                  <motion.div
                    key={article.id}
                    className={`${style.box} col-md-3 m-3`}
                  >
                    {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(article.id)}>Delete</button>:<></>}
                    <Link className='text-decoration-none' to={`/articalDetails/${article.id}`}>
                    {/* <div class={style.box}>
                      <img src={article.coverImageUrl} alt=""/>
                      <div class={style.content}>
                        <h3>text title</h3>
                        <p>Lorem ipsum dolor, sit amet cipisicing elit. Maxime sapiente repudiandae incidunt cupiditate</p>
                      </div>
                      <div class={style.info}>
                        <a href="#">Read more</a>
                        <i class="fas fa-long-arrow-alt-right"></i>
                      </div>
                    </div> */}
                      <div class="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img class="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={article.coverImageUrl}/>
                        <div class="p-4">
                            <h2 class="text-xl  font-semibold">Beautiful Card</h2>
                            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet tellus ornare tincidunt.</p>
                            <div class="flex justify-between items-center mt-4">
                                <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Read More</button>
                            </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              <button className=' w-100 mt-5'>
                {/* <Link className='btn btn-primary w-25 text-white text-decoration-none' to={'allArticals'}>Read More</Link> */}
                <Link><button
  class="relative py-3 px-12 text-black text-base font-bold nded-full overflow-hidden bg-light rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0" to={'allArticals'}>
  ALL Articals!
</button>
</Link>
              </button>
            </div>
        {/* {Flag ? (
          <>
            <div className={`${style.container} row d-flex justify-content-center g-3 m-auto align-items-center container`}>
              {displayedArticles.map(article => (
                <motion.div
                  key={article.id}
                  // viewport={{ once: true }}
                  // initial={{ x: -50, opacity: 0 }}
                  // whileInView={{ x: 0, opacity: 1 }}
                  // transition={{ duration: 1.4 }}
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
              <button className='btn btn-primary w-25'>
                <Link className='text-white text-decoration-none' to={'allArticals'}>Read More</Link>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={`${style.container} container m-auto row d-flex flex-col justify-content-between align-items-center`}>
              <Slider {...settings}>
                {displayedArticles.map(article => (
                  <motion.div
                    key={article.id}
                    // viewport={{ once: true }}
                    // initial={{ x: -50, opacity: 0 }}
                    // whileInView={{ x: 0, opacity: 1 }}
                    // transition={{ duration: 1.4 }}
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
              <button className='btn btn-primary w-50 mt-5'>
                <Link className='text-white text-decoration-none' to={'allArticals'}>Read More</Link>
              </button>
            </div>
            
          </>
        )} */}
      </div>
    </>
}

export default News
