import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import ContactMe from "./Pages/ContactMe";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experiences"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {

  return (

    <div className="min-h-screen bg-[#07060a] text-slate-200 antialiased pt-20 ">
      <BrowserRouter>
        <Navbar/>
          <div className="px-5 lg:px-5 ">
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/contactme" element={<ContactMe/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/skills" element={<Skills/>}/>
          </Routes>
          </div>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App