import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";

import { Container } from "../common/Container";

import { HeroCopy, SubHeading } from "../Services/styles";

export const ServiceSubBanner = ({
  productSubHead = "An Experience that Moves Patients",
  productSubCopy = "By eliminating the primary causes of patient anxiety (the needle and the drill), Solea delivers a dental experience patients prefer. When needles, numbness, the sound of the drill, and the pain are all removed from the experience, ",
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

  const theme = useTheme();
  return (
    <Container>
      <Container
        direction="row"
        mobDirection="column"
        radius={"4px"}
        bgColMob={theme.serviceCard}
        justify="space-between"
      >
        <SubHeading>{productSubHead}</SubHeading>
        <HeroCopy color={sWidth > 500 ? theme.text : theme.cardText}>
          {productSubCopy}
        </HeroCopy>
      </Container>
    </Container>
  );
};
