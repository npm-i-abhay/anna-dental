import styled from "styled-components";

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Avatar = styled.div`
  height: 100px;
  width: 120px;
  border-radius: 80px;
  background: grey;
  @media only screen and (max-width: 600px) {
    height: 80px;
    width: 80px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Reviewer = styled.h4`
  text-align: right;
  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 16px;
    margin: 0.2em;
  }
`;
export const ReviewBody = styled.p`
  font-size: 14px;
  width: 80%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 12px;
    text-align: center;
  }
`;
export const AvatarImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 100px;
`;
