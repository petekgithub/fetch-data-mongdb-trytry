import React from "react";
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Register: React.FC = () => {

  /* for user input */
   const userRef = useRef();
  /* for error reference */
   const errRef = useRef();

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
  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);



  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if(!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
   console.log(user, pwd);
}

  return (
    <section>
    <p 
      //ref={errRef}
      className={errMsg ? "errmsg" : "offscreen"}
      aria-live="assertive"
    >
    {errMsg}</p>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username: 
        <span className={validName ? "valid" : "hide"}> 
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span className={validName || !user ? "hide" : "invalid"}> 
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </label>
      <input 
        type="text"
        id="username"
       // ref={userRef}
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
        className={userFocus && user && !validName ? "instructions" : "offscreen"}
      >
      <FontAwesomeIcon icon={faInfoCircle } />
        4 to 24 characters. <br />
        Must begin with a letter. <br />
        Letters, numbers, underscores, hyphens allowed.
      </p>

      <label htmlFor="password">
        Password: 
        <span className={validPwd ? "valid" : "hide"}> 
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span className={validPwd || !pwd ? "hide" : "invalid"}> 
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
        className={pwdFocus && user && !validPwd ? "instructions" : "offscreen"}
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
        <span className={validMatch && matchPwd ?  "valid" : "hide"}> 
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span className={validMatch || !validMatch ? "hide" : "invalid"}> 
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
        className={matchFocus && user && !validPwd ? "instructions" : "offscreen"}
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
      <span className="line">
        {/*put router link here */}
        <a href="#">Sign In</a>
      </span>
    </p>
  </section>     
  )
}

export default Register;