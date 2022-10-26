import React from 'react';
import { useRef, useState, useEffect } from 'react';
import styles from "./styles.module.scss";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
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

    //e.preventDefault() - to prevent the default behaviour of the form which would reaload the page
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        return navigate('/listview');
    }


  return (
    <section>
      <p 
        ref={errRef} className={`${errMsg ? styles.errmsg : styles.offscreen}`}
        aria-live="assertive">
        {errMsg}
      </p>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
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
        <button type='submit'>Log In</button>
      </form>
      <p>
        Need an account?<br />
        <span className={styles.line}>
          {/*put router link here */}
          <Link to="/register">Sing Up</Link>
        </span>
      </p>
    </section>

  );
}

export default Login;