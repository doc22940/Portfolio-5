import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BlogLink = {
  textDecoration: "none",
  color: "#001a23",
  margin: "15px",
};
const BlogItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background: #e8f2eb;
  width: 600px;
  cursor: pointer;
  margin: 1.5rem;
  transition: transform 0.5s;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 2s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.15);
    content: "";
    opacity: 0;
    z-index: -1;
  }
  &:hover,
  &:focus {
    transform: scale3d(1.006, 1.006, 1);
  }
  &:hover::after,
  &:focus::after {
    opacity: 1;
  }
  @media screen and (max-width: 900px) {
    align-items: center;
    width: 95%;
    margin: auto;
  }
  @media screen and (min-width: 1900px) {
    width: 95%;
  }
`;
const Narrative = styled.div`
  padding: 0.5rem;
  @media screen and (max-width: 900px) {
    font-size: 70%;
  }
`;
const BlogTitle = styled.h2`
  padding: 10px;
`;
const BlogDate = styled.h4`
  margin: 10px;
`;
const BlogTags = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;
const Tag = styled.p`
  padding: 5px;
  color: #515151;
  background: #b3efb2;
  margin: 10px;
`;
const BlogDesc = styled.p``;

const BlogCard = ({ title, date, desc, tags, slug }) => {
  return (
    <Link to={`/blogs/${slug}`} style={BlogLink}>
      <BlogItem>
        <Narrative>
          <BlogTitle>{title}</BlogTitle>
          <BlogDate>{date}</BlogDate>
          <BlogDesc>{desc}</BlogDesc>
          <BlogTags>
            {tags.slice(0, 2).map((tagText, index) => (
              <Tag key={index}>{tagText}</Tag>
            ))}
          </BlogTags>
        </Narrative>
      </BlogItem>
    </Link>
  );
};

export default BlogCard;
