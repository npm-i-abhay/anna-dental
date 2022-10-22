import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";

import { Container } from "../common/Container";

export const AboutBanner = ({
  aboutHeading = "Hi! Nice to Meet You",
  logoImgSrc = "/people/portrait.png",
  productImgSrc = "/people/portrait.jpeg",
  productCopy = `I’m Anna Li and I’ve been with Patterson Dental since the beginning of 2020 (yes, right
    before COVID shutdown). I was born and raised in Vancouver, BC and still call this beautiful city
    my home. I’ve had a passion for dentistry since I first started in this industry in 2015. I hope to bring
    you exceptional customer service and help you reach your practice goals to their full potential by
    being your partner in every transaction. I am in the people-business and I will be your person. 
    In my free time, you can find me at a golf course (ask me about the Dental Golf Tournament I host
    every year), at spin-class, and eating good food with good company.`,
}) => {
  const [sWidth, setSwidth] = useState();

  const handleResize = () => {
    setSwidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.innerWidth < 800 && setSwidth(500);
    // detecting when the screen resizes
  }, []);

  const theme = useTheme();
  return (
    <Container
      mobRadius={"100px"}
      padding="1em"
      position="relative"
      width={"100%"}
      direction="row"
      mobDirection={"column"}
    >
      {/* Text Container */}
      <Container direction="row" mobDirection="column" align="flex-start">
        {/* to make the layout work so the heading is on top, photo and then the copy */}

        {sWidth > 850 && (
          <AboutTextContainer>
            <div>
              <AboutHeading fontSize={sWidth > 500 ? "80px" : "56px"}>
                {aboutHeading}
              </AboutHeading>
              <HeroCopy order={1}> {productCopy} </HeroCopy>
            </div>
            <PortraitImage order={sWidth > 850 ? 2 : 1} src={productImgSrc} />
          </AboutTextContainer>
        )}

        {sWidth < 850 && (
          <AboutTextContainer>
            <AboutHeading fontSize={sWidth > 500 ? "80px" : "56px"}>
              {aboutHeading}
            </AboutHeading>
            <PortraitImage
              // topLeftRadius="120px"
              // bottomRightRadius="120px"
              // order={sWidth > 500 ? 2 : 1}
              src={productImgSrc}
            />
            <HeroCopy> {productCopy} </HeroCopy>
          </AboutTextContainer>
        )}
      </Container>
    </Container>
  );
};

const AboutHeading = styled.h1`
  font-size: ${({ fontSize }) => fontSize};
  text-align: left;
  color: ${({ theme }) => theme.serviceCard};
  align-self: flex-start;
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

const AboutTextContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  @media only screen and (max-width: 850px) {
    flex-flow: column;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 0;
`;

export const PortraitImage = styled.img`
  object-fit: contain;
  height: 30%;
  width: 30%;
  order: ${({ order }) => order};
  border-radius: 10px;
  border-top-left-radius: ${({ topLeftRadius }) => topLeftRadius || "30%"};
  border-bottom-right-radius: ${({ bottomRightRadius }) =>
    bottomRightRadius || "30%"};

  @media only screen and (max-width: 850px) {
    width: 60%;
  }

  @media only screen and (max-width: 600px) {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
  //   z-index: 2000;
`;

export const Logo = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  //   border-radius: 80px;
  //   background: grey;
`;
export const LogoImg = styled.img`
  object-fit: cover;
  height: 50%;
  width: 50%;
  @media only screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
  }
`;

export const Icon = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  //   border-radius: 80px;
  // background: pink;
  @media only screen and (max-width: 600px) {
    height: 50%;
    width: 50%;
  }
`;
export const IconImg = styled.img`
  object-fit: cover;
  height: 60%;
  width: 60%;
  @media only screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
  }
`;

export const IconCopy = styled.span`
  color: ${({ color }) => color};
  width: 100%;
  height: 300px;
  font-size: 20px;
  display: flex;
  align-items: flex-start;
  text-align: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    text-align: center;
    color: ${({ color }) => color};
    font-size: 16px;
    padding: 0.5em;
    align-items: center;
    text-align: left;
  }
`;

export const HeroCopy = styled.p`
  color: ${({ color }) => color};
  width: 80%;
  text-align: left;
  line-height: 2;
  //   order: ${({ order }) => order};
  order: 2;
  //   font-size: 25px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    color: ${({ color }) => color};
    font-size: 16px;
    padding: 0.5em;
    line-height: 1.2;
  }
  @media only screen and (max-width: 850px) {
    width: 100%;
    text-align: center;
    color: ${({ color }) => color};
    // font-size: 16px;
    padding: 0.5em;
    line-height: 1.5;
  }
`;

export const IconContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 2fr 3fr;
`;
