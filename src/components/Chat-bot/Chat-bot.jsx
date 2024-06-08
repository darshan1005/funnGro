import React, { useState } from 'react';
import axios from 'axios';
import './bot.css';

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [chat, setChat] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const preprocessResponse = (text) => {
    text = text.replace(/\*{2}(.*?)\*{2}/g, '<strong>$1</strong>');
    text = text.replace(/\_{2}(.*?)\_{2}/g, '<em>$1</em>');
    text = text.replace(/^\*(.*)/gm, '<li>$1</li>');
    text = text.replace(/^\d\.(.*)/gm, '<li>$1</li>');
    text = `<div>${text}</div>`;
    return text;
  }

  const generateAnswer = async () => {
    if (!question.trim()) return;
    const newChat = [...chat, { type: 'user', text: question }];
    setChat(newChat);
    setQuestion("");
    try {
      setChat([...newChat, { type: 'bot', text: "loading...." }]);
      const res = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBJXZ7zrtkDGp7-fAfaeheCMbCwZPwt6sQ",
        method: "POST",
        data: {
          contents: [
            { parts: [{ text: question }] },
          ],
        },
      });
      const botAnswer = preprocessResponse(res.data.candidates[0].content.parts[0].text);
      setChat([...newChat, { type: 'bot', text: botAnswer }]);
    } catch (error) {
      console.error("Error generating story:", error);
      setChat([...newChat, { type: 'bot', text: "Sorry, I couldn't get a response." }]);
    }
  };

  return (
    <div className="floating-chat">
      <div className={`chat-container ${isChatOpen ? 'open' : 'closed'}`}>
        <div className="chat-header" onClick={toggleChat}>
          <h1>Funngro Bot</h1>
          {isChatOpen && <button className="chat-close" onClick={toggleChat}>X</button>}
        </div>
        {isChatOpen && (
          <>
            <div className="chat-box">
              {chat.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.type}`} dangerouslySetInnerHTML={{ __html: msg.text }}>
                </div>
              ))}
            </div>
            <div className="chat-inputs">
              <textarea value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Gemini powered..."></textarea>
              <button onClick={generateAnswer}>Send</button>
            </div>
          </>
        )}
      </div>
      {!isChatOpen && <button className="chat-toggle" onClick={toggleChat}>Chat</button>}
    </div>
  );
};

export default Chatbot;
