import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
//import AuthContext from 'context/AuthProvider';
import { Button } from 'antd';
import React from 'react';
import styles from "./styles.module.scss";
import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useSignIn } from 'react-auth-kit';


const LOGIN_URL = "http://localhost:5000/login";

const Login: React.FC = (props:any) => { 
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const signIn = useSignIn();

  const handleSubmit = async (values: any) => {
      console.log("values", values);
      setError("");
//authState, info of the user
      try {
        const response = await axios.post(LOGIN_URL, values);
        console.log("LOGIN_RESPONSE", response.data);
       
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`
        
        navigate('/listview');
        
        // react-auth-kit library: once responsde back, authentication is starts. Authenticate the user, save the credentials, save token, receive back login, 
      } catch (err) {
        if (err && err instanceof AxiosError)
          setError(err.response?.data.message);
        else if (err && err instanceof Error) setError(err.message);
        console.log("Error :", err);
      }
  };
  

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: handleSubmit
  });

  
  return (
    <div className={styles.container}>
      <h1>WELCOME</h1>
      <br />
      <br />
      <div className={styles.innerContainer}>
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
           <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <Button type="primary" htmlType="submit">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;