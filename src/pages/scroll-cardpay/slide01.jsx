import React, { Component } from 'react';
import gsap, { Power4 } from "gsap";
import './slide01.css';

class Slide01 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animatedIn: false,
    };
  }

  componentDidMount() {
    this.tl = gsap.timeline({ paused: true });
    this.tl
      .from(`.${this.props.content.title}`, 0.15, {
        y: -100
      })
      .staggerFrom(`.${this.props.content.title} .hidetext`, 0.35, {
        y: "200%",
        ease: Power4.easeOut
      }, 0.11);

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let newState = {};

    if (nextProps.progress === 0) {
      if (nextProps.scrollMagicEvent.scrollDirection === 'REVERSE' && prevState.animatedIn) {
        newState.animatedIn = false;
      } else if (nextProps.scrollMagicEvent.scrollDirection === 'FORWARD' && !prevState.animatedIn) {
        newState.animatedIn = true;
      }
    } else if (nextProps.progress === 1) {
      if (nextProps.scrollMagicEvent.scrollDirection === 'FORWARD' && prevState.animatedIn) {
        newState.animatedIn = false;
      } else if (nextProps.scrollMagicEvent.scrollDirection === 'REVERSE' && !prevState.animatedIn) {
        newState.animatedIn = true;
      }
    }

    return newState;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.animatedIn !== prevState.animatedIn) {
      if (this.state.animatedIn) {
        this.animateIn();
      } else {
        this.animateOut();
      }
    }
  }

  animateIn() {
    this.tl.play();
    this.setState({ animatedIn: true });
  }

  animateOut() {
    this.tl.reverse();
    this.setState({ animatedIn: false });
  }

  render() {
    return (
      <div className={`slide-a ${this.props.content.title}`}>
      { this.props.content.phrases.map((text, i) => (
        <h3 key={i}><span className="hidetext">{text}</span></h3>
      ))}
      </div>
    );
  }

}

export default Slide01;
