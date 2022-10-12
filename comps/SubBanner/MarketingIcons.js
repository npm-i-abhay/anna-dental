import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";

import { Container } from "../common/Container";

export const MarketingIcons = ({
  iconCopyOne = "Our team works exclusively with dental businesses. We’ve seen your unique challenges before, and we can help you overcome them.",
  iconCopyTwo = "Working with us gives you ongoing access to digital marketing experts, including strategists, designers, web architects, copywriters, and more.",
  iconCopyThree = "Through thousands of experiments and A/B tests, we’ve distilled our experiences and expertise into a formula that’s proven to work.",
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
  const iconsArray = [
    { imgUrl: "/graphics/idea.png", copy: iconCopyOne },
    { imgUrl: "/graphics/team.png", copy: iconCopyTwo },
    { imgUrl: "/graphics/test.png", copy: iconCopyThree },
  ];

  const theme = useTheme();
  return (
    <Container direction="row" mobDirection={"column"}>
      {iconsArray.map((icon, i) => (
        <Container
          key={i}
          width="100%"
          mobHeight={"100%"}
          height="350px"
          justify="space-between"
          mobDirection="row"
          radius={"3px"}
          border={"2px solid #26A3BF20"}
          margin=".3em"
        >
          <Icon>
            <IconImg src={icon.imgUrl} />
          </Icon>
          <IconCopy color={theme.accent}>{icon.copy}</IconCopy>
        </Container>
      ))}
    </Container>
  );
};

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
  object-fit: contain;
  height: 60%;
  width: 60%;
  @media only screen and (max-width: 600px) {
    height: 70%;
    width: 70%;
  }
`;

export const IconCopy = styled.span`
  color: ${({ color }) => color};
  width: 100%;
  height: 300px;
  font-size: 18px;
  display: flex;
  align-items: flex-start;
  text-align: left;
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
