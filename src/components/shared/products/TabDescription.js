import React from "react";

const TabDescription = ({ desc , title}) => {
  return (
    <div className="ltn__shop-details-tab-content-inner">
      <h4 className="title-2">{title}</h4>
      <p>
          {desc}
      </p>
        <p>
            <strong>Contact Information:</strong><br />
            Phone (Call ONLY): (412) 520-5857<br />
            Email: dravaknabe@myfitnessroomconcierge.com
        </p>
    </div>
  );
};

export default TabDescription;
