import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";

import { Container } from "../common/Container";

export const ServiceBanner = ({
  productName = "Solea All Tissue Dental Laser",
  logoImgSrc = "/services/soleaLogo.png",
  productImgSrc = "/services/soleaMachine.webp",
  productCopy = "Solea® is a breakthrough technology that enables virtually every cavity prep to be performed anesthesia-free, delivering a dental experience patients prefer. Solea also enables soft tissue procedures that are blood-free and suture-free with minimal post-op discomfort and remarkably rapid healing.",
}) => {
  const [sWidth, setSwidth] = useState();

  useEffect(() => {
    // window.onload = () => {
    //   setSwidth(window.innerWidth);
    // };
    window.onresize = () => {
      setSwidth(window.innerWidth);
      console.log("swidth", sWidth);
    };
    setSwidth(window.innerWidth);

    // detecting when the screen resizes
  }, [sWidth]);

  const theme = useTheme();
  return (
    <Container>
      <Logo>
        <LogoImg src={logoImgSrc} />
      </Logo>

      <Container
        mobRadius={"100px"}
        bgColMob={theme.heroTxtCont}
        mobHeight="500px"
        position="relative"
        height="100%"
        // bgCol={theme.serviceCard}
        width={"100%"}
        direction="row"
        shadow={"0px 5px 10px 5px #88888850"}
      >
        {sWidth > 500 && (
          <ProductName fontSize="80px">{productName}</ProductName>
        )}
        <ProductImage src={productImgSrc} />
      </Container>

      {sWidth < 500 && <ProductName fontSize="58px">{productName}</ProductName>}
      <HeroCopy color={theme.text}>{productCopy}</HeroCopy>
      {/* 

      <Container direction="row" mobDirection={"column"}>
        {iconsArray.map((icon, i) => (
          <Container
            width="100%"
            mobHeight={"100%"}
            height="500px"
            justify="space-between"
            mobDirection="row"
          >
            <Icon>
              <IconImg src={icon.imgUrl} />
            </Icon>
            <IconCopy color={theme.accent}>{icon.copy}</IconCopy>
          </Container>
        ))}
      </Container> */}
    </Container>
  );
};

const ProductName = styled.h1`
  font-size: ${({ fontSize }) => fontSize};
  text-align: left;
  margin-top: 2em;
  color: ${({ theme }) => theme.heroHeadMob};

  //   background: yellow;
`;

const SubHeading = styled.h1`
  color: ${({ theme }) => theme.headings};
  text-align: center;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 0;
  background: grey;
`;

export const ProductImage = styled.img`
  object-fit: contain;
  height: 40%;
  width: 40%;
  @media only screen and (max-width: 450px) {
    height: 120%;
    width: 120%;
    position: absolute;
    bottom: -20%;
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
  @media only screen and (max-width: 450px) {
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
  @media only screen and (max-width: 450px) {
    height: 50%;
    width: 50%;
  }
`;
export const IconImg = styled.img`
  object-fit: cover;
  height: 60%;
  width: 60%;
  @media only screen and (max-width: 450px) {
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
  @media only screen and (max-width: 450px) {
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
  width: 70%;
  font-size: 25px;
  @media only screen and (max-width: 450px) {
    width: 100%;
    text-align: center;
    color: ${({ color }) => color};
    font-size: 16px;
    padding: 0.5em;
  }
`;

export const IconContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 2fr 3fr;
`;
