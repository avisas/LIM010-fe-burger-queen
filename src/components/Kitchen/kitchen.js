import React from 'react';
import logo from '../../img/logo.png';
import './kitchen.css';

function kitchen() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Burger Queen</p>
      </div>
      <div className="App-body">
        <p>Este es el kitchen</p>
      </div>
    </div>
  );
}

export default kitchen;
