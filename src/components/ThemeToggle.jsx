// src/components/ThemeToggle/index.js
import React from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';

const ToggleButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${props => props.theme.colors.secondary};
  font-size: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      {isDark ? <FiSun /> : <FiMoon />}
    </ToggleButton>
  );
};

export default ThemeToggle;