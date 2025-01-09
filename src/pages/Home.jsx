// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <HomeSection>
      <Container>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm <span>Justin Fitt</span>
        </motion.h2>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          I'm a freelance software engineer specializing in modern web development.
        </motion.p>
        <CallToAction
          to="/projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </CallToAction>
      </Container>
    </HomeSection>
  );
};

export default Home;

// Styled Components
const HomeSection = styled.section`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 80px); /* Adjusting for navbar height */
  background: linear-gradient(to right, #1f1c2c, #928dab);
  color: #fff;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    span {
      color: #e91e63;
    }
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
`;

const CallToAction = styled(motion(Link))`
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #e91e63;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
`;