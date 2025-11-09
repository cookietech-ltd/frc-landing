import sliderImage41 from "@/assets/img/slider/41.jpg";
import Link from "next/link";
import Image from "next/image";
import sliderImage41_1 from "@/assets/img/slider/41-1.png";

const Hero5 = () => {
  return (
    <div className="ltn__slider-area ltn__slider-4 position-relative fix">
      <div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
        {/* <!-- HTML5 VIDEO --> */}
        <video autoPlay muted loop id="myVideo" width={"1000"} height={"1000"}>
          <source src="media/frc.mp4" type="video/mp4" />
        </video>

        {/* <!-- ltn__slide-item --> */}
          {/* <!-- ltn__slide-item  --> */}
          <div
              className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3 ltn__slide-item-5 text-color-white bg-image bg-overlay-theme-black-80"
              data-bs-bg={sliderImage41.src}
          >
              <div className="ltn__slide-item-inner">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12 align-self-center">
                              <div className="slide-item-info">
                                  <div className="slide-item-info-inner ltn__slide-animation">
                                      <div className="slide-item-info">
                                          <div className="slide-item-info-inner ltn__slide-animation">
                                              <h6 className="slide-sub-title ltn__secondary-color animated">
                                                  {"//"} The First Maintenance as a Service Platform Built for the Fitness Industry
                                              </h6>
                                              <h1 className="slide-title animated ">
                                                  Your Fitness <br /> Room Concierge
                                              </h1>
                                              <div className="slide-brief animated">
                                                  <p>
                                                      We combine professional technicians, planned maintenance programs, and smart technology to keep your equipment performing at its best and your members happy.
                                                  </p>
                                              </div>
                                              <div className="btn-wrapper animated">
                                                  <Link
                                                      href="/services"
                                                      className="theme-btn-1 btn btn-effect-1"
                                                  >
                                                      Request a Quote
                                                  </Link>{" "}
                                                  <Link
                                                      href="/about"
                                                      className="btn btn-transparent btn-effect-2 white-color"
                                                  >
                                                      Learn About Our Platform
                                                  </Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="slide-item-img">
                                  <Image src={sliderImage41_1} alt="#" />
                                  <span className="call-to-circle-1"></span>
                                  {/* <!--  --> */}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Hero5;
