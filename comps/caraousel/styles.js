import styled from "styled-components";

export const Cont = styled.div`
  display: inline-flex;
  flex-direction: row;
`;

export const CardCont = styled.div`
  display: flex;
  //   border: 2px solid green;
  //   max-width: ${(props) => props.dim + 10}vw;
  max-width: 100vw;
  height: 60vh;
  overflow: hidden;
  // padding:5px;
`;

export const CardWrapper = styled.div`
  display: flex;
  left: ${(props) => props.left}vw;
  transition: all 0.5s;
  position: relative;
  align-items: center;
  justify-content: center;
  //   border: 2px solid red;
`;

export const Card = styled.img`
  width: ${(props) => props.dim}vw;
  height: ${(props) => props.dim}vw;
  object-fit: cover;
  position: relative;
  left: ${(props) => props.left}vw;
  z-index: ${(props) => props.z};
  opacity: ${(props) => props.op};

  margin-left: ${(props) => props.margin}em;
  margin-right: ${(props) => props.margin}em;
  transition: all 0.5s;
`;

export const Controls = styled.div`
  display: flex;
  //   border: 2px solid red;
  justify-content: center;
  width: 100%;
  height: 50px;
  cursor: pointer;
  //   margin: 50px;
`;
export const ControlsCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //   background-color: blue;
  width: 100%;
  //   height: 100%;
`;
export const CtrlButton = styled.button``;
