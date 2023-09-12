import React from 'react';
import MainSwiper from "../Main/MainSwiper";

import '../../styles/Main.css';


// .box 내용 수정 및 추가

const boxData = [
    {
        iconSrc: "images/service1.png",
        title: "클라우드 서비스",
        description: "다양한 비즈니스 환경에 맞는 클라우드 솔루션과 차별화된 노하우",
        href: "/link1",
    },
    {
        iconSrc: "images/service1.png",
        title: "서비스 2",
        description: "서비스 2에 대한 설명",
        href: "/link2",
    },
    {
        iconSrc: "images/service1.png",
        title: "서비스 3",
        description: "서비스 3에 대한 설명",
        href: "/link3",
    },
    // 이 곳에 .box 추가
];


const MainContThr = () => {


    return (

        <div className="thrBackground" id="whiteBack">
            <section id="mainContThr">
                <div className="thrTitle">
                    <h2 className="blue">분야별 전문 서비스</h2>
                    <h4>
                        <span className="forMobile">씨엠티정보통신은</span> 다양한 사업 분야에서
                        노하우를 가지고 있습니다.
                    </h4>
                </div>


                <div className="thrService forWeb">
                    <div>
                        {boxData.map((box, index) => (
                            <div className="thrServiceBox" key={index}>
                                <div className="serviceIcon">
                                    <img src={box.iconSrc} alt=""/>
                                </div>
                                <div>
                                    <h4>{box.title}</h4>
                                    <h5>{box.description}</h5>
                                </div>
                                <div className="moreBtn">
                                    <a href={box.href}>more</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='forMobile'>
                    <MainSwiper boxData={boxData} /> {/* 사용할 때 props로 boxData를 전달합니다. */}
                </div>

            </section>


        </div>
    );
};


export default MainContThr;