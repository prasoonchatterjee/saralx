import React, { useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import one from './images/1.jpg';
import two from './images/2.jpg';
import three from './images/3.jpg';
import four from './images/4.jpg';
import five from './images/5.jpg';

const slides = [
  { src: one, label: 'horse ride with bright lights' },
  { src: two, label: 'horse ride and eiffel tower' },
  { src: three, label: 'light effects on hanging ride' },
  { src: four, label: 'hanging from a tree ride' },
  { src: five, label: 'roller coaster ride' },
];

function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isRotating, setIsRotating] = React.useState(false);

  const slideRefs = React.useRef([]);
  const sliderRef = React.useRef(null);

  const togglePlay = () => {
    sliderRef.current?.slickPlay();
    setIsRotating(true);
  };
  const togglePause = () => {
    sliderRef.current?.slickPause();
    setIsRotating(false);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    beforeChange: (curr, next) => {
      setCurrentSlide(next);
    },
  };

  useEffect(() => {
    setTimeout(() => {
      slideRefs.current[currentSlide]?.focus();
    }, 1200);
  }, [currentSlide]);

  return (
    <div
      className='slider-container'
      role='region'
      aria-label='Featured rides of Theme Park'
      aria-roledescription='carousel'
      onKeyDown={togglePause}
    >
      <div style={{ width: '90vw', height: '90vh' }}>
        {isRotating ? (
          <button
            type='button'
            onClick={togglePause}
            aria-label='stop automatic slide show'
          >
            Stop Automatic Slide Show
          </button>
        ) : (
          <button
            type='button'
            onClick={togglePlay}
            aria-label='start automatic slide show'
          >
            Start Automatic Slide Show
          </button>
        )}
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              role='group'
              aria-roledescription='slide'
              aria-label={`Slide ${index + 1} of ${slides.length}: ${
                slide.label
              }`}
              aria-hidden={index !== currentSlide}
              tabIndex={index === currentSlide ? 1 : -1}
              aria-live={index === currentSlide ? 'polite' : 'off'}
              ref={(el) => (slideRefs.current[index] = el)}
            >
              <img
                src={slide.src}
                style={{ maxWidth: '800px', maxHeight: '800px' }}
                alt={slide.label}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;
