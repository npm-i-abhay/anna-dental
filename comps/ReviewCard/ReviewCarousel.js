import React from "react";
import styled from "styled-components";

// Import components
import { Review } from "./Review";

// dataImports
import { siteReviews } from "../propsData";

export const ReviewCarousel = () => {
  return (
    <ReviewsContainer>
      {siteReviews.map((review, index) => (
        <Review
          key={index}
          imgSrc={review.imgSrc}
          body={review.body}
          name={review.name}
          location={review.location}
        />
      ))}
    </ReviewsContainer>
  );
};

const ReviewsContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  padding: 1em;
  justify-content: space-around;
`;
