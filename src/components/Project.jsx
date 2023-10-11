import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="project">
      <img src={project.imageUrl} alt={project.title} />
      <h3>{project.title}</h3>
      <div className="project-links">
        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default Project;
