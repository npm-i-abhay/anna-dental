import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";

import { Container } from "../common/Container";

import { Icon, IconImg, IconCopy } from "./styles";

export const ServicesIcons = ({
  iconCopyOne = "Spare your patients the discomfort of a conventional impression tray. Use CEREC Primescan or CEREC Omnicam for precise 3D images in natural color.",
  iconCopyTwo = "After analyzing the complete scan, the CEREC software generates outstanding restoration proposals. This takes you to the production stage faster. You benefit from the simple and visually appealing user interface.",
  iconCopyThree = "The CEREC grinding and milling unit and CEREC software are optimally matched. Milling/grinding the (solid zirconia) restoration design is extremely precise, giving the restorations smooth surfaces and edges and very fine fissures.",
  iconCopyFour = "Full-contour zirconia restorations are sintered and glazed chairside in the compact CEREC SpeedFire. The induction technology allows unparalleled short sintering and firing times.",
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

  const iconsArray = [
    { imgUrl: "/services/shield.png", copy: iconCopyOne },
    { imgUrl: "/services/shineTooth.png", copy: iconCopyTwo },
    { imgUrl: "/services/implant.png", copy: iconCopyThree },
    { imgUrl: "/services/tools.png", copy: iconCopyFour },
  ];

  const theme = useTheme();
  return (
    <Container direction="row" mobDirection={"column"}>
      {iconsArray.map((icon, i) => (
        <Container
          key={i}
          width="100%"
          mobHeight={"100%"}
          height="550px"
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
