import React from "react";
import "../styles/Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <GitHubIcon />
        <TwitterIcon />
        <LinkedInIcon />
      </div>
      <p> &copy; 2023</p>
    </div>
  );
}

export default Footer;