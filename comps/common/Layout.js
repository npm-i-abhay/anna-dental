import React from "react";
import styled from "styled-components";

import { siteServices } from "../propsData";

// components
import { Navigation } from "./navigation/Navigation";
import { Services } from "@/comps/Services/Services";
import { Review } from "../ReviewCard/Review";
import { ReviewCarousel } from "../ReviewCard/ReviewCarousel";
import { FooterMeeting } from "../FooterMeeting/FooterMeeting";
import { HomeBanner } from "../HeroBanners/HomeBanner";
import { SubBanner } from "../SubBanner/SubBanner";
import { Heading } from "./Heading";

export const Layout = () => {
  return (
    <Wrapper>
      <Navigation />
      <HomeBanner />
      <SubBanner />
      <Heading heading={"What We Offer"} />

      <ServicesContainer>
        {siteServices.map((service, index) => (
          <Services
            imgSrc={service.imgSrc}
            serviceName={service.serviceName}
            serviceExcerpt={service.serviceExcerpt}
          />
        ))}
      </ServicesContainer>

      <Heading heading={"What Our Customers Say About Us"} />

      <ReviewCarousel />
      <FooterMeeting />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ServicesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1em;
  justify-content: space-around;
`;
