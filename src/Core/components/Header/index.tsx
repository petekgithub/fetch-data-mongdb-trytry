import React from "react";
import styles from "./styles.module.scss";
import Logo from "Core/assets/logo.svg";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

/* - login- signin buttons will develop, not working right now
   - you have to route related page (login/sinup)
*/
const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className= {styles.content}>
        <div className={styles.left}>
          <img src={Logo} alt="ReliefScout" />
        </div> 
        <div className={styles.right}>
          <Link to="/login"><Button className={styles.logInBtn}>Log In</Button></Link>
          <Link to="/register"><Button className={styles.signUpBtn}>Sign Up</Button></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;  