import React from 'react';
import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <div className="home">
      <div className="about">
        <h2> Zachary Lyons</h2>
        <div className="prompt">
          <p>An aspiring web developer looking to build applications to make life easier.</p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, Javascript, BootStrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Bash</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default AboutMe