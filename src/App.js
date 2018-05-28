import React, { Component } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import Projects from './Component/Projects';
import AddProject from './Component/AddProject';
import Todos from './Component/Todos';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodos() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        this.setState({todos: response.data}, () => {
          // console.log(this.state.todos); 
        });
      })
      .catch(function (error) {
        // console.log(error);
      });
  }

  getProjects() {
    this.setState(
      {
        projects: [
          {
            id: uuid.v4(),
            title: 'Business Website',
            category: 'Web Design'
          },
          {
            id: uuid.v4(),
            title: 'Social App',
            category: 'Mobile Development'
          },
          {
            id: uuid.v4(),
            title: 'Ecommerce Cart',
            category: 'Web Development'
          }
        ]
      }
    )
  }

  /**
   * https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
   */
  componentDidMount() {
    this.getProjects();
    this.getTodos();
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    projects = projects.filter((item) => {
      return item.id !== id;
    })
    this.setState({projects: projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject projectState={this.state.projects} addProject={this.handleAddProject.bind(this)} />
        <Projects data="awesome-ness" projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr/>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
