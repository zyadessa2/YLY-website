import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/about/About'
import OurGoals from '../../components/ourGoals/OurGoals'
import News from '../../components/News/News'
import Board from '../../components/Board/Board'
import LatestEvents from '../../components/LatestEvents/LatestEvents'
import Governments from '../../components/Governments/Governments'

const Home = () => {
  return (
    <div className="backGroung">
      <Hero/>
      <About/>
      <OurGoals/>
      <News/>
      <LatestEvents/>
      <Board/>
      <Governments/>
    </div>
  )
}

export default Home
