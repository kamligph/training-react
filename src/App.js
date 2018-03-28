import React, { Component } from 'react';
import Projects from './Component/Projects';
import AddProject from './Component/AddProject';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  /**
   * https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
   */
  componentDidMount() {
    this.setState(
      {
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
    )
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects data="awesome-ness" projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
