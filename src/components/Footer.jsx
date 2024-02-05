import React from "react";
import "../styles/Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <a href="https://github.com/Abstractl0gic" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://twitter.com/AbstractLogic" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/zachary-lyons-b730a9149/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2024</p>
    </div>
  );
}

export default Footer;