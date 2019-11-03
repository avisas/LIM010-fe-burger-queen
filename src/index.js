import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz0pBBORl0oSm5EtfUuMffxwn51ccPCvs",
  authDomain: "burgerqueen-e600d.firebaseapp.com",
  databaseURL: "https://burgerqueen-e600d.firebaseio.com",
  projectId: "burgerqueen-e600d",
  storageBucket: "burgerqueen-e600d.appspot.com",
  messagingSenderId: "415155745303",
  appId: "1:415155745303:web:36a760855ecc868584e252"
};

firebase.initializeApp(firebaseConfig);
const signIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
const signOut =() => firebase.auth().signOut();

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();

export { signIn, signOut };
