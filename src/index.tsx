import React from 'react';
import ReactDOM from 'react-dom';
import  { Home, Projects, Navbar, About, Contact, Background } from './Components'
import reportWebVitals from './reportWebVitals';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Background />
        <Navbar />
        <Home />
        <Route exact path='/Projects'>
          <Projects />
        </Route>
        <Route exact path='/About'>
          <About />
        </Route>
        <Route exact path='/Contact'>
          <Contact />
        </Route>
      </Router>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
