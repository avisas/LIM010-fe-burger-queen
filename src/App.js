import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/login.js';
import RegisterOrder from './components/RegisterOrder/registerorder.js';
import Kitchen from './components/Kitchen/kitchen.js';
import RegisterUser from './components/RegisterUser/registeruser.js';

const App = () =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/registerorder" component={RegisterOrder}></Route>
        <Route exact path="/kitchen" component={Kitchen}></Route>
        <Route exact path="/registeruser" component={RegisterUser}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
