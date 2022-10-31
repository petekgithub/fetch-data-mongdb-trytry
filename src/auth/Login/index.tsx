import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
//import AuthContext from 'context/AuthProvider';
import { Button } from "@material-ui/core";
import React from 'react';
import styles from "./styles.module.scss";
import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useSignIn } from 'react-auth-kit';

// will check ! Need login check and see cookie on applicaiton !!

const LOGIN_URL = "http://localhost:5000/login";

const Login = (props:any) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const [passwordType, setPasswordType] = useState("password");

  const handleSubmit = async (values: any) => {
      console.log("values", values);
      setError("");

      try {
        const response = await axios.post(
          LOGIN_URL,
          values
        );

        signIn({
          token: response.data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { username: values.username },
        });
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
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  
  return (
    <div className={styles.container}>
      <h1>WELCOME</h1>
      <br />
      <br />
      <div className={styles.innerContainer}>
        <form onSubmit={handleSubmit}>
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
          <Link to="/listview">
            <Button 
            className={styles.logInBtn} 
            // // isLoading={formik.isSubmitting}
            >
            Log In
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;