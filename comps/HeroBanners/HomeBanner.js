import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Container } from "../common/Container";

export const HomeBanner = () => {
  const [sWidth, setSwidth] = useState();

  const handleResize = () => {
    setSwidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.innerWidth < 800 && setSwidth(500);
    // detecting when the screen resizes
  }, []);

  return (
    <Container
      position={"relative"}
      margin={"1.5em 0 1.5em 0"}
      width="98%"
      height="80%"
      zIndex={0}
    >
      <Container
        direction="row"
        mobDirection={"column"}
        alignSelf={"flex-start"}
        width="98%"
        justify="space-between"
      >
        {sWidth > 600 ? (
          <>
            <HeroImage src="/people/heroPatient.jpg" />
            <HeroTextCont>
              {" "}
              <HeroHeading>
                150,000 + SOLUTIONS <br />
                AND
                <br />
                UNMATCHED SUPPORT
              </HeroHeading>
              <HeroCopy>
                From your everyday consumables to the latest dental technology
                and office design, find the products, equipment, technology and
                services your practice needs. Then count on our trusted,
                responsive sales and service teams to offer you unrivaled
                support.
              </HeroCopy>
            </HeroTextCont>
          </>
        ) : (
          <>
            <HeroHeading>
              150,000 + SOLUTIONS <br />
              AND
              <br />
              UNMATCHED SUPPORT
            </HeroHeading>
            <HeroImage
              topRightRadius="80px"
              bottomLefttRadius="80px"
              src="/people/heroPatient.jpg"
            />
            <HeroCopy>
              From your everyday consumables to the latest dental technology and
              office design, find the products, equipment, technology and
              services your practice needs. Then count on our trusted,
              responsive sales and service teams to offer you unrivaled support.
            </HeroCopy>
          </>
        )}
      </Container>
    </Container>
  );
};

export const HeroImage = styled.img`
  object-fit: cover;
  width: 50%;
  border-radius: 10px;
  border-top-right-radius: ${({ topRightRadius }) => topRightRadius || "150px"};
  border-bottom-left-radius: ${({ bottomLefttRadius }) =>
    bottomLefttRadius || "150px"};
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const HeroTextCont = styled.div`
  // position: absolute;
  // background: ${({ theme }) => theme.heroTxtCont};
  // background: ${({ theme }) => theme.body};
  // background: red;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 40%;
  padding: 0.5em;
  margin: 1.5em 0 1.5em 0;
`;

export const HeroHeading = styled.h1`
  color: ${({ theme }) => theme.serviceCard};
  line-height: 1.5em;
  text-align: left;
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    font-size: 28px;
    color: ${({ theme }) => theme.heroHeadMob};
  }
`;
export const HeroCopy = styled.p`
  color: ${({ theme }) => theme.serviceCard};
  width: 100%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.accent};
  }
`;
