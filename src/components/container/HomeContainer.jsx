import React, { Component } from 'react';
import { HomeWidget } from '../presentation';

class HomeContainer extends Component {
  constructor(props)
  {
    super(props);
  }

  render() {
      return (<HomeWidget />);
  }
}

export default HomeContainer;