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
        breakpoint: 1024, // 화면 폭이 1024px 이하일 때 적용
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // 화면 폭이 768px 이하일 때 적용
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div style={{ padding: '50px' }} key={index}>
          <img style={{ height: '500px', width: '100%', padding: '10px' }} src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
