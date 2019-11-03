import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
// import './App.css';
import Login from './components/Login/login.js';
import RegisterOrder from './components/RegisterOrder/registerorder.js';
import Kitchen from './components/Kitchen/kitchen.js';
import RegisterUser from './components/RegisterUser/registeruser.js';

const App = () =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/homePage" component={HomePage}></Route>
        <Route exact path="/order" component={Order}></Route>
        <Route exact path="/kitchen" component={Kitchen}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
