import React, { useState, useEffect, useRef } from 'react';
import '../../styles/Main.css';

const slideContents = [
  {
    imgSrc: 'images/security.png',
    title: '보안 관제',
    description: '고객 환경에 맞는 맞춤형 솔루션을 제공합니다. 맞춤형 솔루션을 제공합니다.',
    href: "/link1",
  },
  {
    imgSrc: 'images/security2.png',
    title: '보안 SI',
    description: '고객 환경에 맞는 맞춤형 솔루션을 제공합니다.',
    href: "/link1",
  },
  {
    imgSrc: 'images/security3.png',
    title: '보안 솔루션',
    description: '고객 환경에 맞는 맞춤형 솔루션을 제공합니다.',
    href: "/link1",
  },
  {
    imgSrc: 'images/security1.png',
    title: '보안 컨설팅',
    description: '고객 환경에 맞는 맞춤형 솔루션을 제공합니다.',
    href: "/link1",
  },

  // 이 곳에 슬라이드 추가
];

function Scroller() {
  const [currentTitle, setCurrentTitle] = useState(slideContents[0].title);
  const [activeIndex, setActiveIndex] = useState(0); 
  const slideRefs = useRef([]); 



  const handleScroll = () => {
    let activeTitle = null;
    let activeIndex = null;
  
    for (let i = 0; i < slideContents.length; i++) {
      const rect = slideRefs.current[i].getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        activeTitle = slideContents[i].title;
        activeIndex = i;
        break;
      }
    }
  
    if (activeTitle !== null) {
      setCurrentTitle(activeTitle);
      setActiveIndex(activeIndex);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentImageSrc = slideContents.find((slide) => slide.title === currentTitle && slide.imgSrc)?.imgSrc;

  const handleTabClick = (index) => {
    // 해당 textWrap의 위치로 스크롤 이동
    slideRefs.current[index].scrollIntoView({ behavior: 'smooth' });
    setActiveIndex(index);
  };


  return (
    <div>
      <div className='tabWrap forWeb'>
        {slideContents.map((slide, index) => (
          <li
            key={index}
            onClick={() => handleTabClick(index)}
            className={activeIndex === index ? 'active' : ''} 
         >
          {slide.title}</li>
          ))}
      </div>
      <section id='mainContScnd'>
          {currentImageSrc && (
            <img
              className={`imgSrc ${currentTitle === currentTitle ? 'active' : ''}`}
              src={currentImageSrc}
              alt={currentTitle}
            />
          )}
        <div className='textWrap'>
          {slideContents.map((slide, index) => (
             <div
             className={`text ${slide.title === currentTitle && slide.imgSrc ? 'active' : ''}`}
             key={index}
             // 각 textWrap에 고유한 id 부여
             id={`textWrap-${index}`}
             ref={(el) => (slideRefs.current[index] = el)}
           >
              <div>
                <h2 className="blue m20">{slide.title}</h2>
                <h4 className="mainScndSlideP m40">{slide.description}</h4>
                <div className="moreBtn wh">
                  <a href={slide.href}>more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Scroller;