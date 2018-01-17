import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Carousel />
      </div>
    );
  }
}

export default App;
