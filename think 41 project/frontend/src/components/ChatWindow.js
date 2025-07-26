import React, { useState } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage, { sender: 'ai', text: 'Mocked AI response.' }]);
    setInput('');
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <MessageList messages={messages} />
        <UserInput input={input} setInput={setInput} onSend={handleSend} />
      </div>
      <div style={{ width: '200px', marginLeft: '10px' }}>
        <h4>🕘 History (Milestone 8)</h4>
        <p>Coming soon...</p>
      </div>
    </div>
  );
}

export default ChatWindow;