import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import insertStyleTag from './utils/dom/insert-style-tag';

import navLinks from './nav-links';
import HeaderIndex from './headers/HeaderIndex';

import './App.css';

function App() {

  insertStyleTag('https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css');
  insertStyleTag('https://use.fontawesome.com/releases/v5.8.2/css/all.css');

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              {navLinks.map((navLink, index) => (
                <li key={index}>
                  <NavLink activeClassName="active" exact to={navLink.path}>
                    {navLink.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            {navLinks.map((navLink, index) => (
              <Route key={index} path={navLink.path} exact component={navLink.componentHeader || HeaderIndex} />
            ))}
          </div>
        </header>
        <div>
          {navLinks.map((navLink, index) => navLink.componentBody ? (
            <Route key={index} path={navLink.path} exact component={navLink.componentBody} />
          ) : null)}
        </div>
        <footer className="App-footer p-4">
          <nav>
            <ul className="mb-0">
              {navLinks.map((navLink, index) => (
                <li key={index}>
                  <NavLink activeClassName="active" exact to={navLink.path}>
                    {navLink.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </div>
    </Router>
  );
}

export default App;
