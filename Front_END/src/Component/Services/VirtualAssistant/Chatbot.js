import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // Optional: Custom styling

function Chatbot() {
  const [messages, setMessages] = useState([{ role: 'system', content: 'Hello! How can I assist you today?' }]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const API_KEY = 'your-openai-api-key'; // Replace with your real API key

  const handleSend = async () => {
    if (userInput.trim() === '') return;

    const newMessages = [...messages, { role: 'user', content: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setLoading(true); // Show loading state

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: newMessages.slice(-5),
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          }
        }
      );

      const botMessage = response.data.choices[0].message.content;
      setMessages([...newMessages, { role: 'assistant', content: botMessage }]);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }]);
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
        {loading && <div className="message assistant">Thinking...</div>}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
