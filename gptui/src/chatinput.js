import React from 'react';
import { TextField } from '@mui/material';

function ChatInput({ input, setInput, sendMessage }) {
  return (
    <div className="chat-input">
      <TextField
        className="input-field"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault(); // Prevents the addition of a new line in the input when Enter is pressed
            sendMessage();
          }
        }}
        placeholder="Enter your queries here."
      />
    </div>
  );
}

export default ChatInput;