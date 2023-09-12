import React, {useState} from 'react';
import '../../styles/Header.css';
import HeaderMobile from './HeaderMobile';
import {Link} from "react-router-dom";

const Header = ()=>{

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuList = [
    { menu: "회사소개", path: "/aboutUs", sub: [], subPath: [] },
    { menu: "사업부문", path: "/service", sub: ["보안", "서비스"], subPath: ["/service", "/service"] },
    { menu: "보안관제", path: "/security", sub: ["보안관제"], subPath: [] },
    { menu: "솔루션&SI", path: "/solution", sub: ["클라우드 솔루션","보안SI"], subPath: [] },
  ];


  const handleMenuHover = (index) => {
    setActiveMenu(index);
    setSubMenuOpen(true);
  };

  const handleMenuLeave = () => {
    setSubMenuOpen(false);
    setActiveMenu(null);
  };

  const handleSubMenuClick = () => {
    setSubMenuOpen(true);
  };

  const isSubMenuVisible = activeMenu !== null && menuList[activeMenu]?.sub.length > 0;

  return(
      <header>
        <div className="headerWrap">
          <div className="menuWrap">
              <Link to="/">
                  <div className="cmtLogo"></div>
              </Link>
            <ul className="headerMenu">
              {menuList.map((menuItem, index) => (
                  <li
                      key={index}
                      onMouseOver={() => handleMenuHover(index)}
                  >
                    <a href={menuItem.path}>{menuItem.menu}</a>
                  </li>
              ))}
            </ul>

            <div className="language forWeb">
              <span className="krBtn blue">KR</span>
              <span>EN</span>
            </div>
          </div>
        </div>

        <div
            className='dropMenu'
            style={{
              height: isSubMenuVisible && isSubMenuOpen ? '55px' : '0px',
              borderTop: isSubMenuVisible && isSubMenuOpen ? '1px solid #FFFFFF22' : '0px solid transparent',
            }}
            onMouseLeave={() => setSubMenuOpen(false)}
        >
          {isSubMenuVisible && (
              <ul onClick={handleSubMenuClick}>
                {menuList[activeMenu]?.sub.map((subItem, subIndex) => (
                    <li key={subIndex}
                        style={{
                          display: isSubMenuVisible && isSubMenuOpen ? 'block' : 'none',}}
                    >
                      <a href={menuList[activeMenu]?.subPath[subIndex]}>{subItem}</a>
                    </li>
                ))}
              </ul>
          )}
        </div>

        <div id="showMenu"
             className={`mobileMenuIcon forWeb ${isMenuOpen ? 'change' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`mobileMenu ${isMenuOpen ? 'show' : ''}`}>

          <HeaderMobile  menuList={menuList} isMenuOpen={isMenuOpen} />
        </div>


      </header>

  )
}

export default Header