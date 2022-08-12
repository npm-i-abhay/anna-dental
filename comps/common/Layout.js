import React from "react";
import styled from "styled-components";

// components
import { NavigationMob } from "./NavigationMob";
import { Services } from "@/comps/Services/Services";
import { Review } from "../ReviewCard/Review";
import { FooterMeeting } from "../FooterMeeting/FooterMeeting";

export const Layout = () => {
  return (
    <Wrapper>
      <NavigationMob />
      {/* <Services />
      <Review /> */}
      <FooterMeeting />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
`;
