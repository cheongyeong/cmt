import React, { useEffect } from 'react';

function ScrollListener() {
  
  useEffect(() => {
    function handleScroll() {
      var Background = document.getElementById("whiteBack");

      if (!Background) return;

      var scrollTop = window.scrollY;
      var BackgroundTop = Background.getBoundingClientRect().top;

      if (BackgroundTop <= 280) {
        document.querySelector('body').classList.add('active');
      } else {
        document.querySelector('body').classList.remove('active');
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []); 

  return (
      <div>
        {/* 이 컴포넌트 내에서 스크롤 이벤트를 감지하여 body 클래스를 조작하는 코드 */}
      </div>
  );
}

export default ScrollListener;
