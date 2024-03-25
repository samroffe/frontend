import React from 'react';
import { List, ListItemButton, ListItemText, Typography, Drawer } from '@mui/material';

function SidePanel({ setMessages, setIsLoggedIn }) {
  return (
    <Drawer variant="permanent" anchor="left" sx={{ bgcolor: '#1a1b1e'  }}>
      <List>
        <ListItemButton>
          <Typography variant="h5" sx={{ color: '#fff' }}>
            Gpt+
          </Typography>
        </ListItemButton>
        <ListItemButton onClick={() => setMessages([])}>
          <ListItemText primary="New Chat" sx={{ color: '#fff' }} />
        </ListItemButton>
        <ListItemButton onClick={() => {
          setIsLoggedIn(false);
        }}>
          <ListItemText primary="Logout" sx={{ color: '#fff' }} />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default SidePanel;