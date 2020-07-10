import React from "react";
import styled from "styled-components";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const FooterContainer = styled.footer`
  background: #31493c;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 1.5rem;
`;
const FooterText = styled.p`
  color: white;
`;
const IconContainer = styled.div`
  display: flex;
`;

const IconStyles = {
  color: "white",
  fontSize: "1.5rem",
  margin: "10px",
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Richard Coric &copy; 2020</FooterText>
      <IconContainer>
        <a
          href="https://www.instagram.com/me_richard1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram style={IconStyles} />
        </a>
        <a
          href="https://twitter.com/Richard5977"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter style={IconStyles} />
        </a>
        <a
          href="https://merichard123.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoLinkExternal style={IconStyles} />
        </a>
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
