import React, { useState, useEffect, useRef } from 'react';
import { FaUserMd, FaPaperPlane, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Chatbot.css';
import chatImage from '../../../images/Chat.png';

const ArogyaSathi = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [healthData, setHealthData] = useState({ healthTips: [], medicines: {}, diseases: {}, exercises: {} });
    const [userName, setUserName] = useState('Sathi');  // Default username is "Sathi"
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        fetch('/healthData.json')
            .then((response) => response.json())
            .then((data) => setHealthData(data))
            .catch((error) => console.error('Error fetching health data:', error));

        setUserName('Sathi');  // Use default username "Sathi"
        addBotMessage(`Hello Sathi! I'm ArogyaSathi, your personal health assistant. How can I help you today?`);
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
        let responseText = "I'm not sure about that. Can you ask something about health tips, medicines, diseases, or exercises?";

        if (lowercaseInput.includes('tip')) {
            const randomTip = healthData.healthTips[Math.floor(Math.random() * healthData.healthTips.length)];
            responseText = `Here's a health tip for you, ${userName}: ${randomTip}`;
        } else if (lowercaseInput.includes('medicine')) {
            const medicineName = input.split(' ').pop();
            responseText = healthData.medicines[medicineName] || "I don't have information on that medicine.";
        } else if (lowercaseInput.includes('disease')) {
            const diseaseName = input.split(' ').pop();
            responseText = healthData.diseases[diseaseName] || "I don't have information on that disease.";
        } else if (lowercaseInput.includes('exercise')) {
            const exerciseName = input.split(' ').pop();
            responseText = healthData.exercises[exerciseName] || "I don't have information on that exercise.";
        } else if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi')) {
            responseText = `Hello ${userName}! How can I help you today? Feel free to ask about health tips, medicines, diseases, or exercises.`;
        } else if (lowercaseInput.includes('symptoms') || lowercaseInput.includes('what are the symptoms of')) {
            responseText = "Symptoms vary by condition. Can you specify a disease or health issue?";
        } else if (lowercaseInput.includes('diet')) {
            responseText = "A balanced diet includes fruits, vegetables, whole grains, and lean proteins. Can I help you with a specific diet plan?";
        } else if (lowercaseInput.includes('exercise recommendations')) {
            responseText = "Regular exercise is key to maintaining good health. Do you need recommendations for specific exercises?";
        } else if (lowercaseInput.includes('health benefits of')) {
            const keyword = lowercaseInput.split('health benefits of ').pop().trim();
            if (keyword) {
                responseText = `The health benefits of ${keyword} include improved fitness, mood, and energy levels.`;
            }
        } else if (lowercaseInput.includes('prevent') || lowercaseInput.includes('how to prevent')) {
            responseText = "Prevention strategies vary by disease. Can you specify which disease you'd like to know about?";
        } else if (lowercaseInput.includes('when to see a doctor')) {
            responseText = "It's best to see a doctor if you're experiencing persistent symptoms, sudden changes in health, or if you have specific health concerns.";
        } else if (lowercaseInput.includes('what is')) {
            const question = lowercaseInput.split('what is ').pop().trim();
            responseText = answerQuestion(question);
        } else if (lowercaseInput.includes('how to')) {
            const question = lowercaseInput.split('how to ').pop().trim();
            responseText = answerQuestion(question);
        }

        return responseText;
    };

    const answerQuestion = (question) => {
        // You can expand this object with more Q&A pairs as needed
        const questionAnswers = {
            'diabetes': 'Diabetes is a chronic condition that occurs when the body cannot properly process food for use as energy.',
            'hypertension': 'Hypertension, or high blood pressure, is a condition in which the blood vessels have persistently raised pressure.',
            'healthy lifestyle': 'A healthy lifestyle involves regular exercise, a balanced diet, adequate sleep, and stress management.',
            'heart disease': 'Heart disease refers to a range of conditions that affect your heart, including coronary artery disease and heart attacks.',
            // Add more questions and answers here
        };

        return questionAnswers[question] || "I don't have an answer for that question. Please ask something else.";
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
            <div className="rotating-ring">
            </div>  
            <img src={chatImage} alt="chatbot avatar" className="avatar-image"/>          
            </div>
        </div>
        </div>
    );
};

export default ArogyaSathi;
