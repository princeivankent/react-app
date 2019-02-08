import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
