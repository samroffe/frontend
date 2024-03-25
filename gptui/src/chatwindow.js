import React from 'react';
import { Paper, List } from '@mui/material';
import SkeletonLoader from './Skeleton';
import WelcomeMessage from './welcomemessage';
import axios from 'axios';

  
function ChatWindow({ messages, loading, setMessages, setLoading }) {
    const handleBoxClick = async (message) => {
        try {
          setLoading(true);
          setMessages([...messages, { role: 'user', content: message }]);
          const response = await axios.post('http://localhost:8000/gpt/chatassistant/', { message: message });
          const responseData = response.data;
          setMessages(prevMessages => [...prevMessages, { role: 'ai', content: responseData.message }]);
        } catch (error) {
          console.error('Error sending message:', error);
        } finally {
          setLoading(false);
        }
      };
    return (
    <Paper sx={{ backgroundColor: '#1a1b1e', color: '#fff' }} className="chat-window">
        {messages.length === 0 && (
          <WelcomeMessage handleBoxClick={handleBoxClick} />
        )}
        <List>
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              {message.role === 'user' && <img src="/user.png" alt="" className="avatar" />}
              {message.role === 'ai' && <img src="/ai.png" alt="" className="avatar" />}
              <div className="message-content">
                {message.role === 'ai' ? <pre>{message.content}</pre> : message.content}
              </div>
            </div>
          ))}
          {loading && <SkeletonLoader />}
        </List>
      </Paper>
  );
}

export default ChatWindow;