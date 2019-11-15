import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import './react-gsap.css';

class ReactGsapPage extends Component {

  render() {
    return (
      <div className="page react-gsap-page">
        <h1>React GSAP</h1>

        <div className="section" />
        <div id="trigger" />

        <Controller>
          <Scene triggerElement="#trigger" duration={300}>
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
        <div className="section" />

      </div>
    );
  }

}

export default ReactGsapPage;
