import Link from "next/link";
import React from "react";

const About1 = () => {
  return (
    <div className="ltn__about-us-area pt-115 pb-95">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-5 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  {"// About Us"}
                </h6>
                <h1 className="section-title">
                  Customer Satisfaction Is Our Main Objective<span>.</span>
                </h1>
                <p>
                  Veteran-owned and operated with over 15 years of industry experience, delivering professional fitness equipment services across Pittsburgh and beyond.
                </p>
              </div>
              <div className="about-us-info-wrap-inner about-us-info-devide">
                <p>
                  At Fitness Room Concierge, we safely deliver, install, and service your fitness equipment with a commitment to excellence. Our trained, qualified staff are industry-certified, insured, and bonded professionals who understand the importance of strategic equipment placement to ensure maximum capability and safety. As a family-owned business with veteran leadership, we bring military discipline and dedication to every project, protecting your facility while optimizing your fitness space.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
              <div className="list-item-with-icon">
                <ul>
                  <li>
                    <Link href="/contact">Industry Expert Consultation</Link>
                  </li>
                  <li>
                    <Link href="/team">Certified & Insured Professionals</Link>
                  </li>
                  <li>
                    <Link href="/services">All Major Equipment Brands</Link>
                  </li>
                  <li>
                    <Link href="/services">Installation & Maintenance</Link>
                  </li>
                  <li>
                    <Link href="/about">Veteran-Owned & Family Operated</Link>
                  </li>
                  <li>
                    <Link href="/contact">15+ Years Experience</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
