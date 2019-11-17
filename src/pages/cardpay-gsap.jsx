import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import gsap, { Power4 } from "gsap";

import './cardpay-gsap.css';

class CardpayGsapPage extends Component {

  stateIn;
  stateIn1;
  stateIn2;

  constructor(props) {
    super(props);
    this.state = {
      stateIn1: false,
      stateIn2: false,
    }
    this.stateIn = false;
    this.stateIn1 = false;
    this.stateIn2 = false;
  }

  componentDidMount() {

    this.tl1 = gsap.timeline({paused: true});
    this.tl1
      .staggerFrom('.hidetext-1', 0.4, {
        y: "200%",
        ease: Power4.easeOut
      }, 0.15);


    this.tl2 = gsap.timeline({paused: true});
    this.tl2
      .staggerFrom('.hidetext-2', 0.4, {
        y: "200%",
        ease: Power4.easeOut
      }, 0.15);
  }

  animateIn(n) {
    let currentSlideState = `stateIn${n}`
    let currentAnimation  = `tl${n}`
    if (!this[currentSlideState]) {
      console.log('animate in', n);
      this[currentSlideState] = true;
      this[currentAnimation].play();
    }
  }

  animateOut(n) {
    let currentSlideState = `stateIn${n}`
    let currentAnimation  = `tl${n}`
    if (this[currentSlideState]) {
      console.log('animate out', n);
      this[currentSlideState] = false;
      this[currentAnimation].reverse();
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
              if (progress > 0 && progress < 1) { this.animateIn(1); }
              else if (progress === 1 || progress <= 0) { this.animateOut(1); }
              return (<div></div>)
            }}
          </Scene>
        </Controller>

        <div className="original-scene-title">
          <h3><span className="hidetext-1">10 years</span></h3>
          <h3><span className="hidetext-1">of experience</span></h3>
          <h3><span className="hidetext-1">in fintech</span></h3>
        </div>

        <div className="section section-separator" />
        <div id="trigger-2" />

        <Controller>
          <Scene triggerElement="#trigger-2" indicators={true} duration={200}>
            { progress => {
              if (progress > 0 && progress < 1) { this.animateIn(2); }
              else if (progress === 1 || progress <= 0) { this.animateOut(2); }
              return (<div></div>)
            }}
          </Scene>
        </Controller>

        <div className="original-scene-title">
          <h3><span className="hidetext-2">Fast onboarding</span></h3>
          <h3><span className="hidetext-2">in 1 day</span></h3>
        </div>

        <div className="section" />
        <div id="trigger-3" />



      </div>
    );
  }

}

export default CardpayGsapPage;
