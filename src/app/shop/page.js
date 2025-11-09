import ShopMain from "@/components/layout/main/ShopMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React, { Suspense } from "react";

const Shop = () => {
  return (
      <PageWrapper
          headerStyle={2}
          footerStyle={2}
          footerBg={"dark"}
      >
          <ShopMain isSidebar={false} title={"Every piece is inspected, serviced, and tested by our professional technicians to meet the same standards we maintain in active client facilities."} isCar={true} />
      </PageWrapper>
  );
};

export default Shop;
