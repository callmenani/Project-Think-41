import React from 'react';

function Message({ sender, text }) {
  const style = {
    padding: '8px 12px',
    borderRadius: '8px',
    margin: '4px 0',
    maxWidth: '80%',
    alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
    backgroundColor: sender === 'user' ? '#dcf8c6' : '#f1f0f0'
  };

  return <div style={style}><strong>{sender}:</strong> {text}</div>;
}

export default Message;