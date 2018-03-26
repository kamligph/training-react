import React, { Component } from 'react';
import Projects from './Component/Projects';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecommerce Cart',
          category: 'Web Development'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        Training React App
        <Projects data="awesome-ness" projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
