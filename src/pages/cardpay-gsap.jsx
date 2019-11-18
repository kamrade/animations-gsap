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

    // let slideHeight = window.innerHeight - 80;
    // console.log(slideHeight);

    this.setState({
      slideHeight
    }, () => {

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

      this.tl3 = gsap.timeline({paused: true});
      this.tl3
        .staggerFrom('.hidetext-3', 0.4, {
          y: "200%",
          ease: Power4.easeOut
        }, 0.15);
    });

  }

  animateIn(n, progress) {

    let k = -1;
    let j = 0.5;

    if (progress <= 0.5) {
      j = 0.5 - progress;
    } else {
      j = progress - 0.5;
    }

    if (progress > 0.5) {
      k = 1;
    }

    switch(n) {
      case 1:
        gsap.to('.original-scene-title-1', {
          y: k * j * 600
        });
        break;
      case 2:
        gsap.to('.original-scene-title-2', {
          y: k * j * 600
        });
        break;
      default:
    }





    let currentSlideState = `stateIn${n}`;
    let currentAnimation  = `tl${n}`;

    if (!this[currentSlideState]) {
      this[currentSlideState] = true;
      this[currentAnimation].play();
    }
  }

  animateOut(n, progress) {

    console.log('animate out', n, progress);

    let currentSlideState = `stateIn${n}`;
    let currentAnimation  = `tl${n}`;
    if (this[currentSlideState]) {
      this[currentSlideState] = false;
      this[currentAnimation].reverse();
    }
  }

  render() {
    return (
      <div className='page cardpay-gsap-page'>
        <div id="trigger-1" />
        <div ref={this.section} className="section">
          <div className="original-scene-title original-scene-title-1">
            <h3><span className="hidetext-1">10 years</span></h3>
            <h3><span className="hidetext-1">of experience</span></h3>
            <h3><span className="hidetext-1">in fintech</span></h3>
          </div>
        </div>

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
        <div className="section">
          <div className="original-scene-title original-scene-title-2">
            <h3><span className="hidetext-2">Fast onboarding</span></h3>
            <h3><span className="hidetext-2">in 1 day</span></h3>
          </div>
        </div>

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
        <div className="section" >
          <div className="original-scene-title original-scene-title-3">
            <h3><span className="hidetext-3">Spare yourself</span></h3>
            <h3><span className="hidetext-3">the usual marketing</span></h3>
            <h3><span className="hidetext-3">blah blah blah…</span></h3>
          </div>
        </div>
        <Controller>
          <Scene triggerElement="#trigger-3" indicators={true} duration={this.state.slideHeight}>
            { progress => {
              if (progress > 0 && progress < 1) { this.animateIn(3, progress); }
              else if (progress === 1 || progress <= 0) { this.animateOut(3, progress); }
              return (<div></div>)
            }}
          </Scene>
        </Controller>


      </div>
    );
  }

}

export default CardpayGsapPage;
