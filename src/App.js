import React, { Component } from 'react';
import Projects from './Component/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Training React App
        <Projects data="awesome-ness" />
      </div>
    );
  }
}

export default App;
