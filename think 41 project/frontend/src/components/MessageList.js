import React from 'react';
import Message from './Message';

function MessageList({ messages }) {
  return (
    <div style={{ minHeight: '200px', marginBottom: '1rem' }}>
      {messages.map((msg, idx) => (
        <Message key={idx} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
}

export default MessageList;