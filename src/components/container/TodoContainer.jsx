import React, { Component } from 'react';
import { TodoWidget } from '../presentation';

class TodoContainer extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      todos: []
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => this.setState({ todos: data }));
  }
  
  render() {
      return (<TodoWidget todos={this.state.todos} /> );
  }
}

export default TodoContainer;