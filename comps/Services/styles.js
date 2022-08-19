import styled from "styled-components";

export const ServiceName = styled.h3`
  color: ${({ theme }) => theme.headings};
  margin: 0;
`;

export const ServiceExcerpt = styled.p`
  color: ${({ theme }) => theme.cardText};
  text-align: center;
  // padding: 0.5em;
  font-size: 14px;
  @media only screen and (max-width: 450px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const LearnButton = styled.div`
  color: ${({ theme }) => theme.cardText};
  width: 70%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.accent};
  text-align: center;
  border-radius: 3px;
  @media only screen and (max-width: 450px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 50%;
`;
export const ServiceImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-bottom-radius: 40px;
`;
export const TextContainer = styled.div`
  height: 40%;
  // background: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
`;
