import React, { Component } from 'react';
import logo from '../../img/logo.png';
import './login.css';
import { signIn } from '../../index.js';

class Login extends Component {
  state = {
    user: '',
    password: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    signIn(this.state.user, this.state.password)
      .then(() => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    return (
      <div className="Login-user">
        <div className="Login-header">
          <p>Burger Queen</p>
        </div>
        <div className="Login-body">
          <img className="Login-logo" src={logo} alt="logo loginUser" />
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="username" id="user" onChange={this.handleChange} />
            <input type="password" placeholder="password" id="password" onChange={this.handleChange} />
            <button>login</button>
          </form>
        </div>
      </div>
    );
  };
};

export default Login;
