import React from "react";
import Pointer from "../Components/Pointer";
import styled from "styled-components";
import { motion } from "framer-motion";

const LandingPage = styled.section`
  background: linear-gradient(to right, #e8f1f2 50%, #31493c 50%);
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin-bottom: 5.5rem;
`;

const Letter = styled.svg`
  max-height: 60vmax;
  position: relative;
`;

const RichVariant = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
    },
  },
};
const ArdVariant = {
  initial: {
    x: "+100vw",
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
    },
  },
};

export const Landing = () => {
  return (
    <LandingPage id="intro">
      <motion.h1
        className="name"
        variants={RichVariant}
        initial="initial"
        animate="animate"
      >
        Ric
      </motion.h1>
      <Letter
        width="460"
        title="H"
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

      <motion.h1
        variants={ArdVariant}
        initial="initial"
        animate="animate"
        className="name"
      >
        ard
      </motion.h1>
      <Pointer />
    </LandingPage>
  );
};
