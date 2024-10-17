import React from "react";
import "./About.css"; // Import the custom CSS for styling
  
const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About ArogyaSathi</h2>
        <p className="about-description">
          ArogyaSathi is a comprehensive digital health companion that leverages advanced technology to provide personalized, proactive health management. Our platform adapts to individual user needs, integrating various health data sources to offer holistic care across physical and mental well-being.
        </p>
        <h3 className="features-title">Key Features</h3>
        <ul className="features-list">
          <li><strong>Symptom Checker:</strong> Analyze symptoms and get condition suggestions along with emergency indicators and precautionary measures.</li>
          <li><strong>Secure Medical Data Storage:</strong> Secure access to your medical data with a unique MedicalID, ensuring data privacy and controlled access.</li>
          <li><strong>Virtual Health Assistant:</strong> A 24/7 AI chatbot for health queries with voice assistance integration.</li>
          <li><strong>Emergency Support:</strong> First aid guidance and emergency contact alerts, along with a location-based hospital finder.</li>
          <li><strong>Community Support:</strong> Connect with forums and community groups to share health experiences.</li>
          <li><strong>Exercise Analysis:</strong> Get feedback on your exercise performance with real-time or post-exercise insights.</li>
          <li><strong>Continuous Updates:</strong> Our AI models are continuously updated with new data and feedback to improve your health management experience.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
