import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContainer, HomeContainer, LoginContainer, SignUpContainer } from './components';

class App extends Component {
  render() {
    return (
        <Router>
           <Route path="/" component={AppContainer} />
        </Router>
    );
  }
}

render(<App />, document.getElementById("app"))
