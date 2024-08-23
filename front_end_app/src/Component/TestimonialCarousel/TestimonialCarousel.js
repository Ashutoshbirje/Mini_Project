import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import './TestimonialCarousel.css'

const testimonials = [
  { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu.", name: "X Y Z", role: "PATIENT" },
  { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu.", name: "X Y Z", role: "PATIENT" },
  { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu.", name: "X Y Z", role: "PATIENT" },
];
 
const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className='section'>
    <div className="testimonial-carousel">
      <div className="carousel-content">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            text={testimonial.text}
            name={testimonial.name}
            role={testimonial.role}
          />
        ))}
      </div>
      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
    </div>

  );
};

export default TestimonialCarousel;