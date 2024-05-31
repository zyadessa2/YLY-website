import React, { useContext, useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/about/About'
import OurGoals from '../../components/ourGoals/OurGoals'
import News from '../../components/News/News'
import Board from '../../components/Board/Board'
import LatestEvents from '../../components/LatestEvents/LatestEvents'
import Governments from '../../components/Governments/Governments'
import TransitionEffect from '../../components/TransitionEffect'

const Home = () => {

  

  return <>
  <TransitionEffect/>
  <div className="body ">
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
