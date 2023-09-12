import React from 'react';
import mainLogo from '../../assets/images/mainLogo.png';

const styles = {
    mobileMenuWrap: {
        width: '100%',

    },
    ul: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: '50px',
    },
    li: {
        width: '48%',
        marginBottom: '50px',
        fontSize: '18px'
    },
    a: {
        textDecoration: 'underline',
        color: '#fff'
    },
    subMenuLi: {
        padding: '10px',
        boxSizing: 'border-box'
    },
    subMenuA: {
        fontSize: '16px',
        color: '#ffffff88'
    }
};

const HeaderMobile = ({ menuList, isMenuOpen }) => {
    return (
        <div className={`mobileMenu ${isMenuOpen ? 'show' : ''}`}>
            <div>
                <div className="language">
                    <span className="krBtn blue">KR</span>
                    <span>EN</span>
                </div>
            </div>
            <div style={styles.mobileMenuWrap}>
                <ul style={styles.ul}>
                    {menuList.map((menuItem, index) => (
                        <li key={index} style={styles.li}>
                            <a href={menuItem.path} style={styles.a}>{menuItem.menu}</a>
                            {menuItem.sub && (
                                <ul className='subMenu'>
                                    {menuItem.sub.map((subItem, subIndex) => (
                                        <li key={subIndex} style={styles.subMenuLi}>
                                            <a className='subMenuA' href={menuItem.subPath[subIndex]} style={styles.subMenuA}>{subItem}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="menuBtLogo">
                <img src={mainLogo} alt="" />
            </div>
        </div>
    );
};

export default HeaderMobile;
