import React from "react";

import { Navigation } from "@/comps/common/navigation/Navigation";
import { Layout } from "@/comps/common/Layout";
import { ServiceLayout } from "@/comps/common/ServiceLayout";
import { ServiceBanner } from "@/comps/common/ServiceBanner";

export default function service() {
  return (
    <div>
      <ServiceLayout>
        {" "}
        <ServiceBanner />{" "}
      </ServiceLayout>
    </div>
  );
}
