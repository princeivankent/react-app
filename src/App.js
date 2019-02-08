import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import Header from './includes/Header';
import Home from './components/home/Home';
import Task from './components/task/Task';
import Profile from './components/profile/Profile';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Header />
          </header>
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/tasks" component={Task}/>
              <Route path="/profile/:profile_id" component={Profile}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
