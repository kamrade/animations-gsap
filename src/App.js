import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router'
import './App.css';

import AppleAnimationPage from './pages/apple-animation';
import TestAnimationPage from './pages/test-animation';
import ReactGsapPage from './pages/react-gsap';
import CardpayGsapPage from './pages/cardpay-gsap';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div className="nav-item">Animations playground</div>
        <div className="nav-item"><NavLink className="navigation-link" to="/a">Apple animation</NavLink></div>
        <div className="nav-item"><NavLink className="navigation-link" to="/b">Test animation</NavLink></div>
        <div className="nav-item"><NavLink className="navigation-link" to="/c">React GSAP. React ScrollMagic</NavLink></div>
        <div className="nav-item"><NavLink className="navigation-link" to="/d">Cardpay GSAP</NavLink></div>
      </div>

      <div className="router-outlet">
        <Route exact path="/" render={() => <Redirect to="a" />} />
        <Switch>
          <Route path="/a" component={ () => (<AppleAnimationPage />)} />
          <Route path="/b" component={ () => (<TestAnimationPage />)} />
          <Route path="/c" component={ () => (<ReactGsapPage />)} />
          <Route path="/d" component={ () => (<CardpayGsapPage />)} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
