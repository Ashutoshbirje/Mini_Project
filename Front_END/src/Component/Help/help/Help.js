import React, { useState } from 'react';
import './Help.css';

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How can I use the Symptom Checker?',
      answer: 'To use the Symptom Checker, click on the “Symptom Checker” tab, enter your symptoms, and our AI will analyze and suggest possible conditions.'
    },
    {
      question: 'Is my medical data secure?',
      answer: 'Yes, we use a robust authentication system and unique MedicalIDs to ensure your data is secure and accessible only to you.'
    },
    {
      question: 'How can I take a medical appointment?',
      answer: 'Go to the GetAppoint section, choose a New Appointment, and click on “Schedule Appointment”  after filling all details.'
    },
    {
      question: 'How does the Health Risk Prediction work?',
      answer: 'Our ML models analyze various health indicators to predict potential risks, offering preventive recommendations tailored to you.'
    },
    {
      question: 'Can I track my exercise performance?',
      answer: 'Yes, the Exercise Analysis feature allows you to monitor your movements for correct form and provides feedback for improvement.'
    },
    {
      question: 'How can I reach customer support?',
      answer: 'Please use the contact form below, or email us at support@arogyasathi.com for further assistance.'
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="help-section">
      <h2 className="help-title">Help & Support</h2>

      <div className="faq-section">
        <h3 className="section-title">Frequently Asked Questions</h3>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>▼</span>
                </button>
              {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;