import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import '../../styles/MainSwiper.css';
import 'swiper/swiper-bundle.css';



const ThrServiceMobile = ({ boxData }) => {

  useEffect(() => {
    const swiper = new Swiper('.thrServiceMobile', {
      slidesPerView: 1.3,
      spaceBetween: 20,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

  }, []);


  return (
    <div className="swiper thrServiceMobile">
      <div className="swiper-wrapper">
        {boxData.map((box, index) => (
          <div className="swiper-slide" key={index}>
            <div className="thrServiceBox">
              <div className="serviceIcon">
                <img src={box.iconSrc} alt="" />
              </div>
              <div>
                <h4>{box.title}</h4>
                <h5>{box.description}</h5>
              </div>
              <div className="moreBtn">
                <a href={box.href}>more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default ThrServiceMobile;
