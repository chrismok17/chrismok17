import React from 'react';
import './App.css';
import About from './components/About';
import Links from './components/Links';
import Projects from './components/Projects';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <About/>  
      <Projects/>
      <Links/>
    </div>
  );
}

export default App;
