import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchForm from './Pages/Result.js';



const App = () =>
  <Router>
      <div className="App">
      <Switch>
      <Route exact path="/" component={SearchForm} />
      </Switch>
      </div>
   </Router>   
export default App;
