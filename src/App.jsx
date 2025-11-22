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
    <div>
      <About>

      </About>
    </div>
    <div>
      <Skills>
      </Skills>
    </div>
    <div>
      <Contact>
        
      </Contact>
    </div>
    </>
  );
}

export default App;
