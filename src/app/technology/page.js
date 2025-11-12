import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";
import TechnologyMain from "@/components/layout/main/TechnologyMain";
import CallToaction from "@/components/sections/call-to-action/CallToaction";

const About = () => {
  return (
    <PageWrapper headerStyle={2} footerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
        <TechnologyMain />
    </PageWrapper>
  );
};

export default About;
