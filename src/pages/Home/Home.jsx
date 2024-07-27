import React, { useContext, useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/about/About'
import OurGoals from '../../components/ourGoals/OurGoals'
import News from '../../components/News/News'
import Board from '../../components/Board/Board'
import LatestEvents from '../../components/LatestEvents/LatestEvents'
import Governments from '../../components/Governments/Governments'
import TransitionEffect from '../../components/TransitionEffect'
import State from '../../components/state/State'

const Home = () => {

  

  return <>
  <TransitionEffect/>
  <div className="body overflow-x-hidden ">
      <Hero/>
      <About/>
      {/* <State/> */}
      {/* <Governments/> */}
      <OurGoals/>
      <News/>
      <LatestEvents/>
      {/* <Board/> */}
    </div>
    </>
}

export default Home
