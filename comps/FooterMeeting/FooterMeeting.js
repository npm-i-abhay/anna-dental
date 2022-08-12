import React from "react";

// component import
import { Container } from "../common/Container";
import { ContactForm } from "./ContactForm";
import { MeetingForm } from "./MeetingForm";

export const FooterMeeting = () => {
  return (
    <Container>
      <ContactForm />
      <MeetingForm />
    </Container>
  );
};
