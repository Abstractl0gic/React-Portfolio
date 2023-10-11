import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

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