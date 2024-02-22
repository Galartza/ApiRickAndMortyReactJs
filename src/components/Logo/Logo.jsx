// Logo.js
import React from 'react';
import logoImage from '../../assets/Rick-and-Morty-Logo.png';
import {ContainLogo} from './logo-style'

const Logo = () => {
  return (
    <ContainLogo className="logo">
      <img className='imglogo' src={logoImage} alt="Logo" />
    </ContainLogo>
  );
};

export default Logo;
