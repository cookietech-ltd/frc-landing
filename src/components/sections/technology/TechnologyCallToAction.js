import Link from "next/link";
import bgImage41 from "@/assets/img/bg/19.jpg";

const TechnologyCallToAction = () => {
  return (
    <div className="ltn__slider-area ltn__slider-6">
      <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
        {/* <!-- ltn__slide-item --> */}
        <div
          className="ltn__slide-item-9 section-bg-1 bg-image"
          data-bs-bg={bgImage41.src}
        >
          <div className="ltn__slide-item-inner">
            <div className="slide-item-info bg-overlay-white-90 text-center">
              <div className="slide-item-info-inner  ltn__slide-animation">
                <h3 className="slide-title animated text-uppercase">
                    The First Maintenance as a Service Platform Built for the Fitness Industry
                </h3>
                <div className="btn-wrapper animated">
                  <Link
                    href="/appointment"
                    className="theme-btn-1 btn btn-effect-1 text-uppercase"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCallToAction;
