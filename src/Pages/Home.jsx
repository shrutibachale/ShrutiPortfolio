// import React from 'react'
// import Intro from './Intro';
// import Projects from './Projects';
// import Education from './Education';
// import Skills from './Skills';
// import ContactMe from './ContactMe';
// import AboutMe from './AboutMe';
// import Experiences from './Experiences';

// const Home = () => {
//   return (
//     <div >
//       <Intro/>
//       <Skills/>
//       <Projects/>
//       <Experiences/>
//       <AboutMe/>
//       <Education/>
//       <ContactMe/>
//     </div>
//   )
// }

// export default Home

import React from 'react'
import Intro from '../Pages/Intro';
import Projects from '../Pages/Projects';
import Education from '../Pages/Education';
import Skills from '../Pages/Skills';
import ContactMe from '../Pages/ContactMe';
import AboutMe from '../Pages/AboutMe';
import Navbar from '../Components/Navbar';
import Experience from './Experiences';
import Footer from '../Components/Footer';


const Home = () => {
  return (
    <div >
      <Navbar/>
      <Intro/>
      <Projects/>
      <Experience/>
      <Skills/>
      <AboutMe/>
      <Education/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default Home

 