import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
import './App.css';

import AppleAnimationPage from './pages/apple-animation/apple-animation';
import TestAnimationPage from './pages/test-animation/test-animation';
import ReactGsapPage from './pages/react-gsap/react-gsap';
import CardpayGsapPage from './pages/cardpay/cardpay-gsap';
import ScrollCardpayPage from './pages/scroll-cardpay/scroll-cardpay';
import ScrollScalePage from './pages/scroll-scale/scroll-scale';

import NavPage from './shared/nav-page/nav-page';


const navMenu = [{
  path: '/a',
  title: 'Apple animation'
}, {
  path: '/b',
  title: 'Test animation'
}, {
  path: '/c',
  title: 'React GSAP. React ScrollMagic'
}, {
  path: '/d',
  title: 'Cardpay GSAP'
}, {
  path: '/e',
  title: 'Scroll Cardpay'
}, {
  path: '/f',
  title: 'Scroll scale'
}];


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { nav: false };
  }

  toggleNav = () => {
    this.setState({ nav: !this.state.nav });
  }

  closeNav = () => {
    this.setState({ nav: false });
  }

  render() {
    return (
      <div className="App">

        <div className="nav-toggler">
          <button onClick={this.toggleNav} className="btn btn-nav-toggler">Menu</button>
        </div>

        <div className="router-outlet">
          <Route exact path="/" render={() => <Redirect to="a" />} />
          <Switch>
            <Route path="/a" component={ () => (<AppleAnimationPage />)} />
            <Route path="/b" component={ () => (<TestAnimationPage />)} />
            <Route path="/c" component={ () => (<ReactGsapPage />)} />
            <Route path="/d" component={ () => (<CardpayGsapPage />)} />
            <Route path="/e" component={ () => (<ScrollCardpayPage />)} />
            <Route path="/f" component={ () => (<ScrollScalePage />)} />
          </Switch>
        </div>

        { this.state.nav &&
          <React.Fragment>
            <NavPage closeNav={this.closeNav} navMenu={navMenu}/>
          </React.Fragment>
        }

      </div>
    );
  }
}

export default App;
