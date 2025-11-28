import Link from "next/link";
import React from "react";

const FeatureCard2 = ({ feature, idx }) => {
  const { title, desc, img, path } = feature;
  return (
    <div
      className={`ltn__feature-item ltn__feature-item-6 ${
        idx === 1 ? "active" : ""
      }`}
      style={{
        display: "flex",
        flexDirection: "column",
        // height: "100%",
      }}
    >
      <div style={{ flex: 1 }}>
        <div className="ltn__feature-icon">
          <span>{img}</span>
        </div>
        <div className="ltn__feature-info" style={{ display: "flex", flexDirection: "column" }}>
          <h3 style={{ marginBottom: "16px" }}>
            <Link href={path}>{title}</Link>
          </h3>
          <p style={{ flexGrow: 1 }}>{desc}</p>
        </div>
      </div>
      <Link
        className="ltn__service-btn"
        href={path}
        style={{ fontWeight: "600", marginTop: "auto" }}
      >
        Read More
      </Link>
    </div>
  );
};

export default FeatureCard2;
