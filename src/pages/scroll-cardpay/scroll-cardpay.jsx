import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import './scroll-cardpay.css';

import CpHeader from './cp-header';

class ScrollCardpayPage extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="scroll-cardpay">

        <CpHeader />

        <Controller>
          <Scene duration={300} pin={true} enabled={true}>
            <div className="sticky"><div>Pin Test</div></div>
          </Scene>
          <Scene duration={200} pin={{ pushFollowers: false }}>
            <div className="sticky"><div>Pin Test</div></div>
          </Scene>
          <Scene duration={300} pin={true} offset={100}>
            <div className="sticky blue"><div>Pin Test</div></div>
          </Scene>
        </Controller>

      </div>
    );
  }

}

export default ScrollCardpayPage;
