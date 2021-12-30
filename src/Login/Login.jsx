import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./login.css";
const Login = () => {
  const [path, setPath] = useState("/");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$");
  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    } else {
      setPwdError(false);
    }
  };
  const redirect = () => {
    if (password === "SmartServTest@123") {
      console.log("running");
      setPath("/final");
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <div className="main">
        <div className="top">
          <span>Smart</span>
          <span>Serv</span>
        </div>
        <div className="bottom">
          <form action="">
            <input
              type="text"
              placeholder="Username"
              value={email}
              className="login same"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="password same"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <NavLink to={path}>
              <div
                className="btn"
                onClick={() => {
                  validate();
                  redirect();
                }}
              >
                Login
              </div>
            </NavLink>
            <a href="#login">Forgot our Password?</a>
          </form>
          {emailErr && (
            <p style={{ color: "white" }}>Your Username should be Email</p>
          )}
          {pwdError && (
            <p style={{ color: "white" }}>
              Your password should contain letters
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
