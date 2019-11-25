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
          <Scene duration={600} pin={true} enabled={true}>
            { (progress) => {
              console.log(progress);
              return (
                <div className="sticky"><div>Pin Test 100</div></div>
              )
            }}
          </Scene>
          <Scene duration={600} pin={{ pushFollowers: false }}>
            <div className="sticky"><div>Pin Test 200</div></div>
          </Scene>
          <Scene duration={600} pin={true} offset={100}>
            <div className="sticky blue"><div>Pin Test 300</div></div>
          </Scene>
        </Controller>

      </div>
    );
  }

}

export default ScrollCardpayPage;
