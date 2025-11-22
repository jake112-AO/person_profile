import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Skills from './components/Skills.jsx'
import Aurora from './components/Aurora';
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
function App() {
  return (
    <>
    <Aurora
    colorStops={['#00ffcc', '#a855f7', '#3b82f6']}
    blend={0.5}
    amplitude={1.0}
    speed={0.5}
    />
    <div>
      <Navbar></Navbar>
    </div>
    <div className='page-container'>
    <section className="page-section" id="userinfo">
      <About>
      </About>
    </section>
    <section className="page-section" id="skills">
      <Skills id="skills">
      </Skills>
    </section>
    <section className="page-section" id="contact">

      <Contact>

      </Contact>
    </section>
    </div>
    </>
  );
}

export default App;
