import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import './react-gsap.css';

class ReactGsapPage extends Component {

  tween;

  componentDidMount() {
    const tween = this.tween.getGSAP();
    console.log(tween)
  }

  render() {
    return (
      <div className="page react-gsap-page">
        <h1>React GSAP</h1>

        <div className="section" />
        <div id="trigger-1" />

        <Controller>
          <Scene triggerElement="#trigger-1" duration={300} indicators={true}>
            { (progress) => (
              <Tween
                to={{ left: '0px', rotation: -360, width: '200px', height: '200px'}}
                ease="Strong.easeOut"
                totalProgress={progress}
                paused
              >
                <div className="tween">Pin Test</div>
              </Tween>
            )}
          </Scene>
        </Controller>

        <div className="section" />
        <div id="trigger-2" />

        <div className="big-text text-intro-box">
          <Controller>
            <Scene triggerElement="#trigger-2" duration={300} indicators={true}>
              { (progress) => (
                <Tween
                  // staggerFrom={{ y: '200%', ease: Power4.easeIn }}
                  // stagger={0.4}
                  // totalProgress={progress}
                  paused
                  ref={ref => this.tween = ref}
                >
                    <h3><span style={{ top: `${200-(200 * progress)}%` }} className="hidetext">10 years</span></h3>
                    <h3><span style={{ top: `${200-(200 * progress)}%` }} className="hidetext">of experience</span></h3>
                    <h3><span style={{ top: `${200-(200 * progress)}%` }} className="hidetext">in fintech</span></h3>
                </Tween>
              )}
            </Scene>
          </Controller>
        </div>

        <div className="section" />

      </div>
    );
  }

}

export default ReactGsapPage;
