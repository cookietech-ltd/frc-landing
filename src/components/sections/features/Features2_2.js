import FeatureCard2 from "@/components/shared/cards/FeatureCard2";
import getAllFeatues from "@/libs/getAllFeatues";
import React from "react";

const Features2_2 = ({ pt }) => {
  const features = getAllFeatues()?.filter(({ id }) => id > 11 && id < 17);

  return (
    <div className={`ltn__feature-area pb-90 ${pt ? pt : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">
                {"//"} features {"//"}
              </h6>
              <h1 className="section-title">
                Core Features<span>.</span>
              </h1>
            </div>
          </div>
        </div>
        
        {/* Added justify-content-center to make it look nice if odd numbers wrap */}
        <div className="row ltn__custom-gutter justify-content-center">
          {features?.map((feature, idx) => (
            <div
              key={idx}
              // col-12:        Full width on Mobile (1 per row)
              // col-md-6:      Half width on Tablets (2 per row)
              // col-lg-5-cols: Custom class for Desktop (5 per row)
              className="col-lg-5-cols col-md-6 col-12" 
            >
              <FeatureCard2 feature={feature} idx={idx} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features2_2;