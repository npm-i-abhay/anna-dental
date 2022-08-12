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
    >
      {children}
    </Wrapper>
  );
};
