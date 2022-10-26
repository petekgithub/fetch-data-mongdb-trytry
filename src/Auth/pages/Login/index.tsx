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


  /*
    value={user}- user state in here, this makes this controlled input 
    if you're going to clear the inputs upon submission
   */

  return (
    <section>
      <p 
      ref={errRef} className={`${errMsg ? styles.errmsg : styles.offscreen}`}
      aria-live="assertive">
      {errMsg}</p>
      <h1>Log In</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text" 
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user} 
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password" 
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd} 
          required
        />
        <button>Log In</button>
      </form>
      <p>
        Need an account?<br />
        <span className={styles.line}>
          {/*put router link here */}
          <a href="#">Sing Up</a>
        </span>
      </p>
    </section>
  );
}

export default Login;