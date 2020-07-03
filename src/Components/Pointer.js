import React from "react";
import styled, { keyframes } from "styled-components";

const Strobe = keyframes`
    0% {
        top: -5px;
        left: -5px;
        opacity: 0;
    }
    25% {
        top: 0px;
        left: 0px;
        opacity: 1;
    }
    50%,
    100% {
        top: 5px;
        left: 5px;
        opacity: 0;
    }
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translateY(-30px) translateX(-50%) rotate(45deg);
`;

const Line = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #000;
  border-right: 2px solid #000;
  animation: ${Strobe} 1.5s linear infinite;
  &:nth-child(1) {
    transform: translate(-15px, -15px);
    animation-delay: -0.4s;
  }
  &:nth-child(2) {
    transform: translate(0, 0);
    animation-delay: -0.2s;
  }
  &:nth-child(3) {
    transform: translate(15px, 15px);
    animation-delay: -0s;
  }
`;

const Pointer = () => {
  return (
    <Arrow>
      <Line />
      <Line />
      <Line />
    </Arrow>
  );
};

export default Pointer;
