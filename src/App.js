import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import insertStyleTag from './utils/dom/insert-style-tag';

import HeaderIndex from './headers/HeaderIndex';
import HeaderExample01 from './headers/HeaderExample01';

import Index from './pages/Index';
import Example01 from './pages/Example01';

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
              <li>
                <NavLink activeClass="active" exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink activeClass="active" exact to="/example-one/">Ejemple One</NavLink>
              </li>
              <li>
                <NavLink activeClass="active" exact to="/example-two/">Ejemple Two</NavLink>
              </li>
            </ul>
          </nav>
          <div>
            <Route path="/" exact component={HeaderIndex} />
            <Route path="/example-one" component={HeaderExample01} />
          </div>
        </header>
        <div>
          <Route path="/" exact component={Index} />
          <Route path="/example-one" component={Example01} />
        </div>
      </div>
    </Router>
  );
}

export default App;
