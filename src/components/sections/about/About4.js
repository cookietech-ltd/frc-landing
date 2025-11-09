import Image from "next/image";
import serviceImage11 from "@/assets/img/service/frc_service_image.jpg";
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
                  {"//"} Introduction
                </h6>
                <h1 className="section-title">
                  End-to-End Equipment Care for Your Facility<span>.</span>
                </h1>
                <p>
                Fitness Room Concierge provides end-to-end equipment care for gyms and fitness facilities. We simplify every aspect of equipment ownership through proactive maintenance, warranty management, fast repair, and professional installation.
                </p>
              </div>
              <div className="about-us-info-wrap-inner about-us-info-devide">
                <p>
                Our Planned Maintenance program is the foundation of the Concierge experience. Each month our technicians inspect, clean, and calibrate your equipment to keep it in peak condition. Reports and recommendations are uploaded to your dashboard for complete visibility. We handle the warranty process from start to finish, including manufacturer communication, parts orders, and claim tracking. Every step is documented in the platform so you can monitor progress in real time.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;
