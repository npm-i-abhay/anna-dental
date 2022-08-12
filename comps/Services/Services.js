import React from "react";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import Link from "next/link";

// component imports
import { Container } from "../common/Container";

import { ServiceName, ServiceExcerpt, LearnButton } from "./styles";

export const Services = ({
  serviceName,
  serviceExcerpt = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
}) => {
  const theme = useTheme();

  return (
    <Container radius="5px" width="20%" bgCol={theme.serviceCard}>
      <img
        layout="responsive"
        width="80%"
        height="50%"
        src="http://placekitten.com/200/300"
      />
      <ServiceName>{serviceName}</ServiceName>
      <ServiceExcerpt>{serviceExcerpt}</ServiceExcerpt>
      <LearnButton>Learn More</LearnButton>
    </Container>
  );
};
