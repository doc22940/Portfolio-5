import React from "react";
import Profile from "../Assets/img/RichardIllustrationJumper.png";
import styled from "styled-components";
import Github from "../Assets/icons/github.svg";
import LinkedIn from "../Assets/icons/linkedin.svg";
import Resume from "../Assets/icons/Resume.svg";

const AboutContainer = styled.section`
  position: relative;
  z-index: -5;
  background: #e8f2eb;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6rem 0 0 100vw;
    border-color: transparent transparent transparent #fff;
    bottom: 0;
    right: 0;
  }
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 100vw 6rem 0;
    border-color: transparent #fff transparent transparent;
    top: 0;
    right: 0;
  }
  padding: 2.5rem 10px;
  @media screen and (min-width: 900px) {
    padding: 3rem 3rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1 1 50rem;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 3rem;
  margin: 20px 0;
`;
const SecondaryTitle = styled.h3`
  margin: 20px 0;
  font-size: 1.5rem;
  font-weight: normal;
`;
const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.9rem;
`;
const FlexContainer = styled.div`
  width: 50%;
  text-align: left;

  @media screen and (max-width: 900px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;
const Image = styled.img`
  border-radius: 50%;
  width: 20vmax;
  height: 20vmax;
  -o-object-fit: contain;
  object-fit: contain;
  margin: 50px 0;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  margin: 10px;
`

const About = () => {
  return (
    <AboutContainer id="about">
      <Wrapper>
        <Image src={Profile} alt="A Picture of me" />
        <FlexContainer>
          <Title>Who am I?</Title>
          <SecondaryTitle>
            Hey There! My name is Richard. I am Full Stack Web Developer
          </SecondaryTitle>
          <Paragraph>
            I am a Web developer and Computer Science Student with a passion for
            <b> Design </b> and <b>Innovation</b>. I build <b>accessible</b> and
            <b> responsive </b>
            sites. I am a very <u>curious</u> person. I love learning
            <u> languages </u> and have a <u>passion</u> for Science and how the
            world works.
          </Paragraph>
          <IconContainer>
            <a href="https://github.com/MeRichard123/" target="_blank">
              <Icon src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/richardcoric/" target="_blank">
              <Icon src={LinkedIn} alt="" />
            </a>
            <a href="">
              <Icon src={Resume} alt="" />
            </a>
          </IconContainer>
        </FlexContainer>
      </Wrapper>
    </AboutContainer>
  );
};

export default About;