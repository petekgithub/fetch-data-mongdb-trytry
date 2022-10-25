import React from "react";
import styles from "./styles.module.scss";

const Header: React.FC = () => {

  return (
    <header className={styles.container}> 
    <h1>header</h1>
      <div className={styles.content}>
      <div className={styles.logo}>
      </div>
      <nav>
        <span>ListView</span>
        <span>DetailView</span>
      </nav>
      </div>
    </header>
  )
}

export default Header;