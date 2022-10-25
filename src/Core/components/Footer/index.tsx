import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";


const Footer: React.FC = () => {
  return (
    <div className="footer">
    <div className="socialMedia">
      <a href="https://www.instagram.com/ptkqt/">
        <InstagramIcon />
      </a>
      <a href="https://twitter.com/Petekqt1">
        <TwitterIcon />
      </a>
      <a href="https://github.com/petekgithub">
        <GitHubIcon />
      </a>
      <a href="https://www.linkedin.com/in/petek-savas-hamitbeyli/">
        <LinkedInIcon />
      </a>
    </div>
    <p> &copy; 2022 Made by Petek.</p>
  </div>
  )
}

export default Footer;