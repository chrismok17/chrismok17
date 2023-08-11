import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/About';
import Links from './components/Links';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <About/>  
      <Projects/>
      <Experience/>
      <Links/>
    </div>
  );
}

export default App;
