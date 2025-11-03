"use client";
import ServiceCard from "@/components/shared/cards/ServiceCard";
import getAllServices from "@/libs/getAllServices";
import { useCommonContext } from "@/providers/CommonContext";
import React, { useEffect } from "react";

const ServicesSlider = ({ isPrimary }) => {
  const { filteredServices, category } = useCommonContext() || {};
  const usableServices = [filteredServices, getAllServices()];
  const services = usableServices[filteredServices ? 0 : 1]?.filter(({ id }) =>
    category ? true : id > 0 && id < (isPrimary ? 7 : 4)
  );

  useEffect(() => {
    const checkJquery = setInterval(() => {
      const is$ = window?.$;
      if (is$) {
        clearInterval(checkJquery);
        
        // Initialize slider if not already initialized
        if ($(".ltn__service-slider-active").length && !$(".ltn__service-slider-active").hasClass("slick-initialized")) {
          $(".ltn__service-slider-active").slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow:
              '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow:
              '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                },
              },
            ],
          });
        }
      }
    }, 100);

    return () => clearInterval(checkJquery);
  }, []);

  return (
    <div className="ltn__service-area section-bg-1 pt-115 pb-70">
      <div className="container">
        <div className="row">
          {category ? (
            ""
          ) : (
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h6 className="section-subtitle ltn__secondary-color">
                  {"//"} Our Services
                </h6>
                <h1 className="section-title">
                  Comprehensive Gym Management Solutions<span>.</span>
                </h1>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__service-slider-active slick-arrow-1">
              {services?.map((service, idx) => (
                <div key={idx} className="px-2">
                  <ServiceCard service={service} isPrimary={isPrimary} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;

