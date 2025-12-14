import About1 from "@/components/sections/about/About1";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import CounterUp from "@/components/sections/counters/CounterUp";
import About2 from "@/components/sections/about/About2";
import Hero5 from "@/components/sections/hero-banners/Hero5";
import Services3 from "@/components/sections/services/Services3";
import React from "react";
import Features2 from "@/components/sections/features/Features2";
import Portfolio2 from "@/components/sections/portfolio/Portfolio2";
import Video from "@/components/sections/videos/Video";
import HotDeal2 from "@/components/sections/hot-deals/HotDeal2";

const IndexMain = () => {
  return (
    <main>
        <Hero5 />
        <About2 />
        <Features2 />   {/* Core Features Component*/}
        {/*<Features3 />*/}
        <Portfolio2 />
        <Services3 />
        <HotDeal2 />
        <About1 />
        {/* <Video /> */}
        <CounterUp />
        <Blogs2 />
    </main>

  );
};

export default IndexMain;
