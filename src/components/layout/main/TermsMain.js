import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import TermsContent from "@/components/sections/legal/TermsContent";

const TermsMain = () => {
  return (
    <main>
      <HeroPrimary title={"Terms of Use"} text="Terms" />
      <TermsContent />
    </main>
  );
};

export default TermsMain;

