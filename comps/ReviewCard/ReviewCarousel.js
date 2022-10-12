import React, { useState } from "react";
import styled from "styled-components";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

// Import components
import { Review } from "./Review";

// dataImports
import { siteReviews } from "../propsData";

export const ReviewCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleCarousel = (i) => {
    if (i < 0) {
      i = 0;
    }
    if (i > imgData.length - 1) {
      i = 0;
    }

    // if(i > imgData.length)
    // {
    //   i = 0
    // }
    console.log(i);
    setIndex(i);
  };

  return (
    <>
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
        <ControlsCont>
          <Controls>
            <BiLeftArrow
              onClick={() => handleCarousel(index - 1)}
              size={32}
              color="black"
            />

            <BiRightArrow
              onClick={() => handleCarousel(index + 1)}
              size={32}
              color={"black"}
            />
          </Controls>
        </ControlsCont>
      </ReviewsContainer>
    </>
  );
};

const ReviewsContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  padding: 1em;
  justify-content: space-around;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 50px;
`;
export const ControlsCont = styled.div`
  display: flex;
  justify-content: center;
`;
