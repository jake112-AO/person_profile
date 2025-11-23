import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Skills from './components/Skills.jsx'
import Particles from './components/Particles.jsx';
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Project from './components/Project.jsx'
function App() {
  return (
    <>
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
    <div>
      <Navbar></Navbar>
    </div>
    <div className='page-container'>
    <section className="page-section" id="userinfo">
      <About>
      </About>
    </section>
    <section className="page-section" id="projects">
      <Project>
      </Project>
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
