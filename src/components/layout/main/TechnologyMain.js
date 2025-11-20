import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import TechnologyPrimary from "@/components/sections/technology/TechnologyPrimary";
import CallToaction from "@/components/sections/call-to-action/CallToaction";
import React from "react";
import TechnologyCallToAction from "@/components/sections/technology/TechnologyCallToAction";
import Features2_2 from "@/components/sections/features/Features2_2";
import TechnologySecondary from "@/components/sections/technology/TechnologySecondary";

const TechnologyMain = () => {
  return (
    <main>
      <HeroPrimary
        title={"Technology"}
        text="Technology"
        type={2}
      />
      <TechnologyCallToAction/> {/*Maintenance Service Banner*/}
      <br/><br/>
      <TechnologyPrimary />
      <Features2_2 />
      <TechnologySecondary/>
    </main>
  );
};

export default TechnologyMain;
