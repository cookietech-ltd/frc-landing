import Image from "next/image";
import serviceImage11 from "@/assets/img/service/fitness-equipment-repair_orig.jpg";
import Link from "next/link";

const About4 = () => {
  return (
    <div className="ltn__about-us-area pb-115">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 align-self-center">
            <div className="about-us-img-wrap ltn__img-shape-left  about-img-left">
              <Image src={serviceImage11} alt="Image" />
            </div>
          </div>
          <div className="col-lg-7 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  {"//"} RELIABLE SERVICES
                </h6>
                <h1 className="section-title">
                  We are Qualified & Professional<span>.</span>
                </h1>
                <p>
                Fitness Equipment Installation, Movement, Delivery and Service
                </p>
              </div>
              <div className="about-us-info-wrap-inner about-us-info-devide">
                <p>
                We understand the hassle of doing the job on your own and the risks involved in moving expensive fitness equipment. Let our highly skilled fitness equipment technicians do the job for you! 
​Our highly trained professional installers can do any installation, move or deliver. No job too big or too small!

We are now offering servicing calls for your commercial and home fitness equipment! Cleaning, preventative maintenance, repairs or replacements. 
                </p>
                <div className="list-item-with-icon">
                  <ul>
                    <li>
                      <Link href="/contact">24/7 Online Support</Link>
                    </li>
                    <li>
                      <Link href="/team">Expert Team</Link>
                    </li>
                    <li>
                      <Link href="/services/1">Pure Equipment</Link>
                    </li>
                    <li>
                      <Link href="/shop">Unlimited Product</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;
