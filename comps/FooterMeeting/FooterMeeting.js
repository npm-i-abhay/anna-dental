import React, { createRef, useRef, forwardRef } from "react";
import styled, { useTheme } from "styled-components";
// component import
import { Container } from "../common/Container";
import { ContactForm } from "./ContactForm";
import { MeetingForm } from "./MeetingForm";
import emailjs from "@emailjs/browser";
export const FooterMeeting = ({ info = "blah blah" }) => {
  const theme = useTheme();
  const form = useRef();
  const formTwo = useRef();
  console.log("form.current", form);

  console.log("form.current", form.current);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_loqx9vb",
        "template_ouo3roq",
        form.current,
        "evvpUdP66YF5XVLm7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container
      direction="row"
      width="100%"
      bgCol={"white"}
      mobPadding={0}
      height="100%"
    >
      <FooterInfo> {info}</FooterInfo>

      <Container>
        <ContactForm form={form} sendEmail={sendEmail} />
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
