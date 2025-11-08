import Image from "next/image";
import effectImage1 from "@/assets/img/effect/frc1.jpg";
import effectImage2 from "@/assets/img/effect/frc2.jpg";
import effectImage3 from "@/assets/img/effect/frc3.jpg";
import effectImage4 from "@/assets/img/effect/frc4.jpg";
import effectImage5 from "@/assets/img/effect/frc5.jpg";
import effectImage6 from "@/assets/img/effect/frc6.jpg";
import iconImage7 from "@/assets/img/icons/7.png";
import Link from "next/link";

const About2 = () => {
  return (
    <div className="ltn__about-us-area pt-80 pb-85">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <ul
                className="ltn__parallax-effect-wrap ltn__parallax-effect-active"
                data-friction-x="0.1"
                data-friction-y="0.1"
                data-scalar-x="15"
                data-scalar-y="25"
              >
                <li className="layer" data-depth="0.00"></li>
                <li className="layer" data-depth="0.10">
                  <div className="ltn__effect-img ltn__effect-img-top-left">
                    <Image src={effectImage1} alt="#" placeholder="blur" />
                  </div>
                </li>
                <li className="layer" data-depth="0.30">
                  <div
                    className="ltn__effect-img ltn__effect-img-top-right"
                    placeholder="blur"
                  >
                    <Image src={effectImage2} alt="#" />
                  </div>
                </li>
                <li className="layer" data-depth="0.50">
                  <div
                    className="ltn__effect-img ltn__effect-img-center-left"
                    placeholder="blur"
                  >
                    <Image src={effectImage3} alt="#" />
                  </div>
                </li>
                <li className="layer" data-depth="0.20">
                  <div
                    className="ltn__effect-img ltn__effect-img-center-right"
                    placeholder="blur"
                  >
                    <Image src={effectImage4} alt="#" />
                  </div>
                </li>
                <li className="layer" data-depth="0.20">
                  <div
                    className="ltn__effect-img ltn__effect-img-bottom-left"
                    placeholder="blur"
                  >
                    <Image src={effectImage5} alt="#" />
                  </div>
                </li>
                <li className="layer" data-depth="0.20">
                  <div
                    className="ltn__effect-img ltn__effect-img-bottom-right"
                    placeholder="blur"
                  >
                    <Image src={effectImage6} alt="#" />
                  </div>
                </li>
                <li className="layer" data-depth="0.50">
                  <div className="wave ltn__animation-wave-5s ltn__effect-img-top-center ">
                    <div className="about-us-img-info">
                      <div className="about-us-img-info-inner">
                        <h1>
                          <span className="counter">10</span>
                          <span>+</span>
                        </h1>
                        <h6>
                          <span>Years</span> Of Experience
                        </h6>
                        <span className="dots-bottom"></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  {"//"} About Us
                </h6>
                <h1 className="section-title">
                Experienced Fitness Equipment Installers ​
                <span>.</span>
                </h1>
                <p>
                  Customer satisfaction is our main objective. We are located in Pittsburgh, PA and service anywhere needed.
                </p>
              </div>

              <p>
              Our staff is committed to helping you with all your fitness equipment moving, installation and servicing needs. We hire and train our team members diligently with the know-how and expertise needed to ensure your needs are met. Our trained and qualified installers are excited to work with you to get you on your way to enjoying your equipment!{" "}
              </p>
              <hr />
              <div className="about-call-us">
                <div className="call-us-icon">
                  <Image src={iconImage7} alt="Icon Image" placeholder="blur" />
                </div>
                <div className="call-us-info">
                  <p>
                    Call us 24/7. We can answer for{" "}
                    <Link
                      href="/contact"
                      className="ltn__secondary-color text-decoration"
                    >
                      <strong>all your questions</strong>
                    </Link>
                    .
                  </p>
                  <h2>
                    <Link href="tel:+14125205857">(412)-520-5857</Link>{" "}
                    <small> or </small>{" "}
                    <Link href="mailto:info@myfitnessroomconcierge.com">olivia.meaden@myfitnessroomconcierge.com</Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
