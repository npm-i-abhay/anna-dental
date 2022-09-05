import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Container } from "../common/Container";

export const HomeBanner = () => {
  const [sWidth, setSwidth] = useState();

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
    <Container
      position={"relative"}
      margin={"1.5em 0 1.5em 0"}
      width="98%"
      height="80%"
      zIndex={0}
    >
      <HeroImage src="/people/heroPatient.jpg" />
      {sWidth > 600 ? (
        <HeroTextCont>
          {" "}
          <HeroHeading>
            150,000 + SOLUTIONS <br />
            AND
            <br />
            UNMATCHED SUPPORT
          </HeroHeading>
          <HeroCopy>
            From toothbrushes to the latest dental technology and office design,
            find the products, equipment, technology and services your practice
            needs. Then count on our trusted, responsive sales and service teams
            to offer you unwavering support.
          </HeroCopy>
        </HeroTextCont>
      ) : (
        <>
          <HeroHeading>
            150,000 + SOLUTIONS <br />
            AND
            <br />
            UNMATCHED SUPPORT
          </HeroHeading>
          <HeroCopy>
            From toothbrushes to the latest dental technology and office design,
            find the products, equipment, technology and services your practice
            needs. Then count on our trusted, responsive sales and service teams
            to offer you unwavering support.
          </HeroCopy>
        </>
      )}
    </Container>
  );
};

export const HeroImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const HeroTextCont = styled.div`
  width: 60%;
  height: 60%;
  position: absolute;
  background: ${({ theme }) => theme.heroTxtCont};
  bottom: -10%;
  left: 5%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em;
  margin: 1.5em 0 1.5em 0;
`;

export const HeroHeading = styled.h1`
  color: ${({ theme }) => theme.heroTxt};
  line-height: 1.5em;
  text-align: left;
  @media only screen and (max-width: 450px) {
    width: 100%;
    text-align: center;
    font-size: 28px;
    color: ${({ theme }) => theme.heroHeadMob};
  }
`;
export const HeroCopy = styled.p`
  color: ${({ theme }) => theme.heroTxt};
  width: 100%;
  @media only screen and (max-width: 450px) {
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.accent};
  }
`;
