// src/Banner.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css'; // Import your CSS file here

const slides = [
  {
    category: 'Self Dependent Bharat',
    title: 'Swachh Bharat',
    description: 'Empowering citizens to take charge of urban cleanliness by reporting and resolving local issues. Through community-driven verification and a reward system, this initiative fosters collaboration and civic responsibility for a cleaner, greener city.',
    image: 'url(../images/banner-item-01.jpg)'
  }  
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out"
  };

  return (
    <div className="main-banner" id="top">
      <div className="container">
        <div {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className={`item item-${index + 1}`} style={{ backgroundImage: slide.image }}>
              <div className='min-container'>
              <div className="header-text">
                <span className="category">{slide.category}</span>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <div className="buttons">
                  <div className="main-button">
                    <a href="#">Learn More</a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;