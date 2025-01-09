// src/pages/About.js
import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection>
      <Container>
        <h2>About Me</h2>
        <Content>
          <ImageWrapper>
            <img src="/JustinFitt.jpg" alt="Justin Fitt" />
          </ImageWrapper>
          <Text>
            <p>
              I'm a passionate software engineer with 1 year of experience in developing web applications. I specialize in building full-stack applications using modern technologies.
            </p>
            <h3>Skills:</h3>
            <SkillsList>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>HTML5 & CSS3</li>
              <li>RESTful APIs</li>
            </SkillsList>
          </Text>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;

// Styled Components
const AboutSection = styled.section`
  padding: 4rem 0;
  background: #f9f9f9;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 250px;
  margin-right: 2rem;
  
  img {
    width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const Text = styled.div`
  flex: 2;

  p {
    margin-bottom: 1.5rem;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #e91e63;
    }
  }
`;