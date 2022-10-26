import React, { useMemo } from "react";
import styles from "./styles.module.scss";
import Logo from "Core/assets/logo.svg";
import { Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

/* - login- signin buttons will develop, not working right now
   - you have to route related page (login/sinup)
*/
const Header: React.FC = () => {

  const { pathname } = useLocation();
  console.log("location", location);

  const isLoggedIn = useMemo(() => {
    if (["/listview", "/detailsview"].includes(pathname)) return true;
    else return false; 
  }, [pathname]);

  return (
    <header className={styles.container}>
      <div className= {styles.content}>
        <div className={styles.left}>
          <img src={Logo} alt="ReliefScout" />
        </div> 
        <div className={styles.right}>
          {isLoggedIn ? (
            <Link to="/"><Button className={styles.logInBtn}>Logout</Button></Link>
          ) : (
            <>
            <Link to="/login"><Button className={styles.logInBtn}>Log In</Button></Link>
            <Link to="/register"><Button className={styles.signUpBtn}>Sign Up</Button></Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;  