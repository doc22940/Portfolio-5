import React from "react";
import CardsList from "../Components/CardList";
import styled from "styled-components";

const Container = styled.section`
  background: #e8f2eb;
  padding: 2.5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 30px 0 50px 0;
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Title>Some of my Work</Title>
      <CardsList />
    </Container>
  );
};

export default Projects;
