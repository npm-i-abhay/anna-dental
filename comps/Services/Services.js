import React from "react";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import Link from "next/link";

// component imports
import { Container } from "../common/Container";

import {
  ServiceName,
  ServiceExcerpt,
  LearnButton,
  ImgContainer,
  ServiceImage,
  TextContainer,
} from "./styles";

export const Services = ({
  imgSrc = "http://placekitten.com/200/300",
  serviceName,
  serviceExcerpt = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
}) => {
  const theme = useTheme();

  return (
    <Container
      radius="3px"
      width="20%"
      height="auto"
      mobWidth={"40%"}
      padding={0}
      justify="space-between"
      bgCol={theme.serviceCard}
    >
      <ImgContainer>
        <ServiceImage src={imgSrc} />
      </ImgContainer>
      <TextContainer>
        <ServiceName>{serviceName}</ServiceName>
        <ServiceExcerpt>{serviceExcerpt}</ServiceExcerpt>
        <LearnButton>Learn More</LearnButton>
      </TextContainer>
    </Container>
  );
};
