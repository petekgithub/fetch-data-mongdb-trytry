import React from "react";
import styles from "./styles.module.scss";
import Logo from "Core/assets/logo.svg";


const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className= {styles.content}>
        <div className={styles.logo}>
        <img src={Logo} alt="ReliefScout" />
        </div> 
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;