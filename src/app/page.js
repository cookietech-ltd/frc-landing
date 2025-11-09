import IndexMain from "@/components/layout/main/IndexMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Home() {
  return (
    <PageWrapper    headerStyle={2} footerStyle={2} footerBg={"dark"} >
      <IndexMain />
    </PageWrapper>
  );
}
