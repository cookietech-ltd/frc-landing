import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import PrivacyMain from "@/components/layout/main/PrivacyMain";

export default function Privacy() {
  return (
    <PageWrapper headerStyle={2} footerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <PrivacyMain />
    </PageWrapper>
  );
}

