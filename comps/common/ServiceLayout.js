import React from "react";
import styled from "styled-components";

import { siteServices } from "../propsData";

// components
import { NavBar } from "./navigation/NavBar";

import { FooterMeeting } from "../FooterMeeting/FooterMeeting";
import { Heading } from "./Heading";

export const ServiceLayout = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      {children}
      <FooterMeeting />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ServicesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1em;
  justify-content: space-around;
`;
