import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { SocialIconsContainer, SocialIconLink } from './socialIcons'

const SocialIcons = () => (
  <SocialIconsContainer>
    <SocialIconLink href="https://www.linkedin.com/in/joaquin-galarza-50753a23a/">
      <FontAwesomeIcon icon={faLinkedin} />
    </SocialIconLink>
    <SocialIconLink href="https://github.com/Galartza">
      <FontAwesomeIcon icon={faGithub} />
    </SocialIconLink>
    <SocialIconLink href="https://www.instagram.com/joagalarza__/?hl=es-la">
      <FontAwesomeIcon icon={faInstagram} />
    </SocialIconLink>
    <SocialIconLink href="https://www.facebook.com/joaquin99g">
      <FontAwesomeIcon icon={faFacebook} />
    </SocialIconLink>
  </SocialIconsContainer>
);

export default SocialIcons;
