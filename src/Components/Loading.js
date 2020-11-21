import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const loaderVariants = {
  animation1: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Loading = () => {
  return (
    <Container>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate="animation1"
      ></motion.div>
    </Container>
  );
};

export default Loading;
