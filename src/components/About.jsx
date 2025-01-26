// src/components/About/index.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const AboutSection = styled.section`
  padding: 100px 150px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 100px 50px;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 20px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SkillCategory = styled.div`
  h3 {
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 15px;
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  list-style: none;
`;

const About = () => {
  return (
    <AboutSection>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <ContentWrapper>
        <AboutText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              With a background in mechanical engineering and a passion for problem-solving, I transitioned into software development to explore technology’s potential and create impactful solutions.</p>
            <p>
              My engineering experience sharpened my analytical thinking, critical problem-solving, and project management skills.</p>
            <p>
            Drawn to the innovative possibilities of software, I’ve embraced programming, agile methodologies, and cutting-edge practices to tackle complex challenges. </p>
            <p>
            Here are some technologies I’ve been working with recently:
            </p>
          </motion.div>
        </AboutText>
        <SkillsContainer>
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <SkillCategory>
                <h3>{skillGroup.category}</h3>
                <SkillsList>
                  {skillGroup.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </SkillsList>
              </SkillCategory>
            </motion.div>
          ))}
        </SkillsContainer>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;