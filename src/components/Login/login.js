import React from 'react';
import logo from '../../img/logo.png';
import './login.css';

function Login() {
  return (
    <div className="Login-user">
      <div className="Login-header">
        <img src={logo} className="Login-logo" alt="logo loginUser" />
        <p>Burger Queen</p>
      </div>
      <div className="Login-body">
        <form className="login-form">

        </form>
      </div>
    </div>
  );
}

export default Login;
