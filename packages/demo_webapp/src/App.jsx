import { hot } from 'react-hot-loader';
import React from 'react';
import Example from 'demo_component';
import './App.css';

const message = 'Welcome to demo_webapp';
const App = () => (
  <div className="App">
    <h1>{message}</h1>
    <Example />
  </div>
);

export default hot(module)(App);
