import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>Download my resume: <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">Resume.pdf</a></p>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React.js, Redux</li>
        <li>Node.js, Express.js</li>
        <li>SQL, MongoDB</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
}

export default Resume;
