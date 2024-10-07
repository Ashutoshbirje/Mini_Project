import React, { useState, useEffect } from 'react';
import './Chatbot.css'; // Move styles here or embed them as a style object

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userMessage, setUserMessage] = useState('');

    useEffect(() => {
        // Add initial bot message
        setTimeout(() => {
            addMessage("Hello! I'm ArogyaSaathi, your health companion. How can I assist you today?", 'bot-message');
        }, 500);
    }, []);

    const sendMessage = () => {
        if (userMessage.trim() === "") {
            return;
        }

        // Add user message to chat
        addMessage(userMessage, 'user-message');
        setUserMessage('');

        // Simulate loading animation
        addLoadingBubbles();

        // Send message to backend
        fetch('http://127.0.0.1:5000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userMessage })
        })
        .then(response => response.json())
        .then(data => {
            removeLoadingBubbles();
            addMessage(data.response, 'bot-message');
        })
        .catch(error => {
            console.error('Error:', error);
            removeLoadingBubbles();
            addMessage("Sorry, something went wrong. Please try again.", 'bot-message');
        });
    };

    const addMessage = (message, className) => {
        setMessages(prevMessages => [...prevMessages, { text: message, type: className }]);
    };

    const addLoadingBubbles = () => {
        setMessages(prevMessages => [...prevMessages, { type: 'loading-bubbles' }]);
    };

    const removeLoadingBubbles = () => {
        setMessages(prevMessages => prevMessages.filter(msg => msg.type !== 'loading-bubbles'));
    };

    const handleInputChange = (e) => {
        setUserMessage(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <i className="fas fa-heartbeat"></i> ArogyaSaathi
            </div>
            <div id="chatbox" className="chatbox">
                {messages.map((msg, index) => {
                    if (msg.type === 'loading-bubbles') {
                        return (
                            <div className="loading-bubbles" key={index}>
                                <div className="loading-bubble"></div>
                                <div className="loading-bubble"></div>
                                <div className="loading-bubble"></div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={index} className={`message ${msg.type}`}>
                                {msg.type === 'bot-message' ? <i className="fas fa-robot bot-icon"></i> : null}
                                {msg.text}
                            </div>
                        );
                    }
                })}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    id="message-box"
                    placeholder="Type your health query..."
                    value={userMessage}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                />
                <button id="send-button" onClick={sendMessage}>
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
