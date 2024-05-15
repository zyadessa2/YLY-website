import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/about/About'
import OurGoals from '../../components/ourGoals/OurGoals'
import News from '../../components/News/News'
import Board from '../../components/Board/Board'
import LatestEvents from '../../components/LatestEvents/LatestEvents'
import Governments from '../../components/Governments/Governments'

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fadeOutLoading = () => {
      setIsLoading(false);
    };

    const timer = setTimeout(fadeOutLoading, 1000);

    // إذا كانت تعمل على شاشة التوقف فقط، يمكنك استخدام clearTimeout هنا
    // return () => clearTimeout(timer);

    // لإزالة الحدث بعد تنفيذه، قم بإعادة الفعلية
    // return () => {
    //   $('.sk-cube-grid').off('fadeOut', fadeOutLoading);
    //   $('#lauding').off('fadeOut', fadeOutLoading);
    // };

    // اذا كان يحتاج الى وظائف اضافية مع التحميل، يمكنك تضمينها هنا، على سبيل المثال:
    // $('.sk-cube-grid').fadeOut(1000);
    // $('#lauding').fadeOut(1000);

  }, []);


  return <>
  {isLoading?<div id="lauding">
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
    </div>:<div className="backGroung">
      <Hero/>
      <About/>
      <Governments/>
      <OurGoals/>
      <News/>
      <LatestEvents/>
      <Board/>
    </div>}
    

    {/* <div className="overlay"></div> */}
    
    </>
}

export default Home
