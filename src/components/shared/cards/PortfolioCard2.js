import Image from "next/image";
import Link from "next/link";
import React from "react";

const PortfolioCard2 = ({ portfolioSingle }) => {
  const { id, title, img, dep } = portfolioSingle;
  return (
    <div className="ltn__img-slide-item-4">
      <Link href={img.src} data-rel="lightcase:myCollection">
        <Image src={img} alt="Image" />
      </Link>
    </div>
  );
};

export default PortfolioCard2;
