import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import {Login} from './components/Login'
import {Navigation} from './components/Navigation'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
