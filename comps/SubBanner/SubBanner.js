import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { Container } from "../common/Container";
import { useRouter } from "next/router";
import { MarketingIcons } from "./MarketingIcons";
export const SubBanner = ({ subImageSrc = "", productCopy }) => {
  const [sWidth, setSwidth] = useState();
  const theme = useTheme();
  useEffect(() => {
    window.onload = () => {
      setSwidth(window.innerWidth);
    };
    window.onresize = () => {
      setSwidth(window.innerWidth);
    };
    setSwidth(window.innerWidth);

    // detecting when the screen resizes
  }, [sWidth]);

  const { basePath } = useRouter();
  return (
    <>
      <Container
        justify="space-between"
        width="100%"
        mobDirection={"column"}
        // direction="row"
      >
        <HeroHeading>
          We've partnered up with smile shop marketing to provide even more
          support
        </HeroHeading>
        <Container
          width="100%"
          // border={"2px solid red"}
          justify="space-between"
          direction="row"
          mobDirection={"column"}
        >
          <SubServiceImage src={`${basePath}/services/smile.png`} />
          <SubServiceImage src={`${basePath}/services/smile2.png`} />
        </Container>
        <MarketingIcons />
      </Container>
    </>
  );
};

export const HeroHeading = styled.h2`
  color: ${({ theme }) => theme.accent};
  line-height: 1.5em;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    // color: ${({ theme }) => theme.heroTxt};
  }
`;
export const HeroCopy = styled.p`
  color: ${({ theme }) => theme.accent};
  width: 80%;
  @media only screen and (max-width: 600px) {
    text-align: center;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.heroTxt};
    font-size: 12px;
  }
`;
export const SubServiceImage = styled.img`
  object-fit: contain;
  height: 40%;
  width: 40%;
  margin: 0 0.5em;
  border-radius: 2%;
  // border-top-left-radius: 30%;
  // border-bottom-right-radius: 30%;
  @media only screen and (max-width: 600px) {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
  //   z-index: 2000;
`;
