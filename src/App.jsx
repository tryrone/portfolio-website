import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Works from './components/Works';
import Contact from './components/Contact';
import StarsCanvas from './components/StarsCanvas';
// import {About, Contact, Experience, Feedback, Hero, Loader, Navbar, Tech, Works } from './components'
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-background-dark dark">
        <Navbar />
        <Hero />
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        {/* <Feedback/> */}
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App