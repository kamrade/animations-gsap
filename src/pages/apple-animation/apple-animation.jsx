import React, { Component } from 'react';
import './apple-animation.css';
import gsap, { Power4 } from "gsap";

class AppleAnimationPage extends Component {

  componentDidMount() {
    this.animateIn = gsap.timeline({ paused: true });

    this.animateIn
      .fromTo('.overlay', 2, { skewX: 30, scale: 1.5 }, { skewX: 0, xPercent: 100, transformOrigin: "0% 100%", ease: Power4.easeOut })
      .from('.project-info', 0.8, { scaleY: 0, transformOrigin: '100% 100%' }, '-=1.5')
      .from('.small-title', 0.5, { autoAlpha: 0, y: 30, ease: Power4.easeOut }, '-=1')
      .from('.project-link', 0.3, { autoAlpha: 0, y: 30, ease: Power4.easeOut }, '-=0.5')
      .from('h4', 0.3, { autoAlpha: 0, y: 30, ease: Power4.easeOut }, '-=0.5');

  }

  playButtonClickHandler = () => {
    this.animateIn.play();
  }

  reverseButtonClickHandler = () => {
    this.animateIn.reverse();
  }

  render() {
    return (
      <div className="page apple-animation-page">
        <section>
          <div className="d-grid">
            <h1>The nice stuff!</h1>
            <p>Scroll down</p>
            <div className="d-flex">
              <button onClick={this.playButtonClickHandler} className="btn">Play</button>
              <button onClick={this.reverseButtonClickHandler} className="btn">Reverse</button>
            </div>
          </div>
        </section>

        <section>
          <div className="grid-12 project project-left">
            <div className="box">
              <img src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
              <div className="overlay"></div>
            </div>
            <div className="project-info">
              <p className="small-title">Identity // Website // Print</p>
              <h4>This is the first project</h4>
              <a className="project-link" href="/">See out case study</a>
            </div>
          </div>
        </section>

        <section>
          <div className="grid-12 project project-left">
            <div className="box">
              <img src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
              <div className="overlay"></div>
            </div>
            <div className="project-info">
              <p className="small-title">Identity // Website // Print</p>
              <h4>This is the second project</h4>
              <a className="project-link" href="/">See out case study</a>
            </div>
          </div>
        </section>

      </div>
    );
  }

}

export default AppleAnimationPage;
