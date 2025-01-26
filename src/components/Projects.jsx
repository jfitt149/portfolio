// src/components/Projects/index.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectsSection = styled.section`
  padding: 100px 150px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 100px 50px;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.primary};
  border-radius: 10px;
  padding: 25px;
  position: relative;
  overflow: hidden;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.white};
  font-size: 24px;
  margin-bottom: 15px;
`;

const ProjectDescription = styled.p`
  margin-bottom: 15px;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  margin-bottom: 15px;
`;

const TechItem = styled.li`
  font-size: 14px;
  color: ${props => props.theme.colors.secondary};
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
`;

const IconLink = styled.a`
  color: ${props => props.theme.colors.white};
  font-size: 20px;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Some Things I've Built
      </motion.h2>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
             <ProjectImage src={project.image} alt={project.title} />
            </ProjectLink>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechList>
              {project.technologies.map((tech, i) => (
                <TechItem key={i}>{tech}</TechItem>
              ))}
            </TechList>
            <Links>
              <IconLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </IconLink>
              <IconLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </IconLink>
            </Links>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;