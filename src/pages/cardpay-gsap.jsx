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
    this.section = React.createRef();
    this.state = {
      stateIn1: false,
      stateIn2: false,
      slideHeight: 0,
      progress: 0
    }
    this.stateIn = false;
    this.stateIn1 = false;
    this.stateIn2 = false;
  }

  componentDidMount() {

    const slideHeight = this.section.current.offsetHeight;

    this.setState({
      slideHeight
    }, () => {

      let self = this;

      this.tl1 = gsap.timeline({paused: true});
      this.tl1
        .staggerFrom('.hidetext-1', 0.4, {
          y: "200%",
          ease: Power4.easeOut
        }, 0.15);

      this.tl1_reverse = gsap.timeline({paused: true});
      this.tl1_reverse
        .staggerTo('.hidetext-1', 0.4, {
          y: "200%",
          ease: Power4.easeOut
        }, 0.15, null, () => {
          gsap.to('.hidetext-1', 0.4, {
            opacity: 0
          }, 0.2);
        });

      this.tl2 = gsap.timeline({paused: true});
      this.tl2
        .staggerFrom('.hidetext-2', 0.4, {
          y: "200%",
          ease: Power4.easeOut
        }, 0.15);

      this.tl2_reverse = gsap.timeline({paused: true});
      this.tl2_reverse
        .staggerTo('.hidetext-2', 0.4, {
          y: "200%",
          ease: Power4.easeOut
        }, 0.15);

      this.tl3 = gsap.timeline({paused: true});
      this.tl3
        .staggerFrom('.hidetext-3', 0.4, {
          y: "200%",
          ease: Power4.easeOut
        }, 0.15);

      this.tl3_reverse = gsap.timeline({paused: true});
      this.tl3_reverse
        .staggerTo('.hidetext-3', 0.4, {
          y: "200%",
          ease: Power4.easeOut
        }, 0.15);
    });

  }

  animateIn(n, progress) {

    let currentSlideState = `stateIn${n}`;
    let currentAnimation  = `tl${n}`;


    if (!this[currentSlideState]) {
      this[currentSlideState] = true;
      this[currentAnimation].timeScale(1);
      this[currentAnimation].play();
    }

  }

  animateOut(n, progress) {

    let currentSlideState = `stateIn${n}`;
    let currentAnimationOut  = `tl${n}_reverse`;

    if (this[currentSlideState]) {
      this[currentSlideState] = false;
      this[currentAnimationOut].play();
    }
  }

  render() {
    return (
      <div className='page cardpay-gsap-page'>

        <div id="trigger-1" />
        <div ref={this.section} className="section" />

        <Controller>
          <Scene triggerElement="#trigger-1" indicators={true} duration={this.state.slideHeight}>
            { progress => {
              if (progress > 0 && progress < 1) { this.animateIn(1, progress); }
              else if (progress === 1 || progress <= 0) { this.animateOut(1, progress); }
              return (<div></div>)
            }}
          </Scene>
        </Controller>

        <div id="trigger-2" />
        <div className="section" />

        <Controller>
          <Scene triggerElement="#trigger-2" indicators={true} duration={this.state.slideHeight}>
            { progress => {
              if (progress > 0 && progress < 1) { this.animateIn(2, progress); }
              else if (progress === 1 || progress <= 0) { this.animateOut(2, progress); }
              return (<div></div>)
            }}
          </Scene>
        </Controller>

        <div id="trigger-3" />
        <div className="section" />

        <Controller>
          <Scene triggerElement="#trigger-3" indicators={true} duration={this.state.slideHeight}>
            { progress => {
              if (progress > 0 && progress < 1) { this.animateIn(3, progress); }
              else if (progress === 1 || progress <= 0) { this.animateOut(3, progress); }
              return (<div></div>)
            }}
          </Scene>
        </Controller>

        <div className="fixed-slides">

          <div className="original-scene-title original-scene-title-1">
            <h3><span className="hidetext-1">10 years</span></h3>
            <h3><span className="hidetext-1">of experience</span></h3>
            <h3><span className="hidetext-1">in fintech</span></h3>
          </div>

          <div className="original-scene-title original-scene-title-2">
            <h3><span className="hidetext-2">Fast onboarding</span></h3>
            <h3><span className="hidetext-2">in 1 day</span></h3>
          </div>

          <div className="original-scene-title original-scene-title-3">
            <h3><span className="hidetext-3">Spare yourself</span></h3>
            <h3><span className="hidetext-3">the usual marketing</span></h3>
            <h3><span className="hidetext-3">blah blah blah…</span></h3>
          </div>

        </div>

      </div>
    );
  }

}

export default CardpayGsapPage;
