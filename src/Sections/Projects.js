import React from "react";
import CardsList from "../Components/CardList";
import styled from "styled-components";

const Container = styled.section`
  background: #e8f2eb;
  padding: 2.5rem;
  margin-bottom: 5.5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 10px 0 50px 0;
`;

const Button = styled.a`
  padding: 1rem 1.5rem;
  color: white;
  text-decoration: none;
  margin-bottom: 100px;
  background: #001a23;
  transition: all 250ms ease;
  &:hover {
    opacity: 0.85;
    padding: 1rem 3rem;
  }
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Title>Some of my Work</Title>
      <CardsList />
      <Button
        href="https://github.com/MeRichard123?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        View More
      </Button>
    </Container>
  );
};

export default Projects;
