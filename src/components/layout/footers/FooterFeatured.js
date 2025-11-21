import Image from "next/image";
import contactImage7 from "@/assets/img/icons/7.png";
import contactImage8 from "@/assets/img/icons/8.png";
import contactImage9 from "@/assets/img/icons/9.png";
import Link from "next/link";

const FooterFeatured = () => {
  const contact = [
    {
      title: "Make A Call",
      subTitle: "(412)-520-5857",
      img: contactImage7,
      path: "tel:+4125205857",
    },
    {
      title: "Support Mail",
      subTitle: "info@myfitnessroom..",
      img: contactImage8,
      path: "mailto:info@myfitnessroomconcierge.com",
    },
    {
      title: "Office Address",
      subTitle: "105 international drive Oakdale PA 15071",
      img: contactImage9,
      path: "/locations",
    },
  ];
  return (
    <div className="contact-feature-area before-bg-bottom mb--30">
      <div className="container">
        <div className="row justify-content-center align-items-strech">
          {contact.map(({ title, subTitle, img, path }, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 col-12 d-flex">
              <div className="ltn__contact-feature-item text-center d-flex flex-row justify-content-center flex-grow-1">
                <div className="ltn__contact-feature-icon "> {/*mb-3*/}
                  <Image src={img} alt="Icon Image" width={200} height={200} />
                </div>
                <div className="ltn__contact-feature-info">
                   <Link href={path}>
                    <span className="h6">{subTitle}</span>
                     <br />
                     <span className="h2">{title}</span>
                  </Link>
                </div>
                {/* <div className="ltn__contact-feature-info">
                  <Link href={path} className="ltn__contact-feature-link">
                    <div className="h6">{subTitle}</div>
                    <div className="h2">{title}</div>
                  </Link>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterFeatured;