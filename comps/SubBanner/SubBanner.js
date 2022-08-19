import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { Container } from "../common/Container";

export const SubBanner = () => {
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

  return (
    <>
      <Container
        //   bgCol={"red"}
        height={"300px"}
        width="90%"
        justify="space-between"
        direction="row"
        mobDirection="column"
        bgColMob={theme.heroTxtCont}
        mobHeight="100%"
        mobWidth={"100%"}
      >
        <HeroHeading>
          The Best Quality <br />
          Service You Can Get
        </HeroHeading>
        <HeroCopy>
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te. Ex duo eripuit mentitum.Et has minim elitr intellegat.
          Mea ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
        </HeroCopy>
      </Container>
    </>
  );
};

export const HeroHeading = styled.h1`
  color: ${({ theme }) => theme.accent};
  line-height: 1.5em;
  text-align: left;
  margin: 1em;
  @media only screen and (max-width: 450px) {
    font-size: 28px;
    color: ${({ theme }) => theme.heroTxt};
  }
`;
export const HeroCopy = styled.p`
  color: ${({ theme }) => theme.accent};
  width: 60%;
  @media only screen and (max-width: 450px) {
    text-align: center;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.heroTxt};
  }
`;
