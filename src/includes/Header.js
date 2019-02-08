import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <div className="container">
          <NavLink className="navbar-brand" to="/">React</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item" activeclassname='is-active'>
                <NavLink className="nav-link" exact={true} to="/home">Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item" activeclassname='is-active'>
                <NavLink className="nav-link" to="/tasks">Tasks</NavLink>
              </li>
              <li className="nav-item" activeclassname='is-active'>
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;