import React, { Component } from 'react';
import './test-animation.css';
import gsap, { Power4 } from "gsap";

class TestAnimationPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stateIn: false
    }
  }

  componentDidMount() {
    this.tl = gsap.timeline({paused: true})
    this.tl
      .staggerFrom('.hidetext', 0.75, {
        y: "200%",
        ease: Power4.easeOut
      }, 0.15);
  }

  buttonClickHandler = () => {
    this.letsAnimate();
  }

  letsAnimate() {
    if (this.state.stateIn) {
      this.setState({ stateIn: false }, () => this.tl.reverse());
    } else {
      this.setState({ stateIn: true }, () => this.tl.play());
    }
  }

  render() {
    return (
      <div className="page test-animation-page">

        <section>
          <div className="intro-text">
            <button onClick={this.buttonClickHandler} className="btn">Click me now!</button>
          </div>

          <div className="big-text">
            <h3><span className="hidetext">10 years</span></h3>
            <h3><span className="hidetext">of experience</span></h3>
            <h3><span className="hidetext">in fintech</span></h3>
          </div>
        </section>

      </div>
    );
  }

}

export default TestAnimationPage;
