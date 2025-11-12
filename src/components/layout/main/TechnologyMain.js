import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import TechnologyPrimary from "@/components/sections/technology/TechnologyPrimary";
import CallToaction from "@/components/sections/call-to-action/CallToaction";
import React from "react";
import TechnologyCallToAction from "@/components/sections/technology/TechnologyCallToAction";
import Features2 from "@/components/sections/features/Features2";

const TechnologyMain = () => {
  return (
    <main>
      <HeroPrimary
        title={"Technology"}
        text="Technology"
        type={2}
      />
      <TechnologyPrimary />
        <TechnologyCallToAction/>
        <br/><br/>
        <Features2 />
    </main>
  );
};

export default TechnologyMain;
