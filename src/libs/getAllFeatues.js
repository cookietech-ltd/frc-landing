import productImage1 from "@/assets/img/product/20.png";

const getAllFeatues = () => {
  const features = [
    {
      id: 1,
      title: "Professional Installation",
      img: <i className="icon-mechanic"></i>,
      path: "/services",
      desc: "Expert delivery and installation of all types of fitness equipment with trained, certified professionals who ensure safe setup and optimal placement.",
      bg: "dark",
      bgImg: null,
    },
    {
      id: 2,
      title: "Equipment Maintenance",
      img: <i className="icon-cog"></i>,
      path: "/team",
      desc: "Comprehensive maintenance and servicing to keep your fitness equipment running at maximum capability with regular inspections and repairs.",
      bg: "secondary",
      bgImg: productImage1,
    },
    {
      id: 3,
      title: "Equipment Moving",
      img: <i className="icon-hand"></i>,
      path: "/services/1",
      desc: "Safe and efficient relocation of fitness equipment with professional handling to protect your investment and facility during the move.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 4,
      title: "All Equipment Brands",
      img: <i className="icon-shopping-bags"></i>,
      path: "/services",
      desc: "Experienced with all major fitness equipment brands and models, from treadmills and ellipticals to strength training and specialty equipment.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 5,
      title: "Certified Professionals",
      img: <i className="icon-award"></i>,
      path: "/team",
      desc: "Industry-certified, insured, and bonded staff with 15+ years of experience. Veteran-owned and operated with commitment to excellence.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 6,
      title: "Professional Cleaning",
      img: <i className="icon-soap"></i>,
      path: "/services",
      desc: "Deep cleaning and sanitization services for your fitness equipment to maintain hygiene standards and extend equipment lifespan.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 7,
      title: "Space Planning",
      img: <i className="icon-placeholder"></i>,
      path: "/appointment",
      desc: "Strategic equipment placement and space optimization consulting to maximize your fitness facility layout and workflow efficiency.",
      bg: "white",
      bgImg: null,
    },
  ];

  return features;
};

export default getAllFeatues;
