import React, { useRef, useEffect, useState } from 'react';
import './ChatSection.css';
import { RxPaperPlane } from 'react-icons/rx';
import Message from '../Message/Message';

const ChatSection = () => {
  const chatMessagesRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    // Fetch messages from the server when the component mounts
    fetchMessages();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = { type: 'user-msg', text: inputText };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText('');

    try {
      // Save the user's message to the server
      await fetch('http://localhost:5000/save-messages', {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      // Fetch updated messages from the server
      fetchMessages();
    } catch (error) {
      console.error('Error sending message to server:', error);
    }
  };

  const fetchMessages = async () => {
    try {
      // Fetch messages from the server
      const response = await fetch('http://localhost:5000/get-messages');
      const data = await response.json();

      // Update the state with the fetched messages
      setMessages(data.messages);
    } catch (error) {
      console.error('Error fetching messages from server:', error);
    }
  };

  return (
    <div className="chat-section">
      <div className="chat-sec-top">Chat</div>
      <div className="chat-messages" ref={chatMessagesRef}>
        {messages.map((message, index) => (
          <Message key={index} type={message.type} text={message.text} />
        ))}
      </div>
      <div className="chat-section-bottom">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a prompt here..."
            value={inputText}
            onChange={handleInputChange}
          />
          <button type="submit">
            <RxPaperPlane size={20} color="#fff" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatSection;
