import Image from "next/image";
import bgImage6 from "@/assets/img/bg/6.jpg";
import bgImage11 from "@/assets/img/bg/11.png";
import productImage7 from "@/assets/img/product/7.png";

const HotDeal2 = ({ type }) => {
  return (
    <div
      className={`ltn__call-to-action-area ltn__call-to-action-4 ltn__call-to-action-4-2  ${
        type === 2 ? "section-bg-1 mt-120" : "bg-overlay-black-50 bg-image"
      }  pt-110 pb-120`}
      data-bs-bg={type === 2 ? "" : bgImage6.src}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className={`call-to-action-inner call-to-action-inner-4 ${
                type === 2 ? "" : "text-color-white "
              } text-center`}
            >
              <h1 className="h1">Customers enrolled in a Planned Maintenance program receive full access to the platform.</h1>
              <p>
                  Gyms not enrolled in a PM program can subscribe monthly to manage service activity and <br />{" "} performance insights through the same system.
              </p>
              <div className="btn-wrapper animated">
                <a
                  href="/technology"
                  className="theme-btn-1 btn btn-effect-1 text-uppercase"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeal2;
