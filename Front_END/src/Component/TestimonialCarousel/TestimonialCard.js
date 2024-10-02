import React from 'react';

const TestimonialCard = ({ text, name, role }) => {
  return (
    <div className="testimonial-card">
      <div className="quote-icon">“</div>
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <div className="author-image"></div> {/* Placeholder for author image */}
        <div>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;