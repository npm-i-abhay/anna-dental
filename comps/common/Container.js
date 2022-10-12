import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  align-self: ${({ alignSelf }) => alignSelf};
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
  margin-left: ${({ marginL }) => marginL};
  margin-right: ${({ marginR }) => marginR};
  z-index: ${({ zIndex }) => zIndex};
  left: ${({ left }) => left};
  opacity: ${({ opacity }) => opacity};
  transition: all 0.5s;
  order: ${({ order }) => order};
  border-bottom-right-radius: ${({ borderRight }) => borderRight};
  border-top-left-radius: ${({ borderLeft }) => borderLeft};
  @media only screen and (max-width: 600px) {
    display: ${({ mobDisplay }) => mobDisplay};
    height: ${({ mobHeight }) => mobHeight};
    width: ${({ mobWidth }) => mobWidth};
    padding: ${({ mobPadding }) => mobPadding};
    flex-flow: ${({ mobFlow }) => mobFlow};
    margin: ${({ mobMargin }) => mobMargin};
    flex-flow: ${({ mobDirection }) => mobDirection};
    background-color: ${({ bgColMob }) => bgColMob};
    border-radius: ${({ mobRadius }) => mobRadius};
    order: ${({ mobOrder }) => mobOrder};
  }
`;

export const Container = ({
  align = "center",
  justify = "center",
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
  mobRadius,
  left,
  opacity,
  marginL,
  marginR,
  onClick,
  order,
  mobOrder,
  alignSelf,
  borderLeft,
  borderRight,
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
      mobRadius={mobRadius}
      left={left}
      opacity={opacity}
      marginL={marginL}
      marginR={marginR}
      onClick={onClick}
      order={order}
      mobOrder={mobOrder}
      alignSelf={alignSelf}
      borderLeft={borderLeft}
      borderRight={borderRight}
    >
      {children}
    </Wrapper>
  );
};
