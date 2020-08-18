import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Loading = () => {
  return <Container>LOADING...</Container>;
};

export default Loading;
