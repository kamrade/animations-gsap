import React, { Component } from 'react';
import './cp-header.css';

import CardpayLogo from './logo';

class CpHeader extends Component {

  render() {
    return (
      <header className="cp-header">
        <div className="logo-wrapper">
          <CardpayLogo />
        </div>
        <div className="menu-wrapper">
          <div className="menu-item">Developers</div>
          <div className="menu-item">Company</div>
          <div className="menu-item">iBanking</div>
          <div className="menu-item">Apply</div>
          <div className="menu-item menu-item-login">Login</div>
        </div>
      </header>
    );
  }

}

export default CpHeader;
