import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

import { inObject } from './../Helpers';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let projectState = this.props.projectState;
    let projectTitle = this.refs.title.value;

    if(this.refs.title.value === '') {
      alert('Title is required.');
      return;
    }
    else if(inObject(projectState, 'title', projectTitle)) {
      alert('Duplicates are not allowed.');
      return;
    }
    else {
      this.setState({
        newProject: {
          id: uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      }, function() {
          this.props.addProject(this.state.newProject);
        }
      );
    }
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option>
      }
    )
    return (
      <div>
        <h3>Add Project</h3>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br/>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br/>
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

AddProject.defaultProps = {
  categories: ['Web Design', 'Web Development', 'Mobile Development']
}

AddProject.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func
}

export default AddProject;
