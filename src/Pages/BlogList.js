import React from "react";
import styled from "styled-components";
import PageNav from "../Components/PageNav";

const Test = styled.h1`
  margin-top: 4rem;
`;

const BlogList = () => {
  return (
    <div>
      <PageNav />
      <Test>My Blogs</Test>
      <h3>
        <i>Coming Soon...</i>
      </h3>
      <a href="https://dev.to/merichard123" target="_blank">
        For now click here
      </a>
    </div>
  );
};

export default BlogList;
