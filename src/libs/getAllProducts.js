import allProducts from "@/../public/fakedata/products.json";
import comments from "@/../public/fakedata/productComments.json";
import reviews from "@/../public/fakedata/productReviews.json";
import storeImage1 from "@/assets/img/store/1-n.jpg";
import storeImage2 from "@/assets/img/store/2-n.jpg";
import storeImage3 from "@/assets/img/store/3-n.jpg";
import storeImage4 from "@/assets/img/store/4-n.jpg";
import storeImage5 from "@/assets/img/store/5-n.jpg";
const getAllProducts = () => {
  const images = [
    storeImage1.src,
    storeImage2.src,
    storeImage3.src,
    storeImage4.src,
    storeImage5.src,
    storeImage1.src,
    storeImage2.src,
    storeImage3.src,
    storeImage4.src,
    storeImage5.src,
    storeImage1.src,
    storeImage2.src,
    storeImage3.src,
    storeImage4.src,
    storeImage5.src,
    storeImage1.src,
    storeImage2.src,
    storeImage3.src,
    storeImage4.src,
    storeImage5.src,
    storeImage1.src,
    storeImage2.src,
    storeImage3.src,
    storeImage4.src,
    storeImage5.src,
    storeImage1.src,
    storeImage2.src,
    storeImage3.src,
    storeImage4.src,
    storeImage5.src,
    storeImage1.src,
    storeImage2.src,
    storeImage3.src,
    storeImage4.src,
    storeImage5.src,
    storeImage1.src,
    storeImage2.src,
    storeImage3.src,
    storeImage4.src,
    storeImage5.src,
    storeImage1.src,
    storeImage2.src,
    storeImage3.src,
    storeImage4.src,
    storeImage5.src,
    storeImage1.src,
    storeImage2.src,
    storeImage3.src,
    storeImage4.src,
    storeImage5.src,
    storeImage1.src,
    storeImage2.src,
    storeImage3.src,
    storeImage4.src,
    storeImage5.src,
    storeImage1.src,
  ];

  const products = [...allProducts]?.map((product, idx) => ({
    ...product,

    image: images[idx],
    comments: comments?.filter(({ productId }) => productId === product?.id),
    reviews: reviews?.filter(({ productId }) => productId === product?.id),
  }));

  return products;
};

export default getAllProducts;
