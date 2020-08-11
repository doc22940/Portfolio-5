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
    </div>
  );
};

export default BlogList;
