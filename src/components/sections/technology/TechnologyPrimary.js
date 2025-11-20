"use client";

import ServiceSidebar from "@/components/shared/sidebars/ServiceSidebar";
import Image from "next/image";
import technologySample1 from "@/assets/img/technology/technology_sample1.png";
import technologySample2 from "@/assets/img/technology/technology_sample2.png";
import React from "react";

const TechnologyPrimary = () => {

  return (
    <div className="ltn__page-details-area ltn__service-details-area mb-105">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__page-details-inner ltn__service-details-inner">
              <div className="ltn__blog-img">
                <Image src={technologySample1} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPrimary;
