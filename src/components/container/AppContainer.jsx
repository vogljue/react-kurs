import React, { Component } from 'react';
import { TopAppBarWidget, DrawerWidget, LayoutWidget, MainContentWidget } from '../presentation';

class AppContainer extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      selectedIndex: 0,
    }
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };
  
  render() {
    return (
      <LayoutWidget>
        <TopAppBarWidget />
        <DrawerWidget selectedIndex={this.state.selectedIndex} handleListItemClick={this.handleListItemClick} />
        <MainContentWidget content={this.props.children} />
      </LayoutWidget>
    );
  }
}

export default AppContainer;