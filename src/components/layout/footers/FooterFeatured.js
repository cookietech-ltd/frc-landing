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
      subTitle: "721 Aunt Clara Rd, Burgettstown Pa 15021",
      img: contactImage9,
      path: "/locations",
    },
  ];
  return (
    <div className="contact-feature-area before-bg-bottom mb--30">
      <div className="container">
        <div className="row justify-content-center">
          {contact?.map(({ title, subTitle, img, path }, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 col-12">
              <div className="ltn__contact-feature-item">
                <div className="ltn__contact-feature-icon">
                  <Image src={img} alt="Icon Image" />
                </div>
                <div className="ltn__contact-feature-info">
                  <Link href={path}>
                    <span className="h6">{subTitle}</span>
                    <br />
                    <span className="h2">{title}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterFeatured;
