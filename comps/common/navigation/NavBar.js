import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import Link from "next/link";
// utils

import { comp_theme } from "@/utils/variables";
import { useMenu } from "@/utils/provider";
import { Container } from "../Container";
import { motion, useCycle } from "framer-motion";

export const NavBar = () => {
  const theme = useTheme();
  const { menuDisplay, setMenuDisplay } = useMenu();
  const [isServices, toggleOpen] = useCycle(false, true);
  const [isOpen, setIsOpen] = useState(false);
  const [serviceDropDown, setServiceDropDown] = useState(0);
  const [mobServiceDisp, setMobServiceDisp] = useState("none");
  const handleMenu = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  };
  const handleMobileServices = () => {
    // console.log("mobServiceDisp", mobServiceDisp);
    // mobServiceDisp === "none"
    //   ? setMobServiceDisp("flex")
    //   : setMobServiceDisp("none");
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

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(1000px at 40px 30px)`,
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "white",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 1,
        clipPath: { duration: 0.5 },
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 10px)",
      transition: {
        clipPath: { duration: 0.5 },
        // delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const LinkHover = {
    hover: {
      scale: 1.1,
      borderTopLeftRadius: "7px",
      borderTopRightRadius: "7px",
      color: theme.hamMenu,
      height: 35,
      boxShadow: "2px 2px 20px #dddddd",
      justifyContent: "center",
      transition: {
        duration: 0.5,
        delay: 0.2,

        type: "spring",
        ease: "easeOut",
      },
    },
    rest: {
      justifyContent: "center",
      transition: {
        duration: 1,
        type: "spring",
        ease: "easeOut",
      },
    },
  };

  const childrenVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const linkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const servicesVariants = {
    open: {
      height: 200,
      opacity: 1,
      y: 50,
      x: -150,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      height: 0,
      y: 50,
      x: -150,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <>
      {sWidth < 600 ? (
        <MobContainer>
          <HamContainer
            initial={false}
            animate={isOpen ? "open" : "closed"}
            // onClick={() => toggleOpen()}
          >
            <Background variants={sidebar}>
              <HamBarContainer onClick={() => handleMenu()}>
                <Bar1 />
                <Bar2 />
                <Bar3 />
              </HamBarContainer>
              <Menu
                display={menuDisplay}
                variants={childrenVariants}
                // animate={isOpen ? { backgroundColor: "white" } : "white"}
              >
                <LinkContainer variants={linkVariants}>
                  <MenuLink>Home</MenuLink>
                </LinkContainer>

                <LinkContainer variants={linkVariants}>
                  <MenuLink>Contact</MenuLink>
                </LinkContainer>

                <LinkContainer variants={linkVariants}>
                  <MenuLink
                    variants={childrenVariants}
                    onClick={() => toggleOpen()}
                  >
                    Services +
                    <MobServicesContainer
                      variants={servicesVariants}
                      initial={false}
                      animate={isServices ? "open" : "closed"}
                    >
                      {/* {serviceDropDown > 0 && ( */}
                      <>
                        <LinkContainer
                          variants={linkVariants}
                          href={"/service/solea"}
                          passHref
                        >
                          <MenuLink>Solea</MenuLink>
                        </LinkContainer>
                        <LinkContainer
                          variants={linkVariants}
                          href={"/service/cerec"}
                          passHref
                        >
                          <MenuLink> Cerec </MenuLink>
                        </LinkContainer>
                        <LinkContainer
                          variants={linkVariants}
                          href={"/service/new-office"}
                          passHref
                        >
                          <MenuLink> New Office </MenuLink>
                        </LinkContainer>
                        <LinkContainer
                          variants={linkVariants}
                          href={"/service/sundries"}
                          passHref
                        >
                          <MenuLink> Sundries</MenuLink>
                        </LinkContainer>
                      </>
                      {/* )} */}
                    </MobServicesContainer>
                  </MenuLink>
                </LinkContainer>

                <LinkContainer variants={linkVariants}>
                  <MenuLink>Request Meeting</MenuLink>
                </LinkContainer>
              </Menu>
            </Background>
          </HamContainer>
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
            <Link href={"/"} passHref>
              <MenuLink
                initial={"rest"}
                variants={LinkHover}
                animate={"rest"}
                whileHover={"hover"}
              >
                Home
              </MenuLink>
            </Link>

            <Link href={""} passHref>
              <MenuLink
                initial={"rest"}
                variants={LinkHover}
                animate={"rest"}
                whileHover={"hover"}
              >
                Contact
              </MenuLink>
            </Link>

            <Link
              href={"/"}
              passHref
              // style={{ background: "red", height: "100%" }}
              // animate={serviceDropDown == 300 ? "open" : "closed"}
              // variants={sidebar}
            >
              <MenuLink
                initial={"rest"}
                variants={LinkHover}
                animate={"rest"}
                whileHover={"hover"}
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
              <MenuLink
                initial={"rest"}
                variants={LinkHover}
                animate={"rest"}
                whileHover={"hover"}
              >
                Request Meeting
              </MenuLink>
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
  // height: 100%;
  flex-flow: column;
  align-items: flex-end;
  position: sticky;
  top: 0px;
  // background: green;
  width: 100%;
  margin-top: 0.25em;
  z-index: 999999;
`;
const HamContainer = styled(motion.div)`
  padding: 0.4em;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  // background: pink;

  // height: 100px;
  // width: 100%;
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

const Menu = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  font-size: 2em;
  width: 100vw;
  height: 100vh;
  align-items: flex-start;
  // display: ${(props) => props.display}};
  position: absolute;
  top: -25px;
  right: 0px;
  // background: ${({ theme }) => theme.lilacAccent};
  background: ${({ theme }) => theme.serviceCard};
  // backdrop-filter: blur(5px);
  z-index: 2;
`;
const MenuLink = styled(motion.a)`
  padding: 0.25em;
  display: flex;
  justify-content: flex-end;
  // width: 180px;
  text-align: right;
  position: relative;
`;

const DesktopLinkContainer = styled(motion.div)`
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

const ServicesContainer = styled(motion.div)`
  height: ${({ disp }) => disp}px;
  width: 180px;
  position: absolute;
  top: 35px;
  // display: ${({ disp }) => disp};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${({ theme }) => theme.serviceCard};
  color: white;
  transition: all 0.5s;
  right: 0px;
`;
const MobServicesContainer = styled(motion.div)`
  height: 200px;
  width: 180px;
  color: white;
  transition: all 0.5s;
  font-size: 18px;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Background = styled(motion.div)`
  position: absolute;
  top: 20px;
  left: 0px;
  bottom: 0;
  width: 100%;
  background: red;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // border: 2px solid blue;
  // z-index: 99999999;
`;

const HamBarContainer = styled.div`
  padding: 1em;
  // background: green;
  position: absolute;
  top: -25px;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LinkContainer = styled(motion.div)`
  color: white;
`;