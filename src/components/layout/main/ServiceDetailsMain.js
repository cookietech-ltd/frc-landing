"use client";

import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import ServiceDetailsPrimary from "@/components/sections/service-details/ServiceDetailsPrimary";
import { useParams } from "next/navigation";
import getServices from "@/components/sections/service-details/getServices";

const ServiceDetailsMain = () => {
  const { id } = useParams();
  const services = getServices();

  const currentService = services?.find((s) => s.id === Number(id));

  return (
    <main>
      <HeroPrimary
        // If service exists, use its title, otherwise fallback to "Service Details"
        title={currentService ? currentService.title : "Service Details"}
        text="Service Details"
        item={{ name: "Service", path: "/services" }}
      />
      <ServiceDetailsPrimary />
    </main>
  );
};

export default ServiceDetailsMain;
