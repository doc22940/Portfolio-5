import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import BlogCard from "./BlogCard";
import Loading from "../Loading";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const BlogCardList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?username=merichard123")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);
  console.log(data);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <FlexContainer>
          {data.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              date={post.readable_publish_date}
              desc={post.description}
              tags={post.tag_list}
              slug={post.slug}
            />
          ))}
        </FlexContainer>
      )}
    </>
  );
};

export default BlogCardList;
