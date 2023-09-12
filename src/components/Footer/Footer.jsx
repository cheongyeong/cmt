import React from 'react';
import '../../styles/Footer.css';
import footerLogo from '../../assets/images/footerLogo.png'; 

function Footer() {
  return (
    <footer>

      <div className="footerWrap">
        <div>
          <div className="footerLogo m100">
            <img src={footerLogo} alt="" />
          </div>
          <div className="customerBtn">
            <a href="mailto:adm@cmtinfo.co.kr">
              adm@cmtinfo.co.kr
            </a>
            <a href="tel:+820260111377">
              +82 02-6011-1377
            </a>
          </div>
        </div>
        <div className="footerInfo">
          <p className="m70">
            <span className="bold">대표자</span>김국동<br />
            <span className="bold">주소</span>
            <span className="forWeb">(04798)</span>서울시 성동구 성수이로22길 37, 803호(성수동2가, 아크밸리)<br />
            <span className="bold">E-mail</span>adm@cmtinfo.co.kr<br />
            <span className="bold">Tel</span> 02-6011-1377<br />
            <span className="bold">Fax</span>02-463-1376<br />
            <span className="bold">사업자번호</span>215-87-14581
          </p>
          <span className="footerLine"></span>
          <div>
            <div>
              <a href='#'>개인정보처리방침</a>
            </div>
            <div>
              <a href='#'>이용약관 및 법적고지</a>
            </div>
          </div>
        </div>
      </div>
      <p>COPYRIGHT © CMT정보통신 ALL RIGHTS RESERVED.</p>
    </footer>
  );
}



export default Footer;