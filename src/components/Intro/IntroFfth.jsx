import React, {useEffect} from 'react';
import '../../styles/IntroSwiper.css';

import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

function IntroFfth() {

    const historyData = [
        {
            year: '2021',
            events: [
                '11월 부산, 울산, 경남 대학병원 세미나 참가',
                '9월 소프트웨어사업자 등록',
                '6월 부산지사 설립',
            ],
        },
        {
            year: '2021',
            events: [
                '11월 부산, 울산, 경남 대학병원 세미나 참가',
                '9월 소프트웨어사업자 등록',
                '6월 부산지사 설립',
            ],
        },
        {
            year: '2021',
            events: [
                '11월 부산, 울산, 경남 대학병원 세미나 참가',
                '9월 소프트웨어사업자 등록',
                '6월 부산지사 설립',
            ],
        },
        {
            year: '2021',
            events: [
                '11월 부산, 울산, 경남 대학병원 세미나 참가',
                '9월 소프트웨어사업자 등록',
                '6월 부산지사 설립',
            ],
        },
        // 연혁 내용 추가
    ];

    useEffect(() => {
        const progressCircle = document.querySelector(".autoplay-progress svg");
        const progressContent = document.querySelector(".autoplay-progress span");


        const swiperIntro = new Swiper(".introSlide", {
            slidesPerView: 1,
            centeredSlides: false,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                type: "progressbar",
            },
  
            on: {
            autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            }
            },
            breakpoints: {
                // When window width is <= 462px
                462: {
                    slidesPerView: 4,
                    centeredSlides: true,
                },
                // Add more breakpoints if needed
            },
    
         });
    
    });
    






    return (
        <section id="IntroFfth">
            <div className='ffthText m70'>
                <h3 className="blue bold" >HISTORY</h3>
                <h2 className="ffthTemp">지속은 선택이 아니라,<br className="forMobile"/> 우리의 방향입니다.</h2>
            </div>

            <div className="swiper introSlide">
                <div className="swiper-wrapper">
                {historyData.map((item, index) => (
                        <div className="swiper-slide historyBox" key={index}>
                            <div>
                                <h2 className='year'>{item.year}</h2>
                                <span className="historyBoxLine"></span>
                                {item.events.map((event, eventIndex) => (
                                    <h4 key={eventIndex}>{event}</h4>
                                ))}
                            </div>
                        </div>
                    ))}
     
                </div>

            
                <div className="swiper-pagination"></div>
                <div className="autoplay-progress">
                    <svg viewBox="0 0 48 48">
                         <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span></span>
                </div>

            </div>
        </section>
    );

};

export default IntroFfth;