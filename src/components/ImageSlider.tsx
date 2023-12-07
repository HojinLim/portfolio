import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="relative mt-8">

        <Slider {...settings} className="mx-auto max-w-4xl p-2 py-6">
          {images.map((image, index) => (
            <div key={index} className="flex items-center justify-center focus:outline-none">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-contain rounded-full my-28" />
            </div>
          ))}
        </Slider>

    </div>
  );
};

export default ImageSlider;
