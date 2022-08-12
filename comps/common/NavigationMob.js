import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
// utils
import { useTheme } from "@/utils/provider";
import { comp_theme } from "@/utils/variables";
import { useMenu } from "@/utils/provider";

export const NavigationMob = () => {
  const { theme } = useTheme();
  const { menuDisplay, setMenuDisplay } = useMenu();

  const handleMenu = () => {
    menuDisplay === "none" ? setMenuDisplay("flex") : setMenuDisplay("none");
  };

  return (
    <>
      <Container>
        <HamContainer onClick={handleMenu}>
          <Bar1 />
          <Bar2 />
          <Bar3 />
        </HamContainer>
        <Menu display={menuDisplay}>
          <Link href={""} passHref>
            <MenuLink>Home</MenuLink>
          </Link>

          <Link href={""} passHref>
            <MenuLink>Contact</MenuLink>
          </Link>

          <Link href={""} passHref>
            <MenuLink>Services</MenuLink>
          </Link>

          <Link href={""} passHref>
            <MenuLink>Request Meeting</MenuLink>
          </Link>
        </Menu>
      </Container>
    </>
  );
};

// STYLED COMPONENTS ------==--===---=========--------
const Container = styled.div`
  padding: 0.4em;
  display: flex;
  height: 100%;
  flex-flow: column;
  align-items: flex-end;
`;
const HamContainer = styled.div`
  padding: 0.4em;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
`;
const Bar1 = styled.div`
  height: 6px;
  width: 38px;
  margin-bottom: 0.2em;
  background-color: ${({ theme }) => theme.hamMenu};
`;
const Bar2 = styled.div`
  height: 6px;
  width: 28px;
  margin-bottom: 0.2em;
  background-color: ${({ theme }) => theme.hamMenu};
`;
const Bar3 = styled.div`
  height: 6px;
  width: 38px;
  margin-bottom: 0.2em;
  background-color: ${({ theme }) => theme.hamMenu};
`;

const Menu = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  font-size: 2em;
  width: 80%;
  height: 70vh;
  align-items: flex-end;
  display: ${(props) => props.display}};
`;

const MenuLink = styled.a`
  padding: 0.25em;
  display: flex;
  justify-content: flex-end;
  // width: 100%;
  text-align: right;
`;
