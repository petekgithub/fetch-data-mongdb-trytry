/* eslint-disable react/react-in-jsx-scope */
import styles from "./styles.module.scss";


const Footer: React.FC = () => {
  return (
    <footer className= {styles.container}>
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <div className={styles.col}>
            <a href="mailto:help@frybix.com">
              help@frybix.com
            </a>
            <a href="+1 234 456 678 89">
              +1 234 456 678 89
            </a>
          </div>
          <div className={styles.col}>
            <h4>Links</h4>
            <a>Home</a>
            <a>About Us</a>
            <a>Bookings</a>
            <a>Blog</a>
          </div>

        </div>
        <div className={styles.copyright}>Copyright 2022 uifry.com all rights reserved</div> 
      </div>
    </footer>
  )
}

export default Footer;