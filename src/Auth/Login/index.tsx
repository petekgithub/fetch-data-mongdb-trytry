import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';

import AuthContext from 'context/AuthProvider';
import { Button } from "@material-ui/core";
import React from 'react';
import axios from 'api/axios';
import styles from "./styles.module.scss";

const LOGIN_URL = '/auth';

const Login = () => {
  // if we succesfully authenticate when we loggin we'll set our new auth state and store it in the global context.
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const userRef = useRef<HTMLInputElement>(null);
  const[user, setUser] = useState('');
  const[pwd, setPwd] = useState('');

  useEffect(() => {
    userRef?.current?.focus();
  },[]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      return navigate('/listview');
      try {
        const response = await axios.post(
          LOGIN_URL,
          JSON.stringify({ user, pwd }),
          {
            headers: { 'Content-Type': 'application/json'},
            withCredentials: true
          }
        );
        console.log(JSON.stringify(response?.data));
        console.log(JSON.stringify(response));
        const accesToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        //setAuth({ user, pwd, roles, accesToken });
        setUser('');
        setPwd('');
      } catch (error) {
        // if (!error?.response) {
        //   setError('No server response');
        // } else if (error.response?.status === 400) {
        //   setError('Missing Username or Password');
        // } else if (error.response?.status === 400) {
        //   setError('Unauthorized');
        // }else {
        //   setError('Login Failed');
        // }
      
      }
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
        {error &&  <span className={styles.errorMessage}>Wrong email or password!</span>}
      </form>
    </section>
  );
}

export default Login;