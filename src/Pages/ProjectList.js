import React from "react";
import styled from "styled-components";
import PageNav from "../Components/PageNav";
import ProjectCardList from "../Components/PageComponents/ProjectCardList";
import Footer from "../Components/Footer";

const Test = styled.h1`
  margin-top: 4rem;
`;

const ProjectList = () => {
  return (
    <div>
      <PageNav />
      <Test>My Projects</Test>
      <ProjectCardList />
      <Footer />
    </div>
  );
};

export default ProjectList;
