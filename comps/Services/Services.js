import React from "react";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
  serviceLink,
}) => {
  const theme = useTheme();
  const r = useRouter();
  return (
    <Container
      radius="3px"
      width="100%"
      height="100%"
      mobWidth={"100%"}
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
        <LearnButton
          onClick={() => r.push(`/${serviceLink}`)}
          whileHover={{ scale: 1.1 }}
        >
          Learn More
        </LearnButton>
      </TextContainer>
    </Container>
  );
};
