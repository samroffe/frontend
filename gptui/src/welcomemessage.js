import React from 'react';
import { Typography, Box } from '@mui/material';



function WelcomeMessage({ handleBoxClick }) {
  return (
    <div>
      <div className="welcome-message">Hello User,</div>
      <div className="help-message">How can I help you today?</div>
      <div style={{ display: 'flex' }}>
        <Box className="aws-box" onClick={() => handleBoxClick('Set up an AWS EC2 instance in us-east-1')}>
          <Typography variant="body1">Set up an AWS instance</Typography>
          <Typography variant="body1">within the US East (N. Virginia) region</Typography>
        </Box>
        <Box className="s3-box" onClick={() => handleBoxClick('Help me search Flight from BLR to HYD on 1st Apr 2024 and return flight on 4th April 2024')}>
          <Typography variant="body1">Search Best Flights </Typography>
          <Typography variant="body1">from BLR to HYD</Typography>
        </Box>
        <Box className="shopping" onClick={() => handleBoxClick('Help me buy tshirt from Nike under Rs 1000')}>
          <Typography variant="body1">Help me buy tshirt</Typography>
          <Typography variant="body1">from Nike?</Typography>
        </Box>
        <Box className="movie" onClick={() => handleBoxClick('Help me find all English movies currently showing in Bengaluru')}>
          <Typography variant="body1">Help me find current English</Typography>
          <Typography variant="body1">movies?</Typography>
        </Box>
      </div>
    </div>
  );
}

export default WelcomeMessage;