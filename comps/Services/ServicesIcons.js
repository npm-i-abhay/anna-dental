import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";

import { Container } from "../common/Container";

import { Icon, IconImg, IconCopy } from "./styles";

export const ServicesIcons = ({
  iconCopyOne = "",
  iconCopyTwo = "",
  iconCopyThree = "",
  iconCopyFour = "",
}) => {
  const [sWidth, setSwidth] = useState(900);
  const handleResize = () => {
    setSwidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.innerWidth < 800 && setSwidth(500);
    // detecting when the screen resizes
  }, []);

  const iconsArray = [
    { imgUrl: "/services/shield.png", copy: iconCopyOne },
    { imgUrl: "/services/shineTooth.png", copy: iconCopyTwo },
    { imgUrl: "/services/implant.png", copy: iconCopyThree },
    { imgUrl: "/services/tools.png", copy: iconCopyFour },
  ];

  const theme = useTheme();
  return (
    <Container flexWrap="wrap" direction="row" mobDirection={"column"}>
      {iconsArray.map((icon, i) => (
        <Container
          key={i}
          mobWidth={"100%"}
          mobHeight={"100%"}
          height="550px"
          justify="space-between"
          mobDirection="row"
          radius={"3px"}
          border={"2px solid #26A3BF20"}
          margin=".3em"
          flex={icon.copy.includes("olea") ? "40%" : "20%"}
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
