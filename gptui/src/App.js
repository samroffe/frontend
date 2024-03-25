import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import LoginForm from './Login';
import SidePanel from './sidepanel';
import ChatWindow from './chatwindow';
import ChatInput from './chatinput';
import Home from './home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const [loading, setLoading] = useState(false);


  const sendMessage = async () => {
    if (input.trim() !== '') { // Check if input is not an empty string
      try {
        setLoading(true);
        setMessages([...messages, { role: 'user', content: input }]);
        const response = await axios.post('http://localhost:8000/gpt/chatassistant/', { message: input });
        const responseData = response.data;
        setMessages(prevMessages => [...prevMessages, { role: 'ai', content: responseData.message }]);
        setInput('');
      } catch (error) {
        console.error('Error sending message:', error);
      } finally {
        setLoading(false);
      }
    }
  };    
   
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/app" /> : <LoginForm setLoginStatus={setIsLoggedIn} />} />
        <Route path="/app" element={isLoggedIn ? (
          <div className="app">
            <SidePanel setMessages={setMessages} setIsLoggedIn={setIsLoggedIn} />
            <ChatWindow messages={messages} loading={loading} setMessages={setMessages} setLoading={setLoading} />
            <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
          </div>
        ) : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;