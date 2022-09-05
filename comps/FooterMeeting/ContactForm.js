import React, { useState } from "react";
import styled from "styled-components";

// COMPONENT IMPORT
import { Container } from "../common/Container";
export const ContactForm = () => {
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
        console.log(formFields);
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
        <FormRow>
          <InputContainer>
            <InputLabel> First Name </InputLabel>
            <FieldInput
              onChange={(e) => UpdateFormField(e, "first")}
              value={formFields.first}
              name="First Name"
            />
          </InputContainer>

          <InputContainer>
            <InputLabel> Last Name </InputLabel>
            <FieldInput
              onChange={(e) => UpdateFormField(e, "last")}
              value={formFields.last}
              name="Last Name"
            />
          </InputContainer>
        </FormRow>

        <FormRow>
          <InputContainer>
            <InputLabel>Email</InputLabel>
            <FieldInput
              onChange={(e) => UpdateFormField(e, "email")}
              value={formFields.email}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel>Phone (optional)</InputLabel>
            <FieldInput
              onChange={(e) => UpdateFormField(e, "phone")}
              value={formFields.phone}
            />
          </InputContainer>
        </FormRow>
        <MessageInput
          onChange={(e) => UpdateFormField(e, "message")}
          value={formFields.message}
          placeholder="Your Request/Enquiry"
        />
      </FormContainer>
    </Container>
  );
};

const FieldInput = styled.input`
  color: black;
  background: lightgrey;
  border: none;
  width: 100%;
  @media only screen and (max-width: 600px) {
    // width: 60%;
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
  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0 0.5em 0;
  width: 100%;
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
  align-items: space-between;
`;

const InputLabel = styled.label`
  font-size: 16px;
`;
