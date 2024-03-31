import React from 'react';
import { List, ListItemButton, ListItemText, Drawer, IconButton, Box, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



function SidePanel({ setMessages, setIsLoggedIn }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
     <div style={{ zIndex: 1300, position: 'fixed' }}>
         <Box sx={{ ml: open ? '122px' : '-26px', transition: 'margin 0.2s' }}>
           <Paper elevation={6} style={{ backgroundColor: 'transparent' }}>
             <IconButton onClick={() => setOpen(!open)}>
               <MenuIcon style={{ color: '#fff' }} />
             </IconButton>
           </Paper>
         </Box>
      </div>
      <Drawer variant="persistent" open={open} anchor="left" sx={{ bgcolor: '#1a1b1e' }}>
        <List sx={{ mt: 5 }}>
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
    </div>
  );
}

export default SidePanel;