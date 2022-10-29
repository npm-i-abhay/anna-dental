import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// components
import { Container } from "@/comps/common/Container";
import { ServiceLayout } from "@/comps/common/ServiceLayout";
import { ServiceBanner } from "@/comps/Services/ServiceBanner";
import { ServiceSubBanner } from "@/comps/Services/ServiceSubBanner";
import { ServicesIcons } from "@/comps/Services/ServicesIcons";

// data imports
import { servicesData } from "@/comps/Services/data";
import { NavBar } from "@/comps/common/navigation/NavBar";

export default function Service() {
  const { query } = useRouter();
  const [sWidth, setSwidth] = useState(900);

  const handleResize = () => {
    setSwidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.innerWidth < 800 && setSwidth(500);
    window.scroll(0, 0);
    // detecting when the screen resizes
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.innerWidth < 800 && setSwidth(500);
    window.scroll(0, 0);
    // detecting when the screen resizes
  }, [query]);

  const { solea, cerec, newOffice, sundries } = servicesData;
  const [pageTypeProp, setPageTypeProp] = useState(solea);
  useEffect(() => {
    switch (query.service) {
      case "solea":
        setPageTypeProp(solea);
        break;
      case "cerec":
        setPageTypeProp(cerec);
        break;
      case "new-office":
        setPageTypeProp(newOffice);
        break;
      case "sundries":
        setPageTypeProp(sundries);
        break;
      default:
        break;
    }
  }, [query.service]);

  return (
    <>
      <NavBar />
      <Container>
        <ServiceLayout>
          <ServiceBanner
            productName={pageTypeProp.productName}
            logoImgSrc={pageTypeProp.logoImgSrc}
            productImgSrc={pageTypeProp.productImgSrc}
            productCopy={pageTypeProp.productCopy}
            subImageSrc={pageTypeProp.subImageSrc}
          />
          <ServiceSubBanner
            productSubHead={pageTypeProp.productSubHead}
            productSubCopy={pageTypeProp.productSubCopy}
            //  productSubHead={pageTypeProp.productSubHead}
          />
          <ServicesIcons
            iconCopyOne={pageTypeProp.iconCopyOne}
            iconCopyTwo={pageTypeProp.iconCopyTwo}
            iconCopyThree={pageTypeProp.iconCopyThree}
            iconCopyFour={pageTypeProp.iconCopyFour}
          />
        </ServiceLayout>
      </Container>
    </>
  );
}
