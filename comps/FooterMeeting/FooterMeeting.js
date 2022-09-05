import React from "react";
import styled, { useTheme } from "styled-components";
// component import
import { Container } from "../common/Container";
import { ContactForm } from "./ContactForm";
import { MeetingForm } from "./MeetingForm";

export const FooterMeeting = ({ info = "blah blah" }) => {
  const theme = useTheme();

  return (
    <Container
      direction="row"
      width="100%"
      bgCol={"white"}
      mobPadding={0}
      // border={"2px solid red"}
      height="100%"
    >
      <FooterInfo> {info}</FooterInfo>

      <Container>
        <ContactForm />
        <MeetingForm />
      </Container>
    </Container>
  );
};

const FooterInfo = styled.div`
  width: 30%;
  height: 600px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.footerBg};
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
