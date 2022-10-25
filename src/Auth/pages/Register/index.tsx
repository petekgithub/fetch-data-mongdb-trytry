import React from "react";
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "api/axios";
import styles from "./styles.module.scss";


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// end pointfor registration in our backend api
const REGISTER_URL = '/register';

const Register: React.FC = () => {

  /* for user input */
   const userRef = useRef<HTMLInputElement>(null);
  /* for error reference */
   const errRef = useRef<HTMLInputElement>(null);

  /* user state and this will be tied to the user input */
  const [user, setUser] = useState('');
  /* this is boolean which means this is valid name or not. */
  const [validName, setValidName] = useState(false);
  /* we have focus on input field or not */
  const [userFocus, setUserFocus] = useState(false);

  /* states for the pass field*/
  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  /* states for the pass match field*/
  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  /*state for possible error msg*/
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

  // focus components loads and username input
    useEffect(() => {
     userRef?.current?.focus();
    }, []);

    /*validate the user name */
    useEffect(() => {
      const result = USER_REGEX.test(user);
      console.log(result);
      console.log(user);
      setValidName(result);
    }, [user]);
  
    /*useEffect for the password */
  useEffect(() => {
    const result = (PWD_REGEX.test(pwd));
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    //compare valid match or not
      setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  /* useEffect for error message*/
  useEffect(() => {
      setErrMsg('');
  }, [user, pwd, matchPwd]);


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if(!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(REGISTER_URL, 
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response));
      setSuccess(true);
      // clear input fields
    } catch (err:any) {
      if (!err?.response) {
          setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
         setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Faied');
      }
      errRef?.current?.focus();
    }
}

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
    <section>
    <p 
      ref={errRef}
      className={`${errMsg ? styles.errmsg : styles.offscreen}`}
      aria-live="assertive"
    >
    {errMsg}</p>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username: 
        <span className={`${validName ? styles.valid : styles.hide}`}> 
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span className={`${validName || !user ? styles.hide : styles.invalid}`}> 
          <FontAwesomeIcon style={{color: `red`}} icon={faTimes} />
        </span>
      </label>
      <input 
        type="text"
        id="username"
        ref={userRef}
        autoComplete = "off"
        onChange={(e)=> setUser(e.target.value)}
        required
        aria-invalid={validName ? "false" : "true"}        
        aria-describedby="uidnote"
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
      />
      <p
        id="uidnote"
        className={`${userFocus && user && !validName ? styles.instructions : styles.offscreen}`}
      >
      <FontAwesomeIcon icon={faInfoCircle } />
        4 to 24 characters. <br />
        Must begin with a letter. <br />
        Letters, numbers, underscores, hyphens allowed.
      </p>

      <label htmlFor="password">
        Password: 
        <span className={`${validPwd ? styles.valid : styles.hide}`}> 
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span className={`${validPwd || !pwd ? styles.hide : styles.invalid}`}> 
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </label>
      <input 
        type="password"
        id="password"
        onChange={(e)=> setPwd(e.target.value)}
        required
        aria-invalid={validPwd ? "false" : "true"}        
        aria-describedby="pwdnote"
        onFocus={() => setPwdFocus(true)}
        onBlur={() => setPwdFocus(false)}
      />
      <p
        id="pwdnote"
        className={`${pwdFocus && user && !validPwd ? styles.instructions : styles.offscreen}`}
      >
      <FontAwesomeIcon icon={faInfoCircle } />
        8 to 24 characters. <br />
        Must include uppercase and lowercase letters, a number and a special character. <br />
        Allowed special characters: 
          <span aria-label="exclamation mark">!</span>
          <span aria-label="at symbol">@</span>
          <span aria-label="hashtag">#</span>
          <span aria-label="dollar sign">$</span>
          <span aria-label="percent">%</span>
      </p>

      <label htmlFor="confirm_pwd">
        Confirm Password: 
        <span className={`${validMatch && matchPwd ?  styles.valid : styles.hide}`}> 
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span className={`${validMatch || !validMatch ? styles.hide : styles.invalid}`}> 
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </label>
      <input 
        type="password"
        id="confirm_pwd"
        onChange={(e)=> setMatchPwd(e.target.value)}
        required
        aria-invalid={validPwd ? "false" : "true"}        
        aria-describedby="confirmnote"
        onFocus={() => setMatchFocus(true)}
        onBlur={() => setMatchFocus(false)}
      />
      <p
          id="confirmnote"
          className={`${matchFocus && user && !validPwd ? styles.instructions : styles.offscreen}`}
        >
        <FontAwesomeIcon icon={faInfoCircle } />
         Must match the first password input field.
        </p>
        <button
          disabled={!validName || !validPwd || !validMatch ? true : false}
        >
        Sign Up</button>
      </form>
      <p>
        Already registered?<br />
        <span className={styles.line}>
          {/*put router link here */}
          <a href="#">Sign In</a>
        </span>
      </p>
    </section>     
    )}    
    </>
  )
}

export default Register;