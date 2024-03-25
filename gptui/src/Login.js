import React, { useState } from 'react';
// import Keycloak from 'keycloak-js';
import { Button } from '@mui/material';


function LoginForm({ setLoginStatus }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('')

  const handleSubmit = event => {
    event.preventDefault();

    // Check if the username and password match the local user
    if (username === 'admin' && password === 'password') {
      alert('Logged in successfully');
      setLoginStatus(true); 
    } else {
      alert('Invalid username or password');
    }

    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={'mainContainer'}>
        <div className={'LogintitleContainer'}>
        <div className='titleContainer'>
            <span className="letterG">G</span>
            <span className="letterP">P</span>
            <span className="letterT">T</span>
            <span className="letterPlus">+</span>
          </div>
        </div>
        <br />
        <div className={'inputContainer'}>
          <input
            placeholder="Enter your user here"
            onChange={(ev) => setUsername(ev.target.value)}
            className={'inputBox'}
          />
        </div>
        <br />
        <div className={'inputContainer'}>
          <input
            type="password"
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className={'inputBox'}
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={'inputContainer'}>
          <Button type="submit" variant="contained" color="primary">
            Log in
          </Button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;