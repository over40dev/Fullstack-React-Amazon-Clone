import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <h1>I AM CHECKOUT, SMASH THE LIKE BUTTON</h1>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
