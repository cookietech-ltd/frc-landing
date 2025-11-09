import ProductDetailsMain from "@/components/layout/main/ProductDetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getAllProducts from "@/libs/getAllProducts";
import { notFound } from "next/navigation";
import React from "react";

const products = getAllProducts();
const ProductDetails = ({ params }) => {
  const { id } = params;
  const isExistProducts = products?.find(({ id: id1 }) => id1 === parseInt(id));
  if (!isExistProducts) {
    notFound();
  }
  return (
      <PageWrapper
          headerStyle={2}
          footerStyle={2}
          footerBg={"dark"}
          isNotHeaderTop={true}
      >
          <ProductDetailsMain isNotSidebar={true} type={3} isCar={true} />
      </PageWrapper>
  );
};
export async function generateStaticParams() {
  return products?.map(({ id }) => ({ id: id.toString() }));
}

export default ProductDetails;
