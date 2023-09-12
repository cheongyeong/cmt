import React, { Component } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../styles/Test.css';




const slideContents = [
  {
    imgSrc: 'images/3092704.png',
    title: '1',
    description: '1',
  },
  {
    imgSrc: 'images/security.png',
    title: '22',
    description: '22',
  },
  {
    imgSrc: 'images/3092704.png',
    title: '333',
    description: '333',
  },
  {
    imgSrc: 'images/security.png',
    title: '4444',
    description: '4444',
  }
    // 이 곳에 슬라이드 추가
  ];

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.images = [];
    this.texts = [];
  }

  componentDidMount() {
    gsap.registerPlugin(ScrollTrigger);


    
    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

    this.images = gsap.utils.toArray('.panel');
    const panelHeight = this.images[0].offsetHeight;

    this.images.forEach((image, i) => {
      gsap.to(image, {
        height: 0,
        scrollTrigger: {
          trigger: image,
          start: () => "top+=" + (panelHeight *(i+0.5)),  // 각 패널의 시작 위치를 조절합니다.
          end: () => "top+=" + (panelHeight * (i + 1)),  // 각 패널의 끝 위치를 조절합니다.
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        }
      });
    });



    gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

    this.texts = gsap.utils.toArray('.panel-text');
    this.texts.forEach((text, i) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: "section.black",
          start: "top -" + (window.innerHeight * i),
          end: "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        }
      })
          .to(text, { duration: 0.11, opacity: 1, y: "50%" })
          .to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66);
    });

    ScrollTrigger.create({
      trigger: "section.black",
      scroller: ".Wrap",
      scrub: true,
      markers: true,
      start: "top top",
      end: () => "+=" + document.querySelector('.p-wrap').offsetHeight,
      onEnter: () => {
        gsap.to(".black", { position: "fixed", top: 0, width: "100%", zIndex: 9999 });
      },
      onLeave: () => {
        gsap.to(".black", { position: "relative", width: "auto", zIndex: 1 });
      },
      invalidateOnRefresh: true,
    });


    // Add ScrollTrigger animations for other elements here
  }

  componentWillUnmount() {
    // Clean up any GSAP animations if needed
    this.images.forEach(image => {
      gsap.killTweensOf(image);
    });
    this.texts.forEach(text => {
      gsap.killTweensOf(text);
    });
  }

  render() {
    return (
        <div className="Wrap">

          <section className="black">
            <div className="text-wrap">
            {slideContents.map((slide, index) => (
              <div className="panel-text blue-text">
                <img src={slide.imgSrc} alt="" />
              </div>
                    ))}
            </div>
            <div className="p-wrap">
            {slideContents.map((slide, index) => (
              <div className="panel">
                <div>
                    <h2 className="m20">{slide.title}</h2>
                    <h4 className="mainScndSlideP">{slide.description}</h4>
                </div>
              </div>
              ))}
            </div>
          </section>

        </div>
    );
  }
}

export default MyComponent;