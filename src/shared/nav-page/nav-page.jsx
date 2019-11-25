import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import gsap, { Power4, Circ } from "gsap";
import './nav-page.css';

class Navpage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inDuration: 0.25,
      outDuration: 0.25,
    }
  }

  componentDidMount() {
    gsap.from('.nav-page', {
      skewX: -30,
      x: -1000,
      opacity: 0,
      duration: this.state.inDuration,
      ease: Power4.easeOut
    });

    gsap.timeline({})
    .staggerFrom('.nav-item', 0.5, {
      x: -100,
      ease: Power4.easeOut
    }, 0.03);
  }

  hideNav = () => {
    gsap.to('.nav-page', {
      x: 1000,
      skewX: -30,
      opacity: 0,
      duration: this.state.outDuration,
      ease: Circ.out,
      onComplete: this.props.closeNav,
      delay: 0.1
    });

    gsap.timeline({})
    .staggerTo('.nav-item', 0.25, {
      x: 300,
      ease: Circ.out
    }, 0.03);
  }

  render() {
    return (
      <div className="nav-page">
        <h1>Nav page</h1>

        { this.props.navMenu.map((menuItem, i) => (
            <div key={i} className="nav-item">
              <NavLink
                onClick={this.hideNav}
                className="navigation-link"
                activeClassName="active-link"
                to={menuItem.path}>{menuItem.title}
              </NavLink>
            </div>
          ))
        }

        <button onClick={this.hideNav} className="btn btn-close-nav">Close</button>
      </div>
    );
  }

}

export default Navpage;
