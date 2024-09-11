import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import WorkExperience from './Components/WorkExperience/WorkExperience'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import MyProject from './Components/MyProject/MyProject'

const App = () => {

  const handleScroll = (id) => {
    if (id === 'home') {
      // Scroll to the top for Home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);
      const offset = 100;  // Height of your navbar or desired offset
      const yOffset = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Navbar handleScroll={handleScroll}/>
      <div className="container">
        <Hero/>
        <About/>
        <Skills/>
        <WorkExperience/>
        <MyProject/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App