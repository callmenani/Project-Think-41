import React from 'react';

function UserInput({ input, setInput, onSend }) {
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSend()}
        style={{ padding: '8px', width: '80%' }}
        placeholder="Type a message..."
      />
      <button onClick={onSend} style={{ padding: '8px 16px', marginLeft: '8px' }}>Send</button>
    </div>
  );
}

export default UserInput;