import React from "react";
import styled, { useTheme } from "styled-components";
// component import
import { Container } from "../common/Container";
import { ContactForm } from "./ContactForm";
import { MeetingForm } from "./MeetingForm";

export const FooterMeeting = () => {
  const theme = useTheme();

  return (
    <Container
      direction="row"
      width="100%"
      bgCol={"white"}
      // border={"2px solid red"}
      height="100%"
    >
      <Container
        className="footer"
        width="30%"
        height="600px"
        radius="10px"
        bgCol={theme.footerBg}
      ></Container>

      <Container>
        <ContactForm />
        <MeetingForm />
      </Container>
    </Container>
  );
};
