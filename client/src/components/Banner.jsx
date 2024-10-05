
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css'; // Import your CSS file here

const slides = [
  {
    category: 'Our Alumni',
    title: 'Have your Mentor!',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, nesciunt. Ea laboriosam dolorum enim nesciunt? Esse, veritatis ipsa. Aspernatur iure, impedit animi eveniet suscipit voluptates magni aut quos autem cum.',
    image: 'url(../images/banner-item-01.jpg)'
  },
  {
    category: 'Best Result',
    title: 'Get the best result out of your effort',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dignissimos ipsam deserunt inventore vel omnis eum praesentium maxime aperiam provident recusandae eveniet obcaecati aliquid rerum atque vero accusantium? Atque, nesciunt!',
    image: 'url(../images/banner-item-02.jpg)'
  },
  {
    category: 'Mentor Learning',
    title: 'Mentor Learning helps you save the time',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporious incididunt ut labore et dolore magna aliqua suspendisse.',
    image: 'url(../images/banner-item-03.jpg)'
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
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className={`item item-${index + 1}`} style={{ backgroundImage: slide.image }}>
              <div className="header-text">
                <span className="category">{slide.category}</span>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <div className="buttons">
                  <div className="main-button">
                    <a href="#">Learn More</a>
                  </div>
                  <div className="icon-button">
                    <a href="#"><i className="fa fa-play"></i> What's Mentor?</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;