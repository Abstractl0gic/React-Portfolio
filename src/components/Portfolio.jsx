import React from 'react';
import Project from './Project';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    imageUrl: process.env.PUBLIC_URL + '/images/project1.png',
    deployedLink: 'https://example.com/project1',
    githubLink: 'https://github.com/example/project1'
  },
  {
    id: 2,
    title: 'Project 2',
    imageUrl: process.env.PUBLIC_URL + '/images/project2.png',
    deployedLink: 'https://example.com/project2',
    githubLink: 'https://github.com/example/project2'
  },
  // Add more project objects as needed
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
