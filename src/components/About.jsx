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
            With a foundation in mechanical engineering and a passion for problem-solving, I embarked on a journey of exploration and discovery that led me into the dynamic world of software development. My transition from mechanical engineering to software development has been driven by an insatiable curiosity for technology and a desire to make a tangible impact in the digital realm.            </p>
            <p>
            Throughout my academic and professional career in mechanical engineering, I developed a strong analytical mindset and honed my skills in critical thinking and systematic problem-solving. My experience includes proficiency in Geometric Dimensioning & Tolerancing, Continuous Improvement, and project management, which has equipped me with a robust toolkit for tackling complex challenges.            </p>
            <p>As I delved deeper into the complexities of engineering projects, I found myself increasingly drawn to the innovative possibilities offered by software solutions. This realization sparked my decision to pivot my career path towards software development, where I have since focused on developing my skills in various programming languages, software development methodologies, and agile practices.</p>
            <p>
              Here are a few technologies I've been working with recently:
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