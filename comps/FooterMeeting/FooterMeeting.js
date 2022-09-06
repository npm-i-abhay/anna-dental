import React, { createRef, useRef, forwardRef } from "react";
import styled, { useTheme } from "styled-components";
// component import
import { Container } from "../common/Container";
import { ContactForm } from "./ContactForm";
import { MeetingForm } from "./MeetingForm";
import { ImInstagram, ImFacebook2, ImLinkedin } from "react-icons/im";
import { AiOutlineGlobal } from "react-icons/ai";
import emailjs from "@emailjs/browser";
export const FooterMeeting = ({ info = "blah blah" }) => {
  const theme = useTheme();
  const form = useRef();
  const formTwo = useRef();
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
      width="98%"
      bgCol={"white"}
      mobPadding={0}
      height="100%"
      shadow="2px -2px 10px #dddddd"
    >
      <FooterInfo>
        <Logo>
          <LogoImg src="/services/pattersonLogo.png" />
        </Logo>
        <SocialIconCont>
          <ImInstagram size={32} />
          <ImFacebook2 size={32} />
          <ImLinkedin size={32} />
          <AiOutlineGlobal size={32} />
        </SocialIconCont>
      </FooterInfo>

      <Container align="flex-start">
        <FooterHeading> Reach Out For the Best Advice </FooterHeading>
        <ContactForm form={form} sendEmail={sendEmail} />
      </Container>
      <a id="contact"></a>
    </Container>
  );
};

const FooterInfo = styled.div`
  width: 45%;
  height: 300px;
  border-radius: 10px;
  // background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Logo = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  //   border-radius: 80px;
  //   background: grey;
`;
export const LogoImg = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
  }
`;

const SocialIconCont = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const FooterHeading = styled.h1`
  color: ;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
`;
