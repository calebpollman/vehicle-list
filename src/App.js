import React, { Component } from 'react';
import Vehicles from './containers/Vehicles';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Vehicles />
      </div>
    );
  }
}

export default App;
