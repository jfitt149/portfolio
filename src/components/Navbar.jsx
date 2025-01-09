// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Container>
        <Logo><Link to="/">MyPortfolio</Link></Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink to="/about" onClick={() => setIsOpen(false)}>About</MenuLink>
          <MenuLink to="/projects" onClick={() => setIsOpen(false)}>Projects</MenuLink>
          <MenuLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MenuLink>
        </Menu>
      </Container>
    </Nav>
  );
};

export default Navbar;

// Styled Components
const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  
  span {
    height: 3px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
    background: #333;
  }
`;

const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  color: #fff;
  text-decoration: none;
  
  &:hover {
    color: #e91e63;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    width: 100%;
  }
`;