import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import {Login} from './components/Login'
import {Navigation} from './components/Navigation'
import { PrivateRoute } from './components/PrivateRoute'
import {Friends} from './components/Friends'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
      <Switch>
        <PrivateRoute path='/friends' component={Friends}/>
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
