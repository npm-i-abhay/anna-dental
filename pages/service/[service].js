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

export default function service() {
  const { query } = useRouter();

  const { solea, cerec, newOffice, sundries } = servicesData;
  const [pageTypeProp, setPageTypeProp] = useState(solea);
  console.log("query.service", query.service);
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
    <Container>
      <ServiceLayout>
        <ServiceBanner
          productName={pageTypeProp.productName}
          logoImgSrc={pageTypeProp.logoImgSrc}
          productImgSrc={pageTypeProp.productImgSrc}
          productCopy={pageTypeProp.productCopy}
        />
        <ServiceSubBanner
        //  productSubHead={pageTypeProp.productSubHead}
        />
        <ServicesIcons />
      </ServiceLayout>
    </Container>
  );
}
