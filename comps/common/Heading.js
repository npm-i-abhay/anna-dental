import React from "react";
import styled from "styled-components";

export const Heading = ({ heading }) => {
  return (
    <HeadingContainer>
      <HeroHeading> {heading} </HeroHeading>
    </HeadingContainer>
  );
};

export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1em;
`;

export const HeroHeading = styled.h1`
  color: ${({ theme }) => theme.accent};
  line-height: 1.5em;
  text-align: left;
`;
