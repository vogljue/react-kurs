import React, { Component } from "react";
import { SignUpWidget } from '../presentation';

class SignUpContainer extends Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    return (<SignUpWidget />);
  }
}

export default SignUpContainer;