import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import gsap, { Power4 } from "gsap";

import './cardpay-gsap.css';

class CardpayGsapPage extends Component {

  stateIn;

  constructor(props) {
    super(props);
    this.state = {
      stateIn: false
    }
    this.stateIn = false;
  }

  componentDidMount() {
    this.tl = gsap.timeline({paused: true});
    this.tl
      .staggerFrom('.hidetext', 0.4, {
        y: "200%",
        ease: Power4.easeOut
      }, 0.15);
  }

  animateIn() {
    if (!this.stateIn) {
      this.stateIn = true;
      this.tl.play();
    }
  }

  animateOut() {
    if (this.stateIn) {
      this.stateIn = false;
      this.tl.reverse();
    }
  }

  render() {
    return (
      <div className='page cardpay-gsap-page'>
        <h1>Cardpay GSAP</h1>

        <div className="section" />
        <div id="trigger-1" />

        <Controller>
          <Scene triggerElement="#trigger-1" indicators={true} duration={200}>
            { progress => {
              if (progress > 0 && progress < 1) { this.animateIn(); }
              else if (progress === 1 || progress <= 0) { this.animateOut(); }
              return (<div></div>)
            }}
          </Scene>
        </Controller>

        <div className="original-scene-title">
          <h3><span className="hidetext">10 years</span></h3>
          <h3><span className="hidetext">of experience</span></h3>
          <h3><span className="hidetext">in fintech</span></h3>
        </div>

        <div className="section" />
        <div id="trigger-2" />

      </div>
    );
  }

}

export default CardpayGsapPage;
