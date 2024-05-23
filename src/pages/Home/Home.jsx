import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/about/About'
import OurGoals from '../../components/ourGoals/OurGoals'
import News from '../../components/News/News'
import Board from '../../components/Board/Board'
import LatestEvents from '../../components/LatestEvents/LatestEvents'
import Governments from '../../components/Governments/Governments'
import TransitionEffect from '../../components/TransitionEffect'

const Home = () => {

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fadeOutLoading = () => {
  //     setIsLoading(false);
  //   };

  //   const timer = setTimeout(fadeOutLoading, 1000);

  //   // إذا كانت تعمل على شاشة التوقف فقط، يمكنك استخدام clearTimeout هنا
  //   // return () => clearTimeout(timer);

  //   // لإزالة الحدث بعد تنفيذه، قم بإعادة الفعلية
  //   // return () => {
  //   //   $('.sk-cube-grid').off('fadeOut', fadeOutLoading);
  //   //   $('#lauding').off('fadeOut', fadeOutLoading);
  //   // };

  //   // اذا كان يحتاج الى وظائف اضافية مع التحميل، يمكنك تضمينها هنا، على سبيل المثال:
  //   // $('.sk-cube-grid').fadeOut(1000);
  //   // $('#lauding').fadeOut(1000);

  // }, []);


  return <>
  <TransitionEffect/>
  <div className="body">
      <Hero/>
      <About/>
      <Governments/>
      <OurGoals/>
      <News/>
      <LatestEvents/>
      <Board/>
    </div>
    </>
}

export default Home
