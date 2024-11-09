import React from "react";
import "./Help.css";

const Help = () => {
  return (
    <div className="Section">
      <div className="help-container2">
        <h1>Welcome to ArogyaSathi: Your Modern Medical Portal</h1>
        <p>
          This guide will help you navigate and make the most of the platform's
          features.
        </p>

        <div className="help-section">
          <h2>1. Medical Appointment</h2>
          <p>
            - Schedule a medical appointment with our healthcare providers for
            comprehensive care.
            <br />- Access appointment details, including appointment status and
            follow-ups to ensure timely care.
          </p>
        </div>

        <div className="help-section">
          <h2>2. Symptom Checker</h2>
          <p>
            - Enter your symptoms in the Symptom Checker to get
            potential conditions and precautionary measures.
            <br />- You'll receive medical report on immediate action based on
            your symptoms.
          </p>
        </div>

        <div className="help-section">
          <h2>3. Exercise Analysis</h2>
          <p>
            - The platform analyzes your exercise movements and provides
            real-time and post-workout time  <br /> by using AI-ML technology
            <br />- Stay fit with proper exercise steps!
          </p>
        </div>

        <div className="help-section">
          <h2>4. Virtual Health Assistant</h2>
          <p>
            - Use the 24/7 AI chatbot for any health-related queries.
            <br />- The assistant can guide you through symptoms, advice, and
            more.
          </p>
        </div>

        <div className="help-section">
          <h2>5. Mental Health Support</h2>
          <p>
            - Our AI-powered therapy chatbot helps you manage stress, anxiety,
            and provides useful resources.
            <br />- Gives the user responsive answer for better health advice
            and mental health support
          </p>
        </div>

        <div className="help-section">
          <h2>6. Secure Medical Data Storage</h2>
          <p>
            - Your medical records are securely stored. Each user is assigned a
            unique MedicalID for data access.
            <br />- Rest assured that all sensitive data is protected with
            robust JWT authentication.
          </p>
        </div>

        <div className="help-section">
          <h2>7. Emergency Support</h2>
          <p>
            - Find the nearest hospitals using the location-based hospital
            finder.
            <br />- In case of emergencies, the platform also provides first aid
            guidance and can emergency contacts.
          </p>
        </div>



        <div className="help-section">
          <h2>8. Updates and Performance</h2>
          <p>
            - We're constantly improving! to make the platform better.
            <br />- New features and updates are automatically integrated,
            providing a seamless experience.
          </p>
        </div>

        <p className="help-footer">
          If you have any questions, feel free to reach out to our support team
          via the virtual assistant or contact page!
        </p>
      </div>
    </div>
  );
};

export default Help;
