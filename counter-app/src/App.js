import React, { Component } from 'react';
import {Route,NavLink,BrowserRouter as Router }from 'react-router-dom';
import CounterApp from './CounterApp';
import BoxApp from './BoxApp';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Router>
          <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <ul className="navbar-nav">
                <a className="navbar-brand">JavaScript</a>
                <li id="link1" className="nav-item">
                    <NavLink exact activeClassName="active" className="nav-link" to="/">Ques1</NavLink>
                </li>
                <li id="link2" className="nav-item">
                    <NavLink activeClassName="active" className="nav-link" to="/box">Ques2</NavLink>
                </li>
            </ul>
          </nav>
          <div className="container">
            <div>
              <Route exact path="/" component={CounterApp} />
              <Route path="/box" component={BoxApp} />
            </div>
          </div>
        </Router>
      </div> 
    );
  }
}

export default App;
