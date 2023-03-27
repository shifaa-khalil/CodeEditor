import { useRef, useState, useEffect, useContext } from "react";
import "./index.css";
const Register = () => {
    const userRef = useRef();
const errRef = useRef();
const [user, setUser] = useState("");
const [validName, setValidName] = useState(false);
const [userFocus, setUserFocus] = useState(false);
const [pwd, setPwd] = useState("");
const [validPwd, setValidPwd] = useState(false);
const [pwdFocus, setPwdFocus] = useState(false);
const [matchPwd, setMatchPwd] = useState("");
const [validMatch, setValidMatch] = useState(false);
const [matchFocus, setMatchFocus] = useState(false);
const [errMsg, setErrMsg] = useState("");
const [success, setSuccess] = useState(false);
    return (
      <>
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Register your account</h1>
          <form >
            <label htmlFor="username">
              Username:
              
            
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p id="uidnote">
             
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
            <label htmlFor="password">
              Password:
              
              
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={
                pwdFocus && !validPwd
                  ? "instructions"
                  : "offscreen"
              }
            >
              
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a
              number and a special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">
                !
              </span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
            <label htmlFor="confirm_pwd">
              Confirm Password:
              
              
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch
                  ? "instructions"
                  : "offscreen"
              }
            >
              
              Must match the first password input field.
            </p>
            <button
              disabled={
                !validName || !validPwd || !validMatch
                  ? true
                  : false
              }
            >
              Sign Up
            </button>
          </form>
          <p>
            Already registered?
            <br />
            <span className="line">
              {/*put router link here*/}
              {/* <a href="#">Sign In</a> */}
            </span>
          </p>
        </section>
        
      </>
    );
  };
  
  export default Register;