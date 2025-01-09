// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Styled Components
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainContent>
      <Footer />
    </Router>
  );
}

export default App;

const MainContent = styled.main`
  min-height: calc(100vh - 80px - 80px); /* Adjusting for navbar and footer height */
`;