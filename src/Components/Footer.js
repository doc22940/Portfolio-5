import React from "react";
import styled from "styled-components";
import Twitter from "../Assets/icons/twitter.svg";
import Instagram from "../Assets/icons/instagram.svg";

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
const Icon = styled.img`
  margin: 10px;
  height: 20px;
  @media screen and (min-width: 1900px) {
    height: 40px;
  }
`;
const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Richard Coric &copy; 2020</FooterText>
      <IconContainer>
        <a href="https://www.instagram.com/me_richard1/">
          <Icon src={Instagram} alt="Instagram Logo" />
        </a>
        <a href="https://twitter.com/Richard5977">
          <Icon src={Twitter} alt="Twitter Logo" />
        </a>
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
