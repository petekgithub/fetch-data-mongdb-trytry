import React from 'react';
import { useRef, useState, useEffect } from 'react';
import styles from "./styles.module.scss";

const Login = () => {

  /* userRef, set the focus first input when the components loads*/
  /* errRef, set the focuson the errors expecially scren reader for a read*/
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);


  const[user, setUser] = useState('');
  const[pwd, setPwd] = useState('');
  const[errMsg, setErrMsg] = useState('');
  const[success, setSuccess] = useState(false);


  /*
    - set first input when the components load, there is nothing on dependency array, only happen when the components load
    - putting the focus() on that user input that will reference userRef
  */ 
  useEffect(() => {
    userRef?.current?.focus();
  },[]);

  //if the user change user state or pass state, error will disappear cuz already read it and they're making their adjustments.
  useEffect(() => {
    setErrMsg('');
  },[user,pwd]);


  return (
    <section>
      <p 
      ref={errRef} className={`${errMsg ? styles.errmsg : styles.offscreen}`}
      aria-live="assertive">
      {errMsg}</p>
      <h1>Sign In</h1>
    </section>
  );
}

export default Login;