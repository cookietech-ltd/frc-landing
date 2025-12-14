import allProducts from "@/../public/fakedata/products.json";
import comments from "@/../public/fakedata/productComments.json";
import reviews from "@/../public/fakedata/productReviews.json";
import store11 from "@/assets/img/store/store11.jpg";
import store12 from "@/assets/img/store/store12.jpg";
import store13 from "@/assets/img/store/store13.jpg";
import store14 from "@/assets/img/store/store14.jpg";
import store15 from "@/assets/img/store/store15.jpg";
import store16 from "@/assets/img/store/store16.jpg";
import store17 from "@/assets/img/store/store17.jpg";
import store21 from "@/assets/img/store/store21.jpg";
import store22 from "@/assets/img/store/store22.jpg";
import store23 from "@/assets/img/store/store23.jpg";
import store24 from "@/assets/img/store/store24.jpg";
import store25 from "@/assets/img/store/store25.jpg";
import store31 from "@/assets/img/store/store31.jpg";
import store32 from "@/assets/img/store/store32.jpg";
import store33 from "@/assets/img/store/store33.jpg";
import store34 from "@/assets/img/store/store34.jpg";
import store35 from "@/assets/img/store/store35.jpg";
import store36 from "@/assets/img/store/store36.jpg";
import store37 from "@/assets/img/store/store37.jpg";
import store41 from "@/assets/img/store/store41.jpg";
import store42 from "@/assets/img/store/store42.jpeg";
import store43 from "@/assets/img/store/store43.jpeg";
import store44 from "@/assets/img/store/store44.jpeg";
import store45 from "@/assets/img/store/store45.jpeg";
import store46 from "@/assets/img/store/store46.jpeg";
import store47 from "@/assets/img/store/store47.jpeg";
import store51 from "@/assets/img/store/store51.jpg";
import store52 from "@/assets/img/store/store52.jpg";
import store53 from "@/assets/img/store/store53.jpg";
import store54 from "@/assets/img/store/store54.jpg";
import store55 from "@/assets/img/store/store55.jpg";
import store56 from "@/assets/img/store/store56.jpg";
import store57 from "@/assets/img/store/store57.jpg";
import store58 from "@/assets/img/store/store58.jpg";
import store59 from "@/assets/img/store/store59.jpg";
import store61 from "@/assets/img/store/store61.jpg";
import store62 from "@/assets/img/store/store62.jpg";
import store63 from "@/assets/img/store/store63.jpg";
import store64 from "@/assets/img/store/store64.jpg";
import store65 from "@/assets/img/store/store65.jpg";
import store66 from "@/assets/img/store/store66.jpg";
import store67 from "@/assets/img/store/store67.jpg";
import store68 from "@/assets/img/store/store68.jpg";
import store71 from "@/assets/img/store/store71.jpg";
import store72 from "@/assets/img/store/store72.jpg";
import store73 from "@/assets/img/store/store73.jpg";
import store74 from "@/assets/img/store/store74.jpg";
import store75 from "@/assets/img/store/store75.jpg";
import store76 from "@/assets/img/store/store76.jpg";
import store77 from "@/assets/img/store/store77.jpg";
import store81 from "@/assets/img/store/store81.jpg";
import store82 from "@/assets/img/store/store82.jpg";
import store83 from "@/assets/img/store/store83.jpg";
import store84 from "@/assets/img/store/store84.jpg";
import store85 from "@/assets/img/store/store85.jpg";
import store86 from "@/assets/img/store/store86.jpg";
import store87 from "@/assets/img/store/store87.jpg";
import store91 from "@/assets/img/store/store91.jpg";
import store92 from "@/assets/img/store/store92.jpg";
import store93 from "@/assets/img/store/store93.jpg";
import store94 from "@/assets/img/store/store94.jpg";
import store95 from "@/assets/img/store/store95.jpg";
import store96 from "@/assets/img/store/store96.jpg";
import store97 from "@/assets/img/store/store97.jpg";
import store101 from "@/assets/img/store/store101.jpeg";
import store102 from "@/assets/img/store/store102.jpeg";
import store103 from "@/assets/img/store/store103.jpeg";
import store111 from "@/assets/img/store/store111.jpeg";
import store112 from "@/assets/img/store/store112.jpeg";
import store113 from "@/assets/img/store/store113.jpeg";
import store121 from "@/assets/img/store/store121.jpeg";
import store122 from "@/assets/img/store/store122.jpeg";
import store123 from "@/assets/img/store/store123.jpeg";
import store124 from "@/assets/img/store/store124.jpeg";
import store131 from "@/assets/img/store/store131.jpeg";
import store132 from "@/assets/img/store/store132.jpeg";
import store133 from "@/assets/img/store/store133.jpeg";
import store134 from "@/assets/img/store/store134.jpeg";
import store135 from "@/assets/img/store/store135.jpeg";
import store136 from "@/assets/img/store/store136.jpeg";
const getAllProducts = () => {
  const availableImages = [
    [store11.src, store12.src, store13.src, store14.src, store15.src, store16.src, store17.src],
    [store21.src, store22.src, store23.src, store24.src, store25.src],
    [store31.src, store32.src, store33.src, store34.src, store35.src, store36.src, store37.src],
    [store41.src, store42.src, store43.src, store44.src, store45.src, store46.src, store47.src],
    [store51.src, store52.src, store53.src, store54.src, store55.src, store56.src, store57.src, store58.src, store59.src],
    [store61.src, store62.src, store63.src, store64.src, store65.src, store66.src, store67.src, store68.src],
    [store71.src, store72.src, store73.src, store74.src, store75.src, store76.src, store77.src],
    [store81.src, store82.src, store83.src, store84.src, store85.src, store86.src, store87.src],
    [store91.src, store92.src, store93.src, store94.src, store95.src, store96.src, store97.src],
    // [store101.src, store102.src, store103.src],
    [store111.src, store112.src, store113.src],
    // [store121.src, store122.src, store123.src, store124.src],
    // [store131.src, store132.src, store133.src, store134.src, store135.src, store136.src],
  ];

  const products = [...allProducts]?.map((product, idx) => {
    const productImages = availableImages[idx % availableImages.length];
    const thumbnail = productImages[0];

    return {
      ...product,
      image: thumbnail,
      thumbnail: thumbnail,
      images: productImages,
      comments: comments?.filter(({ productId }) => productId === product?.id),
      reviews: reviews?.filter(({ productId }) => productId === product?.id),
    };
  });

  return products;
};

export default getAllProducts;
