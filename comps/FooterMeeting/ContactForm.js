import React, { useState, useRef, forwardRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

// COMPONENT IMPORT
import { Container } from "../common/Container";
import { MeetingForm } from "./MeetingForm";
export const ContactForm = ({
  form,
  sendEmail,
  sendText = "Say Hi",
  disabled = false,
}) => {
  const [formFields, setFormFields] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    message: "",
  });

  const UpdateFormField = (e, field) => {
    switch (field) {
      case "first":
        setFormFields({ ...formFields, first: e.target.value });
        break;
      case "last":
        setFormFields({ ...formFields, last: e.target.value });
        break;
      case "email":
        setFormFields({ ...formFields, email: e.target.value });
        break;
      case "phone":
        setFormFields({ ...formFields, phone: e.target.value });
        break;
      case "message":
        setFormFields({ ...formFields, message: e.target.value });
        break;
      default:
        break;
    }
  };

  return (
    <Container align="flex-start">
      <FormContainer>
        <StyledForm ref={form} onSubmit={sendEmail}>
          <FormRow>
            <InputContainer>
              <InputLabel> First Name </InputLabel>
              <FieldInput
                onChange={(e) => UpdateFormField(e, "first")}
                value={formFields.first}
                name="first_name"
              />
            </InputContainer>

            <InputContainer>
              <InputLabel> Last Name </InputLabel>
              <FieldInput
                onChange={(e) => UpdateFormField(e, "last")}
                value={formFields.last}
                name="last_name"
              />
            </InputContainer>
          </FormRow>

          <FormRow>
            <InputContainer>
              <InputLabel>Email</InputLabel>
              <FieldInput
                onChange={(e) => UpdateFormField(e, "email")}
                value={formFields.email}
                name="email"
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>Phone (optional)</InputLabel>
              <FieldInput
                onChange={(e) => UpdateFormField(e, "phone")}
                value={formFields.phone}
                name="phone"
              />
            </InputContainer>
          </FormRow>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <MessageInput
            onChange={(e) => UpdateFormField(e, "message")}
            value={formFields.message}
            placeholder="Your Request/Enquiry"
            name="message"
          />
          <MeetingForm />
          <StyledButton disabled={disabled}>{sendText}</StyledButton>
        </StyledForm>
      </FormContainer>
    </Container>
  );
};

const FieldInput = styled.input`
  color: black;
  background: lightgrey;
  border: none;
  width: 300px;
  height: 30px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 12px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2.5em;
  @media only screen and (max-width: 600px) {
    width: 40%;
  }
`;

const MessageInput = styled.textarea`
  min-width: 80%;
  max-width: 100%;
  min-height: 200px;
  max-height: 100%;
  background: lightgrey;
  border: none;
  color: black;
  font-size: 16px;
  @media only screen and (max-width: 600px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0 0.5em 0;
  width: 80%;
  // border: 2px solid green;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  // align-items: space-between;
  // background: red;
  margin: 0;
`;

const InputLabel = styled.label`
  font-size: 16px;
`;
const StyledForm = styled.form`
  width: 100%;
  // background: red;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 30px;
  background-color: ${({ theme }) => theme.accent};
  border: none;
  border-radius: 3px;
  &:disabled {
    background-color: grey;
  }
`;
