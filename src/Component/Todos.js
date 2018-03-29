import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './../Component/TodoItem';

class Todos extends Component {
  render() {
    let todoItems;
    if(this.props.todos) {
      todoItems = this.props.todos.map(
        todo => {
          return (
            <TodoItem key={todo.id} todo={todo} />
          );
        }
      );
    }

    return (
      <div className="Projects">
        <h3>To Dos</h3>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array
}

export default Todos;
