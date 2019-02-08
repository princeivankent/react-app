import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import UnknownPage from './errors/404';
import Header from './includes/Header';
import Home from './components/home/Home';
import Task from './components/task/Task';
import Profile from './components/profile/Profile';

import ProtectedRoute from './protected.route';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={'/react-app'}>
        <div>
          <header>
            <Header />
          </header>
          <div className="container">
            <Switch>
              <Route path="/tasks" component={Task}/>
              <Route path="/home" component={Home}/>
              <ProtectedRoute path="/profile" component={Profile}/>

              <Route path='/unauthorized' component={UnknownPage}/>
              <Redirect from='/' exact to='/home'/>
              {/* <Route component={UnknownPage}/> */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
