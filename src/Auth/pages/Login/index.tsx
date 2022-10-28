import React from 'react';
import { useRef, useState, useEffect } from 'react';
import styles from "./styles.module.scss";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@material-ui/core";


const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(true);
  const userRef = useRef<HTMLInputElement>(null);
  const[user, setUser] = useState('');
  const[pwd, setPwd] = useState('');

  useEffect(() => {
    userRef?.current?.focus();
  },[]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      return navigate('/listview');
  }


  return (
    <section>
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
        <Link to="/listview"><Button className={styles.logInBtn}>Log In</Button></Link>
        {error && <span>Wrong email or password!</span>}
      </form>
    </section>
  );
}

export default Login;