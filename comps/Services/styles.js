import styled from "styled-components";
import { motion } from "framer-motion";
export const ProductName = styled.h1`
  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
  margin-top: 2em;
  color: ${({ theme }) => theme.heroHeadMob};
`;

export const SubHeading = styled.h1`
  color: ${({ theme }) => theme.headings};
  text-align: center;
  width: 50%;
  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 0;
  background: grey;
`;

export const ProductImage = styled.img`
  object-fit: contain;
  height: 40%;
  width: 40%;
  @media only screen and (max-width: 600px) {
    height: 120%;
    width: 120%;
    position: absolute;
    bottom: -20%;
  }
`;

export const Logo = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  justify-content: center;
`;
export const LogoImg = styled.img`
  object-fit: cover;
  height: 50%;
  width: 50%;
  @media only screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
  }
`;

export const Icon = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    height: 50%;
    width: 50%;
  }
`;
export const IconImg = styled.img`
  object-fit: contain;
  height: 60%;
  width: 60%;
  @media only screen and (max-width: 600px) {
    height: 70%;
    width: 70%;
  }
`;

export const IconCopy = styled.span`
  color: ${({ color }) => color};
  width: 100%;
  height: 300px;
  font-size: 18px;
  display: flex;
  align-items: flex-start;
  text-align: left;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    text-align: center;
    color: ${({ color }) => color};
    font-size: 16px;
    padding: 0.5em;
    align-items: center;
    text-align: left;
  }
`;

export const HeroCopy = styled.p`
  color: ${({ color }) => color};
  width: 45%;
  font-size: 20px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    color: ${({ color }) => color};
    font-size: 16px;
    padding: 0.5em;
  }
`;

export const IconContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 2fr 3fr;
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
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0.2em;
  overflow: hidden;
  @media (max-width: 650px) {
    height: 130px;
  }
`;

export const ServiceName = styled.h3`
  color: ${({ theme }) => theme.headings};
  margin: 0;
`;

export const StyledCopyButtonContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ServiceExcerpt = styled.p`
  color: ${({ theme }) => theme.cardText};
  text-align: center;
  font-size: 0.8em;
  width: 100%;
  text-overflow: ellipsis;
  @media only screen and (max-width: 650px) {
    font-size: 0.5em;
  }
`;

export const LearnButton = styled(motion.div)`
  color: ${({ theme }) => theme.cardText};
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0px;
  border: 2px solid ${({ theme }) => theme.accent};
  text-align: center;
  border-radius: 3px;
  @media only screen and (max-width: 650px) {
    width: 80%;
    font-size: 12px;
  }
`;
