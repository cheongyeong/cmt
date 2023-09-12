import React from 'react';
import '../../styles/Main.css';
import mainLogo from '../../assets/images/mainLogo.png'; 

function mainContFrst() {
  return(

    <section id="mainContFrst">
        <div className="slogan">
          <div  data-aos="fade-right"  data-aos-duration="1000">
            <h1>Achieve Better<span className="forSmall">,</span></h1>
            <h1>Faster Business<span className="forSmall">,</span></h1>
            <h1 className="m70">Outercomes<span className="forSmall">.</span></h1>
          </div>
            <h3 data-aos="fade-up"  data-aos-duration="2000"><span className="forWeb">씨엠티정보통신,</span> 고객의 요구를 넘어서는 솔루션을 제공합니다.</h3>
        </div>
        <div className="sloganImg">
            <img className="forWeb" src={mainLogo} alt=""/>
        </div>
    </section>


  )

}

export default mainContFrst;