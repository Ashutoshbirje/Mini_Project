import React from 'react';
import './Help.css'; // Import the CSS file

const Help = () => {
  return (
    <div className="help-container2">
      <h1>Welcome to ArogyaSathi: Your Modern Medical Portal</h1>
      <p>This guide will help you navigate and make the most of the platform's features.</p>

      <div className="help-section">
        <h2>1. Personalized Health Advice</h2>
        <p>
          - Start by filling out your health profile to receive AI-powered personalized health tips and recommendations.
          <br />
          - Access daily health advice based on your habits, medical history, and goals.
        </p>
      </div>

      <div className="help-section">
        <h2>2. Symptom Checker</h2>
        <p>
          - Enter your symptoms in the <strong>Symptom Checker</strong> to get potential conditions and precautionary measures.
          <br />
          - If symptoms seem urgent, you'll receive emergency indicators and suggestions for immediate action.
        </p>
      </div>

      <div className="help-section">
        <h2>3. Secure Medical Data Storage</h2>
        <p>
          - Your medical records are securely stored. Each user is assigned a unique <strong>MedicalID</strong> for data access.
          <br />
          - Rest assured that all sensitive data is protected with robust authentication.
        </p>
      </div>

      <div className="help-section">
        <h2>4. Virtual Health Assistant</h2>
        <p>
          - Use the 24/7 AI chatbot for any health-related queries. You can type or use the voice assistant for hands-free help.
          <br />
          - The assistant can guide you through symptoms, advice, and more.
        </p>
      </div>

      <div className="help-section">
        <h2>5. Mental Health Support</h2>
        <p>
          - Our AI-powered therapy chatbot helps you manage stress, anxiety, and provides useful resources.
          <br />
          - Track your mood regularly for insights into your mental well-being.
        </p>
      </div>

      <div className="help-section">
        <h2>6. Emergency Support</h2>
        <p>
          - Find the nearest hospitals using the location-based hospital finder.
          <br />
          - In case of emergencies, the platform also provides first aid guidance and can send alerts to emergency contacts.
        </p>
      </div>

      <div className="help-section">
        <h2>7. Community Support</h2>
        <p>
          - Join forums and connect with others. Share experiences, ask questions, and get advice from fellow users and experts.
        </p>
      </div>

      <div className="help-section">
        <h2>8. Exercise Analysis</h2>
        <p>
          - The platform analyzes your exercise movements and provides real-time or post-workout feedback for improvement.
          <br />
          - Stay fit with customized exercise tips!
        </p>
      </div>

      <div className="help-section">
        <h2>9. Updates and Feedback</h2>
        <p>
          - We're constantly improving! You can submit feedback to help us make the platform better.
          <br />
          - New features and updates are automatically integrated, providing a seamless experience.
        </p>
      </div>

      <p className="help-footer">If you have any questions, feel free to reach out to our support team via the virtual assistant or contact page!</p>
    </div>
  );
};

export default Help;
