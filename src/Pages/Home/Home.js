import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from './Components/Hero'
import Intro from './Components/Intro'
import SkillsBrief from './Components/SkillsBrief'
import Resume from './Components/Resume'
import Experience from './Components/Experience/Experience'

const Home = () => {
  return (
    <>
    <div>
     <Navbar/> 
     <Hero/>
     <Intro/>
     <Experience/>
     <SkillsBrief/>
     <Resume/>
    </div>
    
    </>
  )
}

export default Home