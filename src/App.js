import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
