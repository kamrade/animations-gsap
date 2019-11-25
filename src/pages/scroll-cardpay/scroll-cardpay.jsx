import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import './scroll-cardpay.css';

import CpHeader from './cp-header';
import Slide01 from './slide01';

const slides = [{
  title: 'slide-001',
  type: 'slide-01',
  phrases: ['10 years', 'of experience', 'in fintech']
}, {
  title: 'slide-002',
  type: 'slide-01',
  phrases: ['Fast onboarding', 'in 1 day']
}, {
  title: 'slide-003',
  type: 'slide-01',
  phrases: ['Spare yourself', 'the usual marketing', 'blah blah blah']
}];

class ScrollCardpayPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      windowHeight: 0,
    };
    this.firstSlide = React.createRef();

  }

  componentDidMount() {
    const self = this;
    this.setState({ windowHeight: window.innerHeight});

    window.onresize = function() {
      self.setState({ windowHeight: window.innerHeight });
    }

    setTimeout(() => {
      this.firstSlide.current.animateIn();
    });

  }

  componentWillUnmount() {
    window.onresize = null;
  }

  render() {
    return (
      <div className="scroll-cardpay">

        <CpHeader />

        <div className="slides">
          <Controller>

            <Scene duration={this.state.windowHeight} pin={true} enabled={true} indicators={true}>
              { (progress, e) => {
                return (
                  <div className="slide-wrapper">
                    <Slide01 ref={this.firstSlide} progress={progress} scrollMagicEvent={e} content={slides[0]} />
                  </div>
                )
              }}
            </Scene>

            <Scene duration={this.state.windowHeight} pin={{ pushFollowers: false }} indicators={true}>
              { (progress, e) => {
                return (
                  <div className="slide-wrapper">
                    <Slide01 progress={progress} scrollMagicEvent={e} content={slides[1]} />
                  </div>
                )
              }}
            </Scene>

            <Scene duration={600} pin={true} indicators={true}>
              { (progress, e) => {
                return (
                  <div className="slide-wrapper">
                    <Slide01 progress={progress} scrollMagicEvent={e} content={slides[2]} />
                  </div>
                )
              }}
            </Scene>

          </Controller>
        </div>

      </div>
    );
  }

}

export default ScrollCardpayPage;
