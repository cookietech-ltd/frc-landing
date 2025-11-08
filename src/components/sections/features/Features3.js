import Image from "next/image";
import Link from "next/link";
import otherImage1 from "@/assets/img/others/other1.jpg";
import otherImage2 from "@/assets/img/others/other2.jpg";

const Features3 = () => {
  return (
    <div className="ltn__why-choose-us-area section-bg-1 pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="why-choose-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  {"//"} Why Choose Us
                </h6>
                <h1 className="section-title">
                  Veteran Owned and Operated<span>.</span>
                </h1>
                <p>
                  Customer satisfaction is our main objective. We strategically place equipment to maximize space and capability.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="why-choose-us-feature-item">
                    <div className="why-choose-us-feature-icon">
                      <i className="icon-hand"></i>
                    </div>
                    <div className="why-choose-us-feature-brief">
                      <h3>
                        <Link href="/services">Expert Installation Team</Link>
                      </h3>
                      <p>
                        Our team of experts will take the time to safely deliver, install and service your equipment to exceed your standards and ensure maximum capability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="why-choose-us-feature-item">
                    <div className="why-choose-us-feature-icon">
                      <i className="icon-maintenance"></i>
                    </div>
                    <div className="why-choose-us-feature-brief">
                      <h3>
                        <Link href="/services">Equipment Maintenance</Link>
                      </h3>
                      <p>
                        We will ensure your equipment works at its maximum ability to ensure customer satisfaction. Our trained installers are certified in the industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose-us-img-wrap">
              <div className="why-choose-us-img-1 text-start">
                <Image src={otherImage1} alt="Image" placeholder="blur" />
              </div>
              <div className="why-choose-us-img-2 text-end">
                <Image src={otherImage2} alt="Image" placeholder="blur" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features3;
