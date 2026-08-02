import React from "react";
import Multislide from "./multislide";
// Assurez-vous que le chemin est correct

const MyComponent: React.FC = () => {
  const topSliderImages = [
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345371/549619406_789954203418808_8478088820107281472_n_czshjs.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345370/Gemini_Generated_Image_xutu99xutu99xutu_ruojip.png",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345370/Gemini_Generated_Image_xutu99xutu99xutu_ruojip.png",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345370/550258272_788393083574920_1122837517657837576_n_sa7qlz.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345308/WhatsApp_Image_2025-09-23_at_16.18.56_h2ns4o.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345315/WhatsApp_Image_2025-09-23_at_16.18.54_qh9lld.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345317/WhatsApp_Image_2025-09-23_at_16.18.55_aqn0yt.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345310/WhatsApp_Image_2025-09-24_at_17.59.41_qhyznw.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345306/WhatsApp_Image_2025-09-24_at_17.59.40_jwwi3k.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345306/WhatsApp_Image_2025-09-24_at_17.59.43_tkat91.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345306/WhatsApp_Image_2025-09-27_at_14.02.09_ru0rtk.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345365/550265587_788108650270030_4937257173747827666_n_g1tjhw.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345363/Gemini_Generated_Image_11f7dw11f7dw11f7_ilxk08.png",
  ];

  const bottomSliderImages = [
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345371/549619406_789954203418808_8478088820107281472_n_czshjs.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345370/Gemini_Generated_Image_xutu99xutu99xutu_ruojip.png",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345370/Gemini_Generated_Image_xutu99xutu99xutu_ruojip.png",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345370/550258272_788393083574920_1122837517657837576_n_sa7qlz.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345308/WhatsApp_Image_2025-09-23_at_16.18.56_h2ns4o.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345315/WhatsApp_Image_2025-09-23_at_16.18.54_qh9lld.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345317/WhatsApp_Image_2025-09-23_at_16.18.55_aqn0yt.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345310/WhatsApp_Image_2025-09-24_at_17.59.41_qhyznw.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345306/WhatsApp_Image_2025-09-24_at_17.59.40_jwwi3k.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345306/WhatsApp_Image_2025-09-24_at_17.59.43_tkat91.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345306/WhatsApp_Image_2025-09-27_at_14.02.09_ru0rtk.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345365/550265587_788108650270030_4937257173747827666_n_g1tjhw.jpg",
    "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345363/Gemini_Generated_Image_11f7dw11f7dw11f7_ilxk08.png",
  ];

  return (
    <Multislide
      topSliderImages={topSliderImages}
      bottomSliderImages={bottomSliderImages}
    />
  );
};

export default MyComponent;
