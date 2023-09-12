import React, { Component } from 'react';
import '../styles/ScrollTop.css';

class ScrollTopEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {

    if (window.scrollY > 500) {
      this.setState({ showButton: true });
    } else {
      this.setState({ showButton: false });
    }
  }

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    const { showButton } = this.state;

    return (

      <div className={`sideBtn ${showButton ? 'showUp' : ''}`}>
          <div className="goTop" onClick={this.scrollToTop}>
              Top
          </div>
          <div className="goService">
                <a className="mailIcon" href="mailto:adm@cmtinfo.co.kr">
                  <span></span>
                </a>
                <a className="callIcon" href="tel:+820260111377">
                  <span></span>
                </a>
          </div>

        </div>
    );
  }
}

export default ScrollTopEvent;