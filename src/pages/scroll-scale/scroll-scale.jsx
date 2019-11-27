import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import './scroll-scale.css';

import Mask from './mask';

class ScrollScalePage extends Component {

  animatedIn = false;

  constructor(props) {
    super(props);
    this.state = {
      windowHeight: 0,
      breakPoint: 0.5
    };
  }

  componentDidMount() {
    this.setCorrectWindowHeight();
    window.onresize = this.setCorrectWindowHeight.bind(this);
  }

  setCorrectWindowHeight() {
    const wHeight = window.innerHeight - 19;
    this.setState({ windowHeight: wHeight });
  }

  componentWillUnmount() {
    window.onresize = null;
  }

  getPlaystate(progress, scrollDirection) {
    console.log(progress);
    console.log(scrollDirection);

    if (progress >= this.state.breakPoint) {
      if (this.animatedIn === false) {
        this.animatedIn = true;
        return 'play';
      }
    } else if (progress < this.state.breakPoint) {
      if (this.animatedIn === true) {
        this.animatedIn = false;
        return 'reverse';
      }
    } else {
      return 'pause';
    }
  }

  render() {
    return (
      <div className="page scroll-scale-page">

        <div className="section" />

        <Controller>
          <Scene
            duration={this.state.windowHeight}
            pin={true}
            reverse={true}
            offset={this.state.windowHeight/2}
            indicators={true}
          >
            {
              (progress, e, i) => {

                return (
                  <div style={{ height: this.state.windowHeight }} className="background-image">
                    <Tween
                      duration={0.25}
                      to={{ scale: 1+progress*2, opacity: 1 - progress }}
                    >
                      <div className="overlay-text">
                        <Mask />
                      </div>
                    </Tween>

                    <Tween
                      ease="Power4.easeOut"
                      duration={0.75}
                      from={{ y: 100, opacity: 0 }}
                      playState={ this.getPlaystate(progress, e.scrollDirection) }
                    >

                      <div className="slide-text">
                        <h1 style={{ opacity: progress*progress }}>We built more than just experience</h1>
                      </div>
                    </Tween>

                  </div>
                )
              }
            }

          </Scene>
        </Controller>


        <div className="section" />

      </div>
    );
  }

}

export default ScrollScalePage;
