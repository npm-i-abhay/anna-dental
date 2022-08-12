import styled from "styled-components";

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Avatar = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 80px;
  background: grey;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Reviewer = styled.h4`
  text-align: right;
`;
export const ReviewBody = styled.p`
  font-size: 14px;
  width: 80%;
`;
export const AvatarImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 80px;
`;
