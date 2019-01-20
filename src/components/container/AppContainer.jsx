import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { LayoutWidget, TopAppBarWidget, DrawerWidget, MainContentWidget } from '../presentation';
import { HomeContainer, LoginContainer, SignUpContainer, TodoContainer } from '../container';


class AppContainer extends Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    return (
      <LayoutWidget>
        <TopAppBarWidget />
        <DrawerWidget location={this.props.location.pathname} />
        <MainContentWidget>
          <Switch>
             <Route exact path="/" component={HomeContainer} />
             <Route path="/login" component={LoginContainer} />
             <Route path="/signup" component={SignUpContainer} />
             <Route path="/todos" component={TodoContainer} />
           </Switch>
        </MainContentWidget>
      </LayoutWidget>
    );
  }
}

export default AppContainer;