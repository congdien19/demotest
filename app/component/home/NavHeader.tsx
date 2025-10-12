import React from 'react';
import Logo from './Logo';

const NavHeader = () => {
  return (
    <div className="nav-header">
      <Logo />
      <div className="nav-control">
        <div className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;