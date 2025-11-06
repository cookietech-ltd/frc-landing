"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import installEx5 from "@/assets/img/service/old_services/install-ex-5_orig.jpg";
import installEx6 from "@/assets/img/service/old_services/install-ex-6_orig.jpg";
import installEx7 from "@/assets/img/service/old_services/install-ex-7_orig.jpg";
import installEx8 from "@/assets/img/service/old_services/install-ex-8_orig.jpg";
import installEx12 from "@/assets/img/service/old_services/install-ex-12_orig.jpg";
import installEx13 from "@/assets/img/service/old_services/install-ex-13_orig.jpg";

const PreviousServicesSlider = () => {
  const serviceImages = [
    { image: installEx5, alt: "Equipment Installation Service" },
    { image: installEx6, alt: "Gym Equipment Maintenance" },
    { image: installEx7, alt: "Professional Service Work" },
    { image: installEx8, alt: "Equipment Setup" },
    { image: installEx12, alt: "Installation Service Example" },
    { image: installEx13, alt: "Completed Service Project" },
  ];

  useEffect(() => {
    const checkJquery = setInterval(() => {
      const is$ = window?.$;
      if (is$) {
        clearInterval(checkJquery);

        // Initialize slider if not already initialized
        if (
          $(".ltn__previous-services-slider-active").length &&
          !$(".ltn__previous-services-slider-active").hasClass(
            "slick-initialized"
          )
        ) {
          $(".ltn__previous-services-slider-active").slick({
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: true,
            dots: true,
            infinite: true,
            speed: 800,
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
    <div className="ltn__gallery-area pt-115 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">
                {"//"} Our Work
              </h6>
              <h1 className="section-title">
                Previous Installations Projects<span>.</span>
              </h1>
              <p>
                Professional equipment installation, maintenance, and service
                work completed for our valued clients
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__previous-services-slider-active slick-arrow-1">
              {serviceImages.map((item, idx) => (
                <div key={idx} className="ltn__gallery-item px-2">
                  <div className="ltn__gallery-item-inner">
                    <div className="ltn__gallery-item-img">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        placeholder="blur"
                        style={{
                          width: "100%",
                          height: "350px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousServicesSlider;

