import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { siteServices, siteReviews } from "../propsData";

// components
import { NavBar } from "./navigation/NavBar";
import { Services } from "@/comps/Services/Services";
import { Review } from "../ReviewCard/Review";
import { ReviewCarousel } from "../ReviewCard/ReviewCarousel";
import { FooterMeeting } from "../FooterMeeting/FooterMeeting";
import { HomeBanner } from "../HeroBanners/HomeBanner";
import { SubBanner } from "../SubBanner/SubBanner";
import { Heading } from "./Heading";
import { Carousel } from "../caraousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { AboutBanner } from "./AboutBanner";

export const Layout = () => {
  const [sWidth, setSwidth] = useState(900);

  const handleResize = () => {
    setSwidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.innerWidth < 800 && setSwidth(500);
    // detecting when the screen resizes
  }, []);

  return (
    <Wrapper>
      <NavBar />
      <AboutBanner />
      <HomeBanner />
      <SubBanner />
      <Heading heading={"What We Offer"} />

      <ServicesContainer>
        <Swiper
          modules={[Pagination, Navigation]}
          // navigation={sWidth < 600 ? true : false}
          slidesPerView={sWidth > 650 ? 4 : 2}
          spaceBetween={10}
          pagination={{ clickable: true }}
        >
          {siteServices.map((service, index) => {
            return (
              <SwiperSlide>
                <Services
                  imgSrc={service.imgSrc}
                  serviceName={service.serviceName}
                  serviceExcerpt={service.serviceExcerpt}
                  serviceLink={service.serviceLink}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ServicesContainer>
      <Heading heading={"What Our Customers Say About Us"} />
      <ServicesContainer>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={sWidth > 650 ? 3 : 1}
          spaceBetween={10}
          navigation={sWidth > 650 ? true : false}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // pagination={{
          //   clickable: true,
          // }}
        >
          {siteReviews.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <Review body={review.body} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ServicesContainer>

      {/* <ReviewCarousel /> */}
      {/* <Carousel /> */}
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
  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.accent};
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.accent} !important;
    height: 10px;
    width: 10px;
    transition: all 0.5s;
  }
  .swiper {
    padding-bottom: 30px !important;
  }
  // .swiper-button-prev {
  //     background-image: url(./next.svg);
  //     background-repeat: no-repeat;
  //     background-size: 100% auto;
  //     background-position: center;
  //   }
  //   .swiper-button-next::after {
  //   display: none;
  // }
`;
