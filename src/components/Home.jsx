// src/components/Home/index.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 150px 0px 150px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 50px;
  }
`;

const Introduction = styled(motion.div)`
  max-width: 1000px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextSection = styled.div`
  flex: 1;
`;

const Greeting = styled.h1`
  color: ${props => props.theme.colors.secondary};
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 20px;
  margin-top: 70px;
`;

const Name = styled.h2`
  font-size: 80px;
  color: ${props => props.theme.colors.white};
  margin-bottom: 20px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 60px;
  }
`;

const Tagline = styled.h3`
  font-size: 60px;
  color: ${props => props.theme.colors.text};
  margin-bottom: 20px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 40px;
    text-align: center;
  }
`;

const Description = styled.p`
  max-width: 500px;
  margin-bottom: 30px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    text-align: center;
    margin: 0 auto 30px auto;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid ${props => props.theme.colors.secondary};
  margin-top: 70px; // Aligns with the Greeting

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 250px;
    height: 250px;
    margin: 20px 0;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Introduction
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TopSection>
          <TextSection>
            <Greeting>Hi, my name is</Greeting>
            <Name>Justin Fitt</Name>
            <Tagline>I build things for the web.</Tagline>
          </TextSection>
          <ProfileImage src="/JustinFitt.jpg" alt="Justin Fitt" />
        </TopSection>
        <Description>
          I'm a software engineer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
        </Description>
      </Introduction>
    </HomeContainer>
  );
};

export default Home;