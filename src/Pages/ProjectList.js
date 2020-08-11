import React from "react";
import styled from "styled-components";
import PageNav from "../Components/PageNav";

const Test = styled.h1`
  margin-top: 4rem;
`;

const ProjectList = () => {
  return (
    <div>
      <PageNav />
      <Test>My Projects</Test>
      <h3>Coming Soon...</h3>
    </div>
  );
};

export default ProjectList;
