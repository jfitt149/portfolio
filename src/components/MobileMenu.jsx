// src/components/MobileMenu/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Backdrop from '../components/Backdrop';


const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.background};
  z-index: 98;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const MenuItem = styled(Link)`
  font-size: 24px;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
            <Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          />
        <MenuOverlay
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <MenuList>
            <MenuItem to="/" onClick={toggleMenu}>
              Home
            </MenuItem>
            <MenuItem to="/about" onClick={toggleMenu}>
              About
            </MenuItem>
            <MenuItem to="/projects" onClick={toggleMenu}>
              Projects
            </MenuItem>
            <MenuItem to="/contact" onClick={toggleMenu}>
              Contact
            </MenuItem>
          </MenuList>
        </MenuOverlay>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;