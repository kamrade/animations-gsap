import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router'
import './App.css';

import AppleAnimationPage from './pages/apple-animation';
import TestAnimationPage from './pages/test-animation';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div className="nav-item">Animations playground</div>
        <div className="nav-item"><NavLink className="mobile-navigation-link" to="/a">Apple animation</NavLink></div>
        <div className="nav-item"><NavLink className="mobile-navigation-link" to="/b">Test animation</NavLink></div>
      </div>

      <div className="router-outlet">
        <Route exact path="/" render={() => <Redirect to="a" />} />
        <Switch>
          <Route path="/a" component={ () => (<AppleAnimationPage />)} />
          <Route path="/b" component={ () => (<TestAnimationPage />)} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
