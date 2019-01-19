import React, { Component } from 'react';
import { HomeWidget } from '../presentation';

class HomeContainer extends Component {
  constructor(props)
  {
    super(props);
        this.state = {
            expanded: null,
        }
        this.handleChangePanel = this.handleChangePanel.bind(this);
  }
  
  handleChangePanel = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
      return (<HomeWidget 
      expanded={this.state.expanded}
      handleChangePanel={this.handleChangePanel} />);
  }
}

export default HomeContainer;