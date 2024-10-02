import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { user: 'You', message: inputMessage }]);
      setInputMessage('');

      // Simulate bot response (for demo purposes)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: 'Bot', message: 'How can I assist you today?' }
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user.toLowerCase()}`}>
            <strong>{msg.user}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
