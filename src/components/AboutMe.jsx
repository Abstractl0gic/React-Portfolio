import React from 'react';

const AboutMe = () => {
  return (
    <section id="about">
      <div className="profile-picture">
        <img src={process.env.PUBLIC_URL + '/images/Sample.png'} alt="Your Name" />
      </div>
      <div className="bio">
        <h2>About Me</h2>
        <p>
          Hi! I'm Zach Lyons, a passionate web developer with a strong foundation in front-end and back-end technologies. 
          I love creating innovative and user-friendly websites and web applications.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
