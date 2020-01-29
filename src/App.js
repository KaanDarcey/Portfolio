import React from 'react';
import './App.scss';
import Nav from './comps/Nav';
import Hero from './comps/Hero';
import Project from './comps/Projects';
import About from './comps/About';

function App() {
  return (
    <div style={{overflow:'hidden'}}>
      <Nav />
      <Hero />
      <Project />
      <About />
    </div>
  );
}

export default App;
