// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: 'Project One',
    description: 'Description of project one.',
    image: 'link-to-image',
    url: 'https://github.com/yourusername/project-one'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <ProjectsSection>
      <Container>
        <h2>My Projects</h2>
        <ProjectsGrid>
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              as={motion.div}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ImageWrapper>
                <img src={project.image} alt={`${project.title} Screenshot`} />
              </ImageWrapper>
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;

// Styled Components
const ProjectsSection = styled.section`
  padding: 4rem 0;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

const ProjectContent = styled.div`
  padding: 1rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  a {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #e91e63;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
  }
`;