import React from 'react'
import Intro from './Intro';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';
import Experiences from './Experiences';

const Home = () => {
  return (
    <div >
      <Intro/>
      <Skills/>
      <Projects/>
      <Experiences/>
      <AboutMe/>
      <Education/>
      <ContactMe/>
    </div>
  )
}

export default Home

