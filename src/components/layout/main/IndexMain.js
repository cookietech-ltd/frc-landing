import About1 from "@/components/sections/about/About1";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Brands from "@/components/sections/brands/Brands";
import CallToaction from "@/components/sections/call-to-action/CallToaction";
import CounterUp from "@/components/sections/counters/CounterUp";
import Features from "@/components/sections/features/Features";
import Hero1 from "@/components/sections/hero-banners/Hero1";
import Portfolio1 from "@/components/sections/portfolio/Portfolio1";
import About2 from "@/components/sections/about/About2";
import ServicesSlider from "@/components/sections/services/ServicesSlider";
import Team1 from "@/components/sections/team/Team1";
import Testimonials1 from "@/components/sections/testimonils/Testimonials1";
import Testimonials2 from "@/components/sections/testimonils/Testimonials2";

const IndexMain = () => {
  return (
    <main>
      <Hero1 />
      <Features />
      <About1 />
      <About2 />
      <ServicesSlider isPrimary={true} />
      <CallToaction />
      <Testimonials2 type={8} />
    </main>

  );
};

export default IndexMain;
