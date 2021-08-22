import React from 'react';
import logo from './logo.svg';
import './App.css';

export const myApp = () =>{
  return (
    <div className="App">
      <div className="navigation">
        <img src={logo} className="logo" alt="My Logo"></img>
        <div className="navigation-sub">
          <a href="" className="item">About</a>
          <a href="" className="item">Projects</a>
          <a href="" className="item">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default myApp;
