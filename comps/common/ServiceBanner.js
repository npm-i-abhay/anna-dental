import React from "react";
import styled, { useTheme } from "styled-components";

import { Container } from "./Container";

export const ServiceBanner = ({
  productName = "Solea All Tissue Dental Laser",
  logoImgSrc = "/services/soleaLogo.png",
  productImgSrc = "/services/soleaMachine.webp",
  productCopy = "Solea® is a breakthrough technology that enables virtually every cavity prep to be performed anesthesia-free, delivering a dental experience patients prefer. Solea also enables soft tissue procedures that are blood-free and suture-free with minimal post-op discomfort and remarkably rapid healing.",
  productSubHead = "An Experience that Moves Patients",
  productSubCopy = "By eliminating the primary causes of patient anxiety (the needle and the drill), Solea delivers a dental experience patients prefer. When needles, numbness, the sound of the drill, and the pain are all removed from the experience, ",
  iconCopyOne = "Spare your patients the discomfort of a conventional impression tray. Use CEREC Primescan or CEREC Omnicam for precise 3D images in natural color.",
  iconCopyTwo = "After analyzing the complete scan, the CEREC software generates outstanding restoration proposals. This takes you to the production stage faster. You benefit from the simple and visually appealing user interface.",
  iconCopyThree = "The CEREC grinding and milling unit and CEREC software are optimally matched. Milling/grinding the (solid zirconia) restoration design is extremely precise, giving the restorations smooth surfaces and edges and very fine fissures.",
  iconCopyFour = "Full-contour zirconia restorations are sintered and glazed chairside in the compact CEREC SpeedFire. The induction technology allows unparalleled short sintering and firing times.",
}) => {
  const iconsArray = [
    { imgUrl: "/services/growth.png", copy: iconCopyOne },
    { imgUrl: "/services/computer.png", copy: iconCopyTwo },
    { imgUrl: "/services/time.png", copy: iconCopyThree },
    { imgUrl: "/services/drill.png", copy: iconCopyFour },
  ];

  const theme = useTheme();
  return (
    <Container>
      <Logo>
        <LogoImg src={logoImgSrc} />
      </Logo>
      <Container
        radius={"100px"}
        bgColMob={theme.heroTxtCont}
        mobHeight="500px"
        position="relative"
      >
        <ProductImage src={productImgSrc} />
      </Container>

      <ProductName>{productName}</ProductName>
      <HeroCopy color={theme.accent}>{productCopy}</HeroCopy>
      <Container radius={"4px"} bgColMob={theme.serviceCard}>
        <SubHeading>{productSubHead}</SubHeading>
        <HeroCopy color={theme.cardText}>{productSubCopy}</HeroCopy>
      </Container>

      <Container>
        {iconsArray.map((icon, i) => (
          <Container width="100%" mobDirection="row">
            <Logo>
              <LogoImg src={icon.imgUrl} />
            </Logo>
            <HeroCopy color={theme.accent}>{icon.copy}</HeroCopy>
          </Container>
        ))}
      </Container>
      {/* <IconContainer>
        <Logo>
          <LogoImg src={logoImgSrc} />
        </Logo>
        <HeroCopy color={theme.accent}>{iconCopyTwo}</HeroCopy>
        <Logo>
          <LogoImg src={logoImgSrc} />
        </Logo>
        <HeroCopy color={theme.accent}>{iconCopyThree}</HeroCopy>
        <Logo>
          <LogoImg src={logoImgSrc} />
        </Logo>
        <HeroCopy color={theme.accent}>{iconCopyFour}</HeroCopy>
      </IconContainer> */}
    </Container>
  );
};

const ProductName = styled.h1`
  font-size: 58px;
  text-align: center;
  margin-top: 2em;
  color: ${({ theme }) => theme.heroHeadMob};
  //   background: yellow;
`;

const SubHeading = styled.h1`
  color: ${({ theme }) => theme.headings};
  text-align: center;
`;

export const Logo = styled.div`
  height: 50%;
  width: 50%;
  //   border-radius: 80px;
  //   background: grey;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 0;
  background: grey;
`;

export const ProductImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: -20%;
  //   z-index: 2000;
`;

export const LogoImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
export const HeroCopy = styled.p`
  color: ${({ color }) => color};
  width: 100%;
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
