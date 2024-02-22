import React from 'react';
import { FooterAboutMe } from './footer-styles';
import SocialIcons from '../SocialIcons/SocialIcons'; 

const Footer = () => (
  <FooterAboutMe className='about' id='about'>
    <div className="linea-footer"></div>
    <ul>
      <li className="text-foot">Web diseñada por Joaquin Galarza &#128512;</li>
      <li className="text-foot"> Mis redes:</li>
      <SocialIcons />
      <div className="linea-footer"></div>
    </ul>
  </FooterAboutMe>
);

export default Footer;
