import React from "react";
import styled from "styled-components";

// COMPONENT IMPORT
import { Container } from "../common/Container";
export const ContactForm = () => {
  return (
    <Container bgCol={"red"}>
      <FormContainer>
        <FormRow>
          <NameInput />
          <NameInput />
        </FormRow>
        <FormRow>
          <EmailInput />
          <PhoneInput />
        </FormRow>
        <MessageInput />
      </FormContainer>
    </Container>
  );
};

const NameInput = styled.input`
  background: white;
`;

const EmailInput = styled.input``;

const PhoneInput = styled.input``;

const MessageInput = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  min-height: 200px;
  max-height: 100%;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0.5em;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
`;
