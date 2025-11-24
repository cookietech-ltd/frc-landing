"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import getServices from "@/components/sections/service-details/getServices";
import Image from "next/image";
import React from "react";

const ServiceDetailsPrimary = () => {
  const { id: currentId } = useParams();
  const router = useRouter();

  // Find the current service based on the ID from the URL
  const currentService = getServices()?.find(
    ({ id }) => id === Number(currentId)
  );

  // Redirect if service not found
  useEffect (() => {
    if (!currentService) {
      router.push("/services");
    }
  }, [currentService, router]);
  

  if (!currentService) {
    return null; 
  }

  const { imageLarge, title, longDescription } = currentService;

  return (
    <div className="ltn__page-details-area ltn__service-details-area mb-105">
      <div className="container">

        {/* Image Section */}
        <div className="row">
          <div className="col-12">
            <div className="ltn__blog-img">
              {/* Use the image from JSON */}
              {imageLarge ? (
                 <Image 
                   src={imageLarge} 
                   alt={title} 
                   style={{ width: '100%', height: 'auto' }} 
                   priority // Good for LCP since it's the main image
                 />
              ) : (
                 // Fallback if image is missing in JSON
                 <div style={{background: '#eee', height: '400px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    No Image Available
                 </div>
              )}
            </div>
          </div>
        </div>

        {/* Text section */}
        <div className="row">
          <div className="col-12">
            <div className="ltn__page-details-inner ltn__service-details-inner">
              {/* Rendering a <p> tag for every string in the array */}
              {longDescription && longDescription.map((paragraph, index) => (
                <p key={index}>
                  {/* Rendering capital for first paragraph */}
                  {index === 0 ? (
                      <>
                        <span className="ltn__first-letter">{paragraph.charAt(0)}</span>
                        {paragraph.slice(1)}
                      </>
                  ) : (
                      paragraph
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPrimary;
