import React from 'react'
import ProjectItem from '../components/ProjectItem';
import TravelApp from '../images/Travel.png';
import Collabic from '../images/Collabic.png';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projectItems'>
      <ProjectItem name="Travel Agent App" image={TravelApp}/>
      <ProjectItem name="Collabic" image={Collabic}/>
      </div>
      </div>
  )
}

export default Projects
