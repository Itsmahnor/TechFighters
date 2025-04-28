import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ICONS = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1618); // Adjust breakpoint as needed
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 630,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="w-[100vw] h-[30vh] md:pt-16 bg-gradient-to-r from-[#C19EE0] to-[#DAC3E8] flex justify-center text-black">
      <div className="w-full h-auto flex justify-around flex-wrap gap-10 bg-transparent items-center">
        {/* Slider or Grid */}
        <div className="lg:w-[70vw] w-[90vw]">
          {isSmallScreen ? (
            <CategorySlider settings={settings} />
          ) : (
            <CategoryGrid />
          )}
        </div>
      </div>
    </div>
  );
};

// Slider Component
const CategorySlider = ({ settings }) => (
  <Slider {...settings}>
    <div className="slider-item">
      <img
        src="https://skillseducation.pk/assets/img/brand/brand-2-1.png"
        alt="img1"
        className="slider-image"
      />
    </div>
    <div className="slider-item">
      <img
        src="https://skillseducation.pk/assets/img/brand/brand-2-2.png"
        alt="img2"
        className="slider-image"
      />
    </div>
    <div className="slider-item">
      <img
        src="https://skillseducation.pk/assets/img/brand/brand-2-3.png"
        alt="img3"
        className="slider-image"
      />
    </div>
    <div className="slider-item">
      <img
        src="https://skillseducation.pk/assets/img/brand/brand-2-4.png"
        alt="img4"
        className="slider-image"
      />
    </div>
    <div className="slider-item">
      <img
        src="https://skillseducation.pk/assets/img/brand/brand-2-5.png"
        alt="img5"
        className="slider-image"
      />
    </div>
  </Slider>
);

// Grid Component for larger screens
const CategoryGrid = () => (
  <div className="grid grid-cols-5 gap-0 animate">
    <img src="https://skillseducation.pk/assets/img/brand/brand-2-1.png" alt="img1" />
    <img src="https://skillseducation.pk/assets/img/brand/brand-2-2.png" alt="img2" />
    <img src="https://skillseducation.pk/assets/img/brand/brand-2-3.png" alt="img3" />
    <img src="https://skillseducation.pk/assets/img/brand/brand-2-4.png" alt="img4" />
    <img src="https://skillseducation.pk/assets/img/brand/brand-2-5.png" alt="img5" />
  </div>
);
