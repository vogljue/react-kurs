import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContainer, HomeContainer, LoginContainer, SignUpContainer } from './components';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
           <AppContainer>
           <Switch>
             <Route exact path="/" component={HomeContainer} />
             <Route path="/login" component={LoginContainer} />
             <Route path="/signup" component={SignUpContainer} />
           </Switch>
           </AppContainer>
          </div>
        </Router>
    );
  }
}

render(<App />, document.getElementById("app"))
