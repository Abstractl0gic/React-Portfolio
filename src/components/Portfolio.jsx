import React from 'react';
import Project from './Project';
import TravelImage from '../images/Travel.png';
import CollabicImage from '../images/Collabic.png';

const projects = [
  {
    title: 'Travel Agent App',
    description: 'Description of the Travel Agent App project.',
    imageUrl: TravelImage,
    projectUrl: 'https://coridane.github.io/travelagentapp/',
    technologies: ['React', 'Redux', 'Firebase'],
  },
  {
    title: 'Collabic',
    description: 'Description of the Collabic Project.',
    imageUrl: CollabicImage,
    projectUrl: 'https://glacial-basin-24494-f41b4848533d.herokuapp.com/',
    technologies: ['Node.js', 'Express', 'MongoDB'],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
