import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";

import { Container } from "../common/Container";

export const ServiceBanner = ({
  productName = "Solea All Tissue Dental Laser",
  logoImgSrc = "/services/soleaLogo.png",
  productImgSrc = "/services/soleaMachine.webp",
  subImageSrc = "/services/soleaSubBanner.jpg",
  productCopy = "Solea® is a breakthrough technology that enables virtually every cavity prep to be performed anesthesia-free, delivering a dental experience patients prefer. Solea also enables soft tissue procedures that are blood-free and suture-free with minimal post-op discomfort and remarkably rapid healing.",
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
    <Container>
      <Logo>
        <LogoImg src={logoImgSrc} />
      </Logo>

      <Container
        mobRadius={"100px"}
        // bgColMob={theme.heroTxtCont}
        mobHeight="auto"
        position="relative"
        width={"100%"}
        direction="row"
        justify="space-between"
      >
        {sWidth > 500 && (
          <>
            <ProductName fontSize="50px">{productName}</ProductName>
            <GraphicContainer>
              <GraphicImage src="/graphics/blob.svg" />
            </GraphicContainer>
          </>
        )}
        <ProductImage src={productImgSrc} />
      </Container>

      {sWidth < 500 && <ProductName fontSize="38px">{productName}</ProductName>}
      <Container
        justify="space-between"
        width="100%"
        mobDirection={"column"}
        direction="row"
      >
        <SubServiceImage src={subImageSrc} />
        <HeroCopy color={theme.text}>{productCopy}</HeroCopy>
      </Container>
    </Container>
  );
};

const ProductName = styled.h1`
  position: relative;
  z-index: 1;
  font-size: ${({ fontSize }) => fontSize};
  text-align: left;
  margin-top: 2em;
  color: ${({ theme }) => theme.heroHeadMob};
  width: 50%;
  @media only screen and (max-width: 600px) {
    text-align: center;
    width: 100%;
    margin-top: 0;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 0;
  background: grey;
`;

export const ProductImage = styled.img`
  object-fit: contain;
  height: auto;
  width: 40%;
  border-radius: 2%;
  border-top-right-radius: 30%;
  border-bottom-left-radius: 30%;
  @media only screen and (max-width: 600px) {
    object-fit: contain;
    height: auto;
    width: 100%;
  }
`;
export const SubServiceImage = styled.img`
  object-fit: contain;
  height: 40%;
  width: 40%;
  margin: 0 0.5em;
  border-radius: 2%;
  border-top-left-radius: 30%;
  border-bottom-right-radius: 30%;
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
  width: 50%;
  font-size: 20px;
  line-height: 1.5;
  // background: red;
  @media only screen and (max-width: 600px) {
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

export const GraphicContainer = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  // background: red;
  left: -20%;
`;

export const GraphicImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
