// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  /* Reset and global styles */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: #333;
    line-height: 1.6;
  }

  h1, h2, h3, h4 {
    margin: 0 0 1rem 0;
    font-weight: 700;
  }

  p {
    margin: 0 0 1rem 0;
  }

  a {
    color: #e91e63;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  /* Responsive Typography */
  html {
    font-size: 100%; /* Default */

    @media (max-width: 768px) {
      font-size: 90%;
    }

    @media (max-width: 480px) {
      font-size: 85%;
    }
  }
`;

export default GlobalStyle;