import React, { useContext, useEffect, useRef, useState } from 'react';
import { useScroll } from 'framer-motion';
import { motion } from "framer-motion";
import LiIcon from '../LiIcon';
import style from './ArticalDetails.module.css';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

const Details = ({ info }) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[100%] mx-auto flex flex-col items-center justify-between '>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <p className='fs-4 w-full text-light '>
          {info}
        </p>
      </motion.div>
      {/* <LiIcon reference={ref} /> */}
    </li>
  );
}

const ArticalDetails = () => {
  const {currentUser } = useContext(AuthContext)
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  

  useEffect(() => {
    const fetchArticle = async () => {
      const docRef = doc(db, 'news', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setArticle(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };
    fetchArticle();
  }, [id]);

  if (!article) return <>
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

  return (
    <>
      <div className={style.articalDetails}>
        <div className="row my-5">
          <div className="m-auto col-md-7 col-sm-10">
            <div className="imageCover d-flex flex-col justify-center align-items-center">
              <img className='rounded' src={article.coverImageUrl} alt={article.title} />
            </div>
            <div className="writer text-light">
              <h2>{article.title}</h2>
              <h5 className='h3'>كتب/ {article.writerName}</h5>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="paragraph my-5">
            <div className="row">
              <div className="col-md-8">
                <div ref={ref} className='w-[100%] mx-auto relative lg:w-[100%] md:w-full'>
                  <motion.div 
                    style={{ scaleY: scrollYProgress }}
                    className='dark:bg-light absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' 
                  />
                  <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    {article.paragraphs && article.paragraphs.map((paragraph, index) => (
                      <Details
                        key={index}
                        info={paragraph.text}
                      />
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-7 m-auto">
                {article.paragraphs && article.paragraphs.map((paragraph, index) => (
                  <div className="paragraphImage" key={index}>
                    {paragraph.image && <img src={paragraph.image} alt={`Paragraph ${index + 1}`} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
        <div className="container">
  <div className="paragraph my-5">
    <div className="row">
      {article.paragraphs && article.paragraphs.map((paragraph, index) => (
        <React.Fragment key={index}>
          <div className="col-md-8 col-sm-12 my-5">
            <div className='w-[100%] mx-auto relative lg:w-[100%] md:w-full'>
              {/* <motion.div 
                style={{ scaleY: scrollYProgress }}
                className='dark:bg-light absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' 
              /> */}
              <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details info={paragraph.text} />
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-7 m-auto">
            <div className="paragraphImage">
              {paragraph.image && <img className='rounded' src={paragraph.image} alt={`Paragraph ${index + 1}`} />}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
</div>

      </div>
    </>
  );
}

export default ArticalDetails;