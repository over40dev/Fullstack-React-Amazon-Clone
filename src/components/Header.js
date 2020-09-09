import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <img className='header__logo'
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" />
      <div className="header__search">
        <input type="text" className="header__search" />
        {/* Logo */}
      </div>

      <div className="header__nav">
        <div className="header__option"></div>
        <div className="header__option"></div>
        <div className="header__option"></div>
      </div>
    </div>
  )
};

export default Header;
