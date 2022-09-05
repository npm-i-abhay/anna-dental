import React, { useState, useEffect } from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import {
  Cont,
  CardCont,
  CardWrapper,
  Card,
  Controls,
  ControlsCont,
} from "./styles";
import { Review } from "../ReviewCard/Review";
const default_data = [
  "https://placekitten.com/500/500",
  "https://placekitten.com/1000/1000",
  "https://placekitten.com/800/800",
  "https://placekitten.com/600/600",
  "https://placekitten.com/500/500",
  "https://placekitten.com/1000/1000",
  "https://placekitten.com/800/800",
  "https://placekitten.com/600/600",
];

export const Carousel = ({ imgData = default_data, dim = 70 }) => {
  // when index is 0 left=0, when index is 1, left = -100, index is 2 left is -200 and so on........
  const [index, setIndex] = useState(0);
  const [left, setLeft] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [margin, setMargin] = useState(15);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    if (screenWidth < 600) {
      setMargin(1.5);
      console.log(true);
    } else setMargin(5);

    console.log(screenWidth);
  }, [screenWidth]);
  // const [op, setOp] = useState(0);

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
    <Cont>
      {/* <Card src={imgData[index]}/> */}
      <ControlsCont>
        <Controls onClick={() => handleCarousel(index - 1)}>
          <BiLeftArrow size={32} color="black" />
        </Controls>
      </ControlsCont>
      <CardCont dim={dim + 10}>
        <CardWrapper left={index * -8.5}>
          {imgData.map((o, i) => (
            <Review
              onClick={() => setIndex(i)}
              dim={i === index ? dim : dim - 5}
              opacity={i === index ? 1 : 0.7}
              z={i === index ? imgData.length + 1 : imgData - 1}
              left={i * -(dim - 30) + 10}
              marginL={margin + 10}
              marginR={margin}
              imgSrc={o}
              // src={o}
              //   key={i}
            />
            // <Card
            //   onClick={() => setIndex(i)}
            //   dim={i === index ? dim : dim - 25}
            //   op={i === index ? 1 : 0.5}
            //   z={i === index ? imgData.length + 1 : imgData - 1}
            //   left={i * -(dim - 30) + 10}
            //   margin={margin}
            //   src={o}
            //   key={i}
            // />
          ))}
        </CardWrapper>
      </CardCont>
      <ControlsCont>
        <Controls onClick={() => handleCarousel(index + 1)}>
          <BiRightArrow size={32} color={"black"} />
        </Controls>
      </ControlsCont>
    </Cont>
  );
};
