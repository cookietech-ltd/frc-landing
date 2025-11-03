import allServices from "@/../public/fakedata/services.json";
import serviceImage1 from "@/assets/img/service/1.jpg";
import serviceImage2 from "@/assets/img/service/2.jpg";
import serviceImage3 from "@/assets/img/service/3.jpg";
import serviceImageLarge1 from "@/assets/img/service/19.jpg";
import serviceImageLarge2 from "@/assets/img/service/21.jpg";
import serviceImageLarge3 from "@/assets/img/service/22.jpg";
import serviceImageLarge4 from "@/assets/img/service/23.jpg";
const getAllServices = () => {
  const images = [
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage2,
    serviceImage3,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
  ];
  const imagesLarge = [
    serviceImageLarge2,
    serviceImageLarge1,
    serviceImageLarge3,
    serviceImageLarge4,
    serviceImageLarge1,
    serviceImageLarge2,
    serviceImageLarge3,
    serviceImageLarge4,
    serviceImageLarge1,
    serviceImageLarge2,
    serviceImageLarge3,
    serviceImageLarge4,
    serviceImageLarge1,
    serviceImageLarge2,
    serviceImageLarge3,
    serviceImageLarge4,
    serviceImageLarge1,
    serviceImageLarge2,
    serviceImageLarge3,
    serviceImageLarge4,
    serviceImageLarge1,
    serviceImageLarge2,
    serviceImageLarge3,
    serviceImageLarge4,
    serviceImageLarge1,
    serviceImageLarge2,
    serviceImageLarge3,
    serviceImageLarge4,
    serviceImageLarge1,
    serviceImageLarge2,
    serviceImageLarge3,
    serviceImageLarge4,
    serviceImageLarge1,
  ];
  const altImages = {
    0: "🔧",
    1: "💰",
    2: "🛡️",
    3: "👥",
    4: "⚙️",
    5: "📚",
    6: "🏗️",
    7: "💳",
    8: "📊",
    9: "✅",
    10: "📱",
    11: "⬆️",
    12: "🧼",
    13: "🎯",
    14: "🤝",
    15: "🚨",
    16: "📈",
    17: "🏅",
    18: "🚚",
    19: "🔍",
    20: "🎨",
    21: "📺",
    22: "🌡️",
    23: "🏋️",
    24: "🔬",
    25: "🔐",
    26: "🏆",
    27: "🔧",
    28: "📦",
  };

  const services = [...allServices]?.map((service, idx) => ({
    ...service,

    image: images[idx],
    imgAlt: service.imgAlt || altImages[idx],
    imageLarge: imagesLarge[idx],
  }));
  return services;
};

export default getAllServices;
