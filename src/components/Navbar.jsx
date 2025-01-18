// src/components/Navbar/index.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MobileMenu from '../components/MobileMenu';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  z-index: 100;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.secondary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 99;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const HamburgerIcon = styled.div`
  width: 24px;
  height: 2px;
  background: ${props => props.isOpen ? 'transparent' : props.theme.colors.secondary};
  position: relative;
  transition: all 0.3s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: ${props => props.theme.colors.white};
    transition: all 0.3s ease;
  }

  &::before {
    transform: ${props => props.isOpen ? 'rotate(45deg)' : 'translateY(-8px)'};
  }

  &::after {
    transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'translateY(8px)'};
  }
`;

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  return (
    <>
      <Nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          boxShadow: scroll ? '0 10px 30px -10px rgba(2,12,27,0.7)' : 'none',
        }}
      >
        <Logo to="/">JF</Logo>
        <NavLinks>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
        <HamburgerButton onClick={toggleMenu}>
          <HamburgerIcon isOpen={isMenuOpen} />
        </HamburgerButton>
      </Nav>
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;