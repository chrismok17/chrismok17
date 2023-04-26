import React from 'react';
import './App.css';
import About from './components/About';
import Links from './components/Links';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <About/>  
      <Projects/>
      <Links/>
    </div>
  );
}

export default App;
