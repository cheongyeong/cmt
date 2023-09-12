import React from 'react';
import '../../styles/Intro.css';

function IntroScnd() {
    return (
        <div className="greyBackground">
            <section id="IntroScnd">
                <div className="container">
                    <img className="introScndImg" src="images/security.png" alt=""/>
                    <div className='introScndTxt'>
                        <h3 className="m40 bold"  data-aos="fade-up" data-aos-duration="1000">
                            MISSION & VISION</h3>
                        <h2 className="blue m40 bold" data-aos="fade-up" data-aos-duration="1000">
                            보안의 새로운 패러다임<br/>
                            기술의 힘으로 안전을 재정의하다.</h2>
                        <h4 data-aos="fade-up" data-aos-duration="1000">
                            씨엠티정보통신의 혁신적인 보안 솔루션으로 세상을
                            더 안전한 곳으로 만들기 위해 끊임없이 연구하고 도전합니다.</h4>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default IntroScnd;
