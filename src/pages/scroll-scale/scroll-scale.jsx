import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import './scroll-scale.css';

class ScrollScalePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      windowHeight: 0
    };
  }

  componentDidMount() {
    this.setState({
      windowHeight: window.innerHeight
    })
  }

  render() {
    return (
      <div className="page scroll-scale-page">

        <div className="section" />

        <Controller>
          <Scene
            duration={this.state.windowHeight}
            pin={true}
            reverse={true}
            offset={this.state.windowHeight/2}
            indicators={true}
          >
            {
              (progress, e) => {
                return (
                  <div style={{ height: this.state.windowHeight }} className="background-image">
                    <div style={{ opacity: 1 - progress }} className="overlay-text">
                      <svg id="8c6838ec-718a-4894-9224-15b36cec0a7d" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200"><title>text-overlay</title><path d="M614.72,577.28h-23v12.64h23c6.72,0,8.56-2.88,8.56-6.32v-.16C623.28,580,621.44,577.28,614.72,577.28Z" fill="#fff"/><path d="M316.56,577.28h-23v12.64h23c6.72,0,8.56-2.88,8.56-6.32v-.16C325.12,580,323.28,577.28,316.56,577.28Z" fill="#fff"/><path d="M525.68,576.8c-16.64,0-20.4,9-20.4,16.4v1.12c0,7.2,4,16.64,20.4,16.64,16.72,0,20.4-9.44,20.4-16.64V593.2C546.08,585.84,542.48,576.8,525.68,576.8Z" fill="#fff"/><path d="M0,0V1200H1200V0ZM343.76,623.68h-17c-.24-.4-.56-1.52-.56-4.16v-4.88c0-7.68-2.8-11.2-11.12-11.2H293.6v20.24H277.12V564.16H317.2c22.64,0,25.2,9.44,25.2,15.92v.8c0,7.44-5.12,12.48-12.56,14.16,8.08,1.84,13,6.72,13,15.44v6.16c0,4.48.4,5.68,1,6.64Zm66.8,0h-55V564.16h54.48v13H371.84v9.68h37v13.44h-37v10.32h38.72ZM478,577.36H440.16V588h36.72v13.6H440.16v22.08h-16.4V564.16H478ZM563.2,595c0,12.8-7.92,29.68-35.76,29.68h-3.52c-27.84,0-35.76-16.88-35.76-29.68v-2.4c0-13,7.92-29.36,35.76-29.36h3.52c27.84,0,35.76,16.32,35.76,29.36Zm78.72,28.72h-17c-.24-.4-.56-1.52-.56-4.16v-4.88c0-7.68-2.8-11.2-11.12-11.2H591.76v20.24H575.28V564.16h40.08c22.64,0,25.2,9.44,25.2,15.92v.8c0,7.44-5.12,12.48-12.56,14.16,8.08,1.84,13,6.72,13,15.44v6.16c0,4.48.4,5.68,1,6.64Zm92.8,0H718.64v-39l-18.08,39H687.68l-18.08-39v39H653.76V564.16h21.92l19,40.32,19.52-40.32h20.56ZM841.28,587h-17c-.24-1.68-2.48-10.08-18.16-10.08C791.6,576.88,787,585,787,593v1.12c0,7.36,4.72,16.72,19.2,16.72,15.84,0,17.84-8.56,18.08-10.48h17v.24c0,10.88-8,23.92-33.28,23.92h-3.68c-27.2,0-34.4-17.44-34.4-29.6v-2.4c0-12.4,7.2-29.28,34.4-29.28H808c25,0,33.28,12.24,33.28,23.52Zm84.24,8c0,12.8-7.92,29.68-35.76,29.68h-3.52c-27.84,0-35.76-16.88-35.76-29.68v-2.4c0-13,7.92-29.36,35.76-29.36h3.52c27.84,0,35.76,16.32,35.76,29.36Z" fill="#fff"/><path d="M888,576.8c-16.64,0-20.4,9-20.4,16.4v1.12c0,7.2,4,16.64,20.4,16.64,16.72,0,20.4-9.44,20.4-16.64V593.2C908.4,585.84,904.8,576.8,888,576.8Z" fill="#fff"/></svg>
                    </div>
                  </div>
                )
              }
            }

          </Scene>
        </Controller>

        <div className="section" />

      </div>
    );
  }

}

export default ScrollScalePage;
