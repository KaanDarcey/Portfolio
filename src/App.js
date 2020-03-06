import React, {useState} from 'react';
import './App.scss';
import Nav from './comps/Nav';
import Hero from './comps/Hero';
import Project from './comps/Projects';
import About from './comps/About';
import Contact from './comps/Contact';
import ProjectPage from './comps/Projects/ProjectPage';

function App() {

const [showProject, setShowProject] = useState(false);

var projectPop = null;

if(showProject == false){
  projectPop = null;
} else {
  projectPop = <ProjectPage setShowProject={setShowProject}/>
}

  return (
    <div style={{overflow:'hidden'}}>
      <Nav />
      <Hero id='hero'/>
      <Project id='project' setShowProject={setShowProject} />
      <About id='about'/>
      <Contact id='contact'/>
      {projectPop}
    </div>
  );
}

export default App;
