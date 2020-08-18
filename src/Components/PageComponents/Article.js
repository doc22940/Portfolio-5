import React, { useEffect, useState } from "react";
import axios from "axios";
import MarkdownView from "react-showdown";
import "github-markdown-css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const Container = styled.div`
  text-align: left;
  @media screen and (min-width: 900px) {
    margin: 8rem;
  }
`;

const Nav = styled.nav`
  background: #001a23;
  padding: 1rem 0.5rem 1rem 0.5rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 990;
  color: white;
`;
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const List = styled.ul`
  list-style: none;
  margin-right: 10px;
`;
const HomeLink = styled.li`
  &:hover {
    text-decoration: underline;
  }
`;

const Article = (props) => {
  const slug = props.match.params.slug;
  const [article, setArticle] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [original, setOriginal] = useState("");

  useEffect(() => {
    axios
      .get(`https://dev.to/api/articles/merichard123/${slug}`)
      .then((res) => {
        setArticle(res.data.body_markdown);
        setTitle(res.data.title);
        setOriginal(res.data.url);
        setLoading(false);
      });
  }, [slug]);

  return (
    <div>
      <PageNav />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <div style={{ textAlign: "center", margin: "0 0 5ch 0" }}>
            <h1 style={{ margin: "15px" }}>{title}</h1>
            <a href={original} target="_blank" rel="noopener noreferrer">
              Read the Original on Dev.to
            </a>
          </div>
          <div className="body">
            <div class="markdown-body">
              <MarkdownView
                markdown={article}
                style={{
                  maxWidth: "80%",
                  margin: "auto",
                }}
                options={{ tables: true, emoji: true }}
              />
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

function PageNav() {
  return (
    <Nav>
      <FlexWrapper>
        <p>Richard Coric</p>
        <List>
          <Link to="/blogs" style={{ textDecoration: "none", color: "white" }}>
            <HomeLink>Back</HomeLink>
          </Link>
        </List>
      </FlexWrapper>
    </Nav>
  );
}

export default Article;
