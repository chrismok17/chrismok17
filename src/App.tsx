import React from 'react';
import './App.css';
import About from './components/About';
import Links from './components/Links';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Menu from './components/Menu';
import FadeInSection from './components/FadeInSection';

function App() {
  return (
    <div className="App">
      <Menu/>
      <FadeInSection>
        <About/>  
      </FadeInSection>
      <FadeInSection>
        <Projects/>
      </FadeInSection>
      <FadeInSection>
        <Experience/>
      </FadeInSection>
      <FadeInSection>
        <Links/>
      </FadeInSection>
    </div>
  );
}

export default App;
