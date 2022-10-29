import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import styles from "./styles.module.scss";


const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.socialMedia}>
          <a href="https://www.instagram.com/">
            <InstagramIcon />
          </a>
          <a href="https://twitter.com/">
            <TwitterIcon />
          </a>
          <a href="https://github.com/">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>©2022 ReliefScout · All Right Reserved</div>
  </footer>
  )
}

export default Footer;