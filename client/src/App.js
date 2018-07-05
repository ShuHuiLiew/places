//Navbar is a class; All class is needed to start with Capital letter
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      </div>
    );
  }
}

export default App;
