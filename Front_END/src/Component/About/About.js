import React from 'react';
import { AlertCircle, Activity, Shield, Headphones, Users, RefreshCw } from 'lucide-react';
import './About.css';  // Import the CSS file

const About = () => {
    const features = [
        { icon: <AlertCircle className="icon" />, title: "Smart Symptom Analysis", description: "AI-powered symptom checker for accurate condition suggestions." },
        { icon: <Shield className="icon" />, title: "Secure Health Vault", description: "Bank-grade encryption for your medical records." },
        { icon: <Headphones className="icon" />, title: "24/7 Health Assistant", description: "Intelligent chatbot with voice support for health guidance." },
        { icon: <Activity className="icon" />, title: "Emergency Response", description: "Quick access to first aid and nearby hospitals." },
        { icon: <Users className="icon" />, title: "Health Community", description: "Join support groups and share experiences." },
        { icon: <RefreshCw className="icon" />, title: "Continuous Learning", description: "Updated with the latest medical research for better outcomes." }
    ];

    return (
        <div className="about-section">
            <div className="about-container">
                <div className="about-header">
                    <h1 className="about-title">Welcome to ArogyaSathi</h1>
                    <p className="about-description">Your intelligent health companion that combines technology with personalized care.</p>
                </div>
                
                <div className="feature-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="icon-container">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;