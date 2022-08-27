import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
// utils
import { useTheme } from "@/utils/provider";
import { comp_theme } from "@/utils/variables";
import { useMenu } from "@/utils/provider";
import { Container } from "../Container";

export const Navigation = () => {
  const { theme } = useTheme();
  const { menuDisplay, setMenuDisplay } = useMenu();
  const [serviceDropDown, setServiceDropDown] = useState(0);
  const handleMenu = () => {
    menuDisplay === "none" ? setMenuDisplay("flex") : setMenuDisplay("none");
  };
  const [sWidth, setSwidth] = useState();

  useEffect(() => {
    // window.onload = () => {
    //   setSwidth(window.innerWidth);
    // };
    window.onresize = () => {
      setSwidth(window.innerWidth);
      console.log("swidth", sWidth);
    };
    setSwidth(window.innerWidth);

    // detecting when the screen resizes
  }, [sWidth]);

  return (
    <>
      {sWidth < 600 ? (
        <MobContainer>
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
        </MobContainer>
      ) : (
        <Container
          bgCol={"white"}
          width="98%"
          shadow={"2px 3px 5px  #999999;"}
          radius="2px"
          // filter={"blur(4px)"}
          position="sticky"
          top="0px"
          height="80%"
          direction="row"
          zIndex={2}
        >
          <DesktopLogoContainer>
            <Logo>
              {" "}
              <LogoImg src="/people/person.jpg" />{" "}
            </Logo>
          </DesktopLogoContainer>
          <DesktopLinkContainer>
            <Link href={""} passHref>
              <MenuLink>Home</MenuLink>
            </Link>

            <Link href={""} passHref>
              <MenuLink>Contact</MenuLink>
            </Link>

            <Link href={""} passHref>
              <MenuLink
                onMouseEnter={() => setServiceDropDown(300)}
                onMouseLeave={() => setServiceDropDown(0)}
              >
                Services
                <ServicesContainer disp={serviceDropDown}>
                  {serviceDropDown > 0 && (
                    <>
                      <Link href={"/service/solea"} passHref>
                        <MenuLink>Solea</MenuLink>
                      </Link>
                      <Link href={"/service/cerec"} passHref>
                        <MenuLink> Cerec </MenuLink>
                      </Link>
                      <Link href={"/service/new-office"} passHref>
                        <MenuLink> New Office </MenuLink>
                      </Link>
                      <Link href={"/service/sundries"} passHref>
                        <MenuLink> Sundries</MenuLink>
                      </Link>
                    </>
                  )}
                </ServicesContainer>
              </MenuLink>
            </Link>

            <Link href={""} passHref>
              <MenuLink>Request Meeting</MenuLink>
            </Link>
          </DesktopLinkContainer>
        </Container>
      )}
    </>
  );
};

// MOB STYLED COMPONENTS ------==--===---=========--------
const MobContainer = styled.div`
  padding: 0.4em;
  display: flex;
  height: 100%;
  flex-flow: column;
  align-items: flex-end;
  position: sticky;
  top: 0px;
  // background: green;
  width: 100%;
  z-index: 9999;
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
  width: 100%;
  height: 70vh;
  align-items: flex-end;
  display: ${(props) => props.display}};
  position: absolute;
  top: 50px;
  right:0px;
  // background: ${({ theme }) => theme.heroTxtCont};
  backdrop-filter:blur(5px);
`;
const MenuLink = styled.a`
  padding: 0.25em;
  display: flex;
  justify-content: flex-end;
  // width: 100%;
  text-align: right;
  position: relative;
`;

const DesktopLinkContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
`;
const DesktopLogoContainer = styled.div`
  width: 40%;
  display: flex;
  // background: green;
`;

export const Logo = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 80px;
  background: grey;
`;
export const LogoImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 80px;
`;

const ServicesContainer = styled.div`
  height: ${({ disp }) => disp}px;
  width: 150px;
  position: absolute;
  top: 30px;
  // display: ${({ disp }) => disp};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${({ theme }) => theme.serviceCard};
  color: white;
  transition: all 0.5s;
`;
