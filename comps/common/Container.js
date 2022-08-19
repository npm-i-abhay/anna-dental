import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ bgCol }) => bgCol};
  border: ${({ border }) => border};
  padding: 0.5em;
  border-radius: ${({ radius }) => radius};
  padding: ${({ padding }) => padding};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  backdrop-filter: ${({ filter }) => filter};
  box-shadow: ${({ shadow }) => shadow};
  margin: ${({ margin }) => margin};
  z-index: ${({ zIndex }) => zIndex};
  @media only screen and (max-width: 450px) {
    display: ${({ mobDisplay }) => mobDisplay};
    height: ${({ mobHeight }) => mobHeight};
    width: ${({ mobWidth }) => mobWidth};
    padding: ${({ mobPadding }) => mobPadding};
    flex-flow: ${({ mobFlow }) => mobFlow};
    margin: ${({ mobMargin }) => mobMargin};
    flex-flow: ${({ mobDirection }) => mobDirection};
    background-color: ${({ bgColMob }) => bgColMob};
  }
`;

export const Container = ({
  align = "center",
  justify = "space-around",
  height = "100%",
  width = "100%",
  direction = "column",
  bgCol,
  children,
  radius = 0,
  padding,
  border,
  mobDisplay,
  mobHeight,
  mobWidth,
  mobPadding,
  position,
  top,
  filter,
  shadow,
  mobFlow,
  margin,
  mobMargin,
  zIndex,
  mobDirection,
  bgColMob,
}) => {
  return (
    <Wrapper
      width={width}
      bgCol={bgCol}
      justify={justify}
      height={height}
      align={align}
      direction={direction}
      radius={radius}
      padding={padding}
      border={border}
      mobDisplay={mobDisplay}
      mobHeight={mobHeight}
      mobWidth={mobWidth}
      mobPadding={mobPadding}
      position={position}
      top={top}
      filter={filter}
      shadow={shadow}
      mobFlow={mobFlow}
      margin={margin}
      mobMargin={mobMargin}
      zIndex={zIndex}
      mobDirection={mobDirection}
      bgColMob={bgColMob}
    >
      {children}
    </Wrapper>
  );
};
