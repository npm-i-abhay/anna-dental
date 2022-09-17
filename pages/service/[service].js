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
          //  productSubHead={pageTypeProp.productSubHead}
          />
          <ServicesIcons />
        </ServiceLayout>
      </Container>
    </>
  );
}
