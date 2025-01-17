// src/components/Footer/index.js
import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const FooterContainer = styled.footer`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: 20px;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.text};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FiTwitter />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FiLinkedin />
        </SocialIcon>
      </SocialLinks>
      <Copyright>
        © 2025 Justin Fitt. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;