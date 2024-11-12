import React, { useState, useEffect, useRef } from 'react';
import { FaUserMd, FaPaperPlane, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Chatbot.css';
import chatImage from '../../../images/Chat.png';
import healthData from './healthData.json';

const ArogyaSathi = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [userName, setUserName] = useState('Sathi');  // Default username is "Sathi"
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        setUserName('Sathi');
        addBotMessage("Hello Sathi! I'm ArogyaSathi, your personal health assistant. How can I help you today?");
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const addBotMessage = (text) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages((prev) => [...prev, { text, sender: 'bot' }]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000);
    };

    const handleSendMessage = () => {
        if (!input.trim()) return;

        setMessages((prev) => [...prev, { text: input, sender: 'user' }]);
        const response = getResponse(input);
        setInput('');
        addBotMessage(response);
    };

    const getResponse = (input) => {
        const lowercaseInput = input.toLowerCase();
        let responseText = "I'm not sure about that. You can ask me about common illnesses, daily routines, healthy eating, or exercises.";
    
        // Helper function to format response from object data
        const formatResponse = (data) => {
            let formattedText = '';
            
            // Handle 'description' field if it exists
            if (data.description) {
                formattedText += `${data.description}\n\n`;
            }
            
            // Handle 'symptoms' field if it exists
            if (data.symptoms) {
                formattedText += `Symptoms:\n- ${data.symptoms.join('\n- ')}\n\n`;
            }
            
            // Handle 'prevention' field if it exists
            if (data.prevention) {
                formattedText += `Prevention:\n- ${data.prevention.join('\n- ')}\n\n`;
            }
            
            // Handle 'treatment' field if it exists
            if (data.treatment) {
                formattedText += `Treatment:\n- ${data.treatment.join('\n- ')}\n\n`;
            }
            
            // Handle 'benefits' field if it exists
            if (data.benefits) {
                formattedText += `Benefits:\n- ${data.benefits.join('\n- ')}\n\n`;
            }
    
            // Handle 'components' field if it exists (e.g., for balanced diet)
            if (data.components) {
                formattedText += `Components:\n- ${data.components.join('\n- ')}\n\n`;
            }
    
            // Handle 'recommendations' if it exists (e.g., for hydration)
            if (data.recommendations) {
                formattedText += `Recommendations:\n- ${data.recommendations.join('\n- ')}\n\n`;
            }
    
            // Handle 'tips' field if it exists
            if (data.tips) {
                formattedText += `Tips:\n- ${data.tips.join('\n- ')}\n\n`;
            }
    
            // Handle 'activities' for routines
            if (data.activities) {
                formattedText += `Activities:\n- ${data.activities.join('\n- ')}\n\n`;
            }
    
            return formattedText.trim();
        };
    
        // Medical Information
        if (lowercaseInput.includes('flu')) {
            responseText = formatResponse(healthData.medicalInformation.commonIllnesses.flu);
        } else if (lowercaseInput.includes('cold')) {
            responseText = formatResponse(healthData.medicalInformation.commonIllnesses.cold);
        } else if (lowercaseInput.includes('diabetes')) {
            responseText = formatResponse(healthData.medicalInformation.commonIllnesses.diabetes);
        } else if (lowercaseInput.includes('hypertension')) {
            responseText = formatResponse(healthData.medicalInformation.commonIllnesses.hypertension);
    
        // Healthy Eating
        } else if (lowercaseInput.includes('balanced diet') || lowercaseInput.includes('healthy diet')) {
            responseText = formatResponse(healthData.medicalInformation.healthyEating.balancedDiet);
        } else if (lowercaseInput.includes('hydration')) {
            responseText = formatResponse(healthData.medicalInformation.healthyEating.hydration);
        } else if (lowercaseInput.includes('diet tips')) {
            responseText = formatResponse(healthData.medicalInformation.healthyEating.dietTips);
    
        // Daily Routine
        } else if (lowercaseInput.includes('morning routine')) {
            responseText = formatResponse(healthData.medicalInformation.dailyRoutine.morningRoutine);
        } else if (lowercaseInput.includes('afternoon routine')) {
            responseText = formatResponse(healthData.medicalInformation.dailyRoutine.afternoonRoutine);
        } else if (lowercaseInput.includes('evening routine')) {
            responseText = formatResponse(healthData.medicalInformation.dailyRoutine.eveningRoutine);
    
        // Exercise
        } else if (lowercaseInput.includes('cardio')) {
            responseText = formatResponse(healthData.medicalInformation.exercise.cardio);
        } else if (lowercaseInput.includes('strength training')) {
            responseText = formatResponse(healthData.medicalInformation.exercise.strengthTraining);
        } else if (lowercaseInput.includes('flexibility')) {
            responseText = formatResponse(healthData.medicalInformation.exercise.flexibility);
        } else if (lowercaseInput.includes('balance')) {
            responseText = formatResponse(healthData.medicalInformation.exercise.balance);
        }
    
        return responseText;
    };
    

    const clearInput = () => {
        setInput('');
    };

    return (
        <div className="main-container">
            <div className="chatbot-container">
                <div className="header">
                    <FaUserMd className="icon" />
                    <h3 className="header-title">ArogyaSathi</h3>
                </div>
                <div className="messages-container">
                    <AnimatePresence>
                        {messages.map((msg, index) => (
                            <motion.div
                                key={index}
                                className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {msg.text}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {isTyping && (
                        <motion.div 
                            className="typing-indicator"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            ArogyaSathi is typing...
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask ArogyaSathi about health..."
                        className="input"
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    {input && (
                        <button onClick={clearInput} className="clear-button">
                            <FaTimes />
                        </button>
                    )}
                    <button onClick={handleSendMessage} className="send-button">
                        <FaPaperPlane />
                    </button>
                </div>
            </div>
            <div className="chatbot-image">
                <div className="avatar">
                    <div className="rotating-ring"></div>  
                    <img src={chatImage} alt="chatbot avatar" className="avatar-image"/>          
                </div>
            </div>
        </div>
    );
};

export default ArogyaSathi;
