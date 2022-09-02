import React from "react";
import styled, { useTheme } from "styled-components";

// styled component imports
import {
  ReviewHeader,
  Avatar,
  AvatarImg,
  Info,
  Reviewer,
  ReviewBody,
} from "./styles";

// component imports
import { Container } from "../common/Container";

export const Review = ({
  name = "Mr Nobody",
  location = "Vancouver Dental",
  body = "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
  imgSrc = "/people/person.jpg",
  dim,

  left,
  marginL,
  marginR,
  opacity,
  z,
  onClick,
}) => {
  const theme = useTheme();

  return (
    <Container
      width={`${dim + 30}%`}
      mobWidth="100%"
      height={`${dim + 30}%`}
      bgCol={theme.reviewBg}
      padding=".5em"
      border={`3px solid ${theme.hamMenu} `}
      radius="10px"
      position="relative"
      left={left}
      marginL={`${marginL}px`}
      marginR={`${marginR}px`}
      opacity={opacity}
      zIndex={z}
      onClick={onClick}
    >
      <ReviewHeader>
        <Avatar>
          <AvatarImg src={imgSrc} />
        </Avatar>
        <Info>
          <Reviewer>{name}</Reviewer>
          <Reviewer>{location}</Reviewer>
        </Info>
      </ReviewHeader>

      <ReviewBody>{body}</ReviewBody>
    </Container>
  );
};
