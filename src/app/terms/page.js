import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import TermsMain from "@/components/layout/main/TermsMain";

export default function Terms() {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <TermsMain />
    </PageWrapper>
  );
}

