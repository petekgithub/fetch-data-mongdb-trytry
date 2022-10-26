import React from "react";
import styles from "./styles.module.scss";
import Logo from "Core/assets/logo.svg";
import { Button } from "@material-ui/core";

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
          <Button variant="contained"><a href="/login">Log In</a></Button>
          <Button className={styles.sinUpBtn} variant="contained"><a href="/register">Sign Up</a></Button>
        </div>
      </div>
    </header>
  );
};

export default Header;  