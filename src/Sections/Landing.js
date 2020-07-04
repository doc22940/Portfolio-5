import React from "react";
import Pointer from "../Components/Pointer";
import styled from "styled-components";

const LandingPage = styled.section`
  background: linear-gradient(to right, #e8f1f2 50%, #31493c 50%);
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;
const Name = styled.h1`
  position: absolute;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  font-size: calc(1vw + 5rem);
  z-index: 200;
  &:first-of-type {
    margin-left: 0.5em;
    left: 20vw;
  }
  &:last-of-type {
    right: 20vw;
  }
  @media screen and (max-width: 900px) {
    font-size: calc(1vw + 2rem);
    &:first-of-type {
      left: 1px;
    }
    &:last-of-type {
      right: 1px;
    }
  }
`;
const Letter = styled.svg`
  max-height: 60vmax;
  position: relative;
`;

export const Landing = () => {
  return (
    <LandingPage id="intro">
      <Name className="name">Ric</Name>
      <Letter
        width="460"
        height="555"
        viewBox="0 0 460 555"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M335.15 0.599976H459.95V555H335.15V319.8H125.55V555H0.75V0.599976H125.55V212.6H335.15V0.599976Z"
          fill="#7A9E7E"
        />
      </Letter>

      <Name className="name">ard</Name>
      <Pointer />
    </LandingPage>
  );
};
