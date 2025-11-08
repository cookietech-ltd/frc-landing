"use client";
import Image from "next/image";
import logoImage1 from "@/assets/img/logo.png";
import logoImage2 from "@/assets/img/logo-white.png";
import logoImage3 from "@/assets/img/logo-white.png";
import Link from "next/link";
import { useHeaderContex } from "@/providers/HeaderContex";

const Logo = ({ sticky }) => {
  const { headerStyle, headerSize, isNotHeaderTop, navBg, isHeaderSupport } =
    useHeaderContex();

  return (
    <div className={sticky ? "sticky-logo" : "col"}>
      <div
        className={`${
          !isHeaderSupport && (headerStyle === 3 || headerStyle === 5)
            ? ""
            : "site-logo-wrap"
        }`}
      >
        <div className="site-logo">
          <Link href="/">
            <Image
              src={
                navBg === "secondary" && sticky
                  ? logoImage3
                  : headerStyle === 1
                  ? logoImage2
                  : logoImage1
              }
              alt="Logo"
            />
          </Link>
        </div>
        {!isHeaderSupport && (headerStyle === 3 || headerStyle === 5) ? (
          ""
        ) : (
          <div
            className={`get-support clearfix  ${
              headerStyle === 2 ? "get-support-color-white" : ""
            }`}
          >
            <div className="get-support-icon">
              <i className="icon-call"></i>
            </div>
            <div className="get-support-info">
              <h6>Get Support</h6>
              <h4>
                <Link href="tel:+412-5205857">(412)-520-5857</Link>
              </h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
