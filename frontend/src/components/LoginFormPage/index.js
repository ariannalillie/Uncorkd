import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import logo from "../../media/logo.png"
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };

  return (
    <div className="grid-container">
    <div className="image-container"></div>
    <div className='form-page'>
      <h1 className="app-name">Uncorked</h1>
      {/* <img src={logo} alt="Logo" /> */}
      <h2 className="form-header">Welcome back! Please login to your account.</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className='form-items'>
          <div>
          <input
                className="user-input"
                placeholder="Username or Email"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
          </div>
          <div>
          <input
                className="user-input"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
          </div>
          <button className="form-button" type="submit">Log In</button>
          <div>
          <NavLink className='switch-form-link' to="/signup">Don't have an account? Sign up here.</NavLink>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default LoginFormPage;
