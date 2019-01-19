import React, { Component } from "react";
import { LoginWidget } from '../presentation';

class LoginContainer extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      name: 'Cat in the Hat'
    }   
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
      return (<LoginWidget name={this.state.name} handleChange={this.handleChange}  />);
  }
}

export default LoginContainer;