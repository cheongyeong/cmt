import { useState } from 'react';

import '../../styles/Main.css';

const rollingBanner = [
  { imgSrc: 'images/aws.png' },
  { imgSrc: 'images/aws.png' },
  { imgSrc: 'images/aws.png' },
  { imgSrc: 'images/aws.png' },
  { imgSrc: 'images/aws.png' },
  { imgSrc: 'images/aws.png' },
  { imgSrc: 'images/aws.png' },
  { imgSrc: 'images/aws.png' },
  { imgSrc: 'images/aws.png' },
];

const MainContFrth = () => {
  const [animate, setAnimate] = useState(true);

  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  return (
    <div className="whiteBackgroud">
      <section id="mainContFrth">
        <div data-aos="fade-up"  data-aos-duration="1000">
          <h3 className="blue m20 bold">CMT PARTNERS</h3>
          <h1 className="m70">
            우리와 함께라면<br />
            오늘은 어제보다<br />
            더 특별합니다.
          </h1>

        </div>

        <div className="flowContainer">
          <div
            className="flowWrapper"
            onMouseEnter={onStop}
            onMouseLeave={onRun}
          >
            <div
              className={`flowImg original${animate ? "" : " stop"}`}
              >
              {rollingBanner.map((slide, index) => (                
                  <img key={index} src={slide.imgSrc} alt="" />
                  ))}
             </div>
             <div
              className={`flowImg clone${animate ? "" : " stop"}`}
              >
              {rollingBanner.map((slide, index) => (
                
                  <img key={index} src={slide.imgSrc} alt="" />
                  ))}
             </div>
           
            </div>
        </div>
      </section>
    </div>
  );
};

export default MainContFrth;