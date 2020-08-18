import React from "react";
import styled from "styled-components";
import PageNav from "../Components/PageNav";
import BlogCardList from "../Components/PageComponents/BlogCardList";
import Footer from "../Components/Footer";

const Title = styled.h1`
  margin-top: 4rem;
`;

const BlogList = () => {
  return (
    <div>
      <PageNav />
      <Title>My Blogs</Title>
      <BlogCardList />
      <Footer />
    </div>
  );
};

export default BlogList;
