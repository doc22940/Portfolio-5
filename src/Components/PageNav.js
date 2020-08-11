import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

function PageNav() {
  return (
    <Nav>
      <FlexWrapper>
        <p>Richard Coric</p>
        <List>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <HomeLink>Back Home</HomeLink>
          </Link>
        </List>
      </FlexWrapper>
    </Nav>
  );
}

export default PageNav;
