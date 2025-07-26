import React, { useState } from 'react';
import Page1 from './pages/Page1.jsx'
import Page2 from './pages/Page2.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Bottom  from './pages/Bottom.jsx';
import Header from './components/Header.jsx'
import NavBar from './components/NavBar.jsx';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setNavOpen(true)} />
      <NavBar open={navOpen} onClose={() => setNavOpen(false)} />
      <Page1 />
      <Page2 />
      <Skills/>
      <Projects />
      <About />
      <Bottom />
    </>
  );
}

export default App;
