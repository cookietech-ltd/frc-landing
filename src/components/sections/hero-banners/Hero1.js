import Image from "next/image";
import Link from "next/link";
import sliderHero1 from "@/assets/img/slider/banner-file-1.png";
import sliderHero2 from "@/assets/img/slider/hero2.jpg";

const Hero1 = () => {
  return (
    <div className="ltn__slider-area ltn__slider-3  section-bg-1">
      <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
        {/* <!-- ltn__slide-item --> */}
        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
          <div className="ltn__slide-item-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <h1 className="slide-title animated ">
                        Fitness Room Concierge
                      </h1>
                      <div className="slide-brief animated">
                        <p>
                        Our staff is committed to helping you with all your fitness equipment moving, installation and servicing needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="slide-item-img">
                    <Image priority={false} src={sliderHero1} alt="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ltn__slide-item --> */}
        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
          <div className="ltn__slide-item-inner  text-right text-end">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <h6 className="slide-sub-title ltn__secondary-color animated">
                        {"// VETERAN-OWNED | 15+ YEARS EXPERIENCE"}
                      </h6>
                      <h1 className="slide-title animated ">
                        Professional <br />Fitness <br /> Equipment Installation
                      </h1>
                      <div className="slide-brief animated">
                        <p>
                          Experienced, certified installers providing delivery, installation,
                          maintenance, and servicing for all your fitness equipment needs.
                          Customer satisfaction is our main objective.
                        </p>
                      </div>
                      <div className="btn-wrapper animated">
                        <Link
                          href="/services"
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          OUR SERVICES
                        </Link>
                        <Link
                          href="/about"
                          className="btn btn-transparent btn-effect-3"
                        >
                          LEARN MORE
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="slide-item-img slide-img-left">
                    <Image priority={false} src={sliderHero2} alt="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--  --> */}
      </div>
    </div>
  );
};

export default Hero1;
