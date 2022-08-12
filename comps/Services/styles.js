import styled from "styled-components";

export const ServiceName = styled.h2`
  color: ${({ theme }) => theme.headings};
`;

export const ServiceExcerpt = styled.p`
  color: ${({ theme }) => theme.cardText};
  text-align: center;
  padding: 0.5em;
`;

export const LearnButton = styled.div`
  color: ${({ theme }) => theme.cardText};
  width: 50%;
  padding: 0.5em;
  border: 2px solid ${({ theme }) => theme.buttonBorder};
  text-align: center;
  border-radius: 3px;
`;
