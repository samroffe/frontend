import React from 'react'
import { useNavigate } from 'react-router-dom'
import {  AppBar, Toolbar, Typography, Button } from '@mui/material';
import ImageBox from './imagebox';


const Home = (props) => {
  const { loggedIn } = props
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault();

    if (loggedIn) {
      } else {
        navigate('/login');
      }
    }

  return (
    <>
    <AppBar position="static" sx={{ backgroundColor: 'transparent' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Home
        </Typography>
        <Button color="inherit" href="/about">About</Button>
        <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: '25px' }} href="/login">Sign in</Button>
      </Toolbar>
    </AppBar>
    <form onSubmit={handleSubmit}>
    <div className="mainContainer">
      <div>
          <div className='titleContainer'>
            <span className="letterG">G</span>
            <span className="letterP">P</span>
            <span className="letterT">T</span>
            <span className="letterPlus">+</span>
          </div>
          <div className="feature">
            <div className="featureTitle">Introducing GPT Plus: Elevating Your Experience</div> 
            <br />
            With GPT Plus, unlock the power to tailor your 
            <br />
            backend to seamlessly integrate diverse
            <br /> 
            services,enhancing functionality
            <br />
            like never before.
          </div>
      </div>
      <div className="Loginfeature">
      <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: '25px' }}>
            Sign in
      </Button>
    </div>
    <div>
      <ImageBox />
    </div>
    </div>
    </form>
    </>
  ) 
}

export default Home